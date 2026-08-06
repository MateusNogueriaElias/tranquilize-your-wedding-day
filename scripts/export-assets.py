#!/usr/bin/env python3
"""Exporta imagens do Lovable CDN para arquivos locais e reescreve imports."""

import json
import re
from pathlib import Path
from urllib.parse import urljoin

import requests

# Domínio do preview/publicação do projeto. Ajuste se necessário.
BASE_URL = "https://id-preview--436e2d4c-3fba-44b0-b91d-9ba7804b2e85.lovable.app"

PROJECT_ROOT = Path(__file__).resolve().parent.parent
ASSETS_DIR = PROJECT_ROOT / "src" / "assets"
TARGET_FILES = [
    PROJECT_ROOT / "src" / "data" / "albums.ts",
    PROJECT_ROOT / "src" / "routes" / "index.tsx",
]


def download_asset(asset_json_path: Path) -> Path:
    """Lê o asset pointer, faz download da imagem e salva localmente."""
    data = json.loads(asset_json_path.read_text(encoding="utf-8"))
    relative_url = data["url"]
    full_url = urljoin(BASE_URL, relative_url)

    if asset_json_path.name.endswith(".asset.json"):
        stem = asset_json_path.name[: -len(".asset.json")]
        target_path = asset_json_path.parent / stem
    else:
        target_path = asset_json_path.with_suffix("")

    if target_path.exists():
        print(f"[skip] já existe: {target_path.relative_to(PROJECT_ROOT)}")
        return target_path

    print(f"[download] {data['original_filename']} -> {target_path.relative_to(PROJECT_ROOT)}")
    response = requests.get(full_url, timeout=120)
    response.raise_for_status()

    target_path.parent.mkdir(parents=True, exist_ok=True)
    target_path.write_bytes(response.content)

    return target_path


def rewrite_imports(file_path: Path) -> None:
    """Reescreve imports de .asset.json para arquivos de imagem reais."""
    content = file_path.read_text(encoding="utf-8")

    # Remove .asset.json dos imports
    content = re.sub(
        r'from\s+"([^"]+)\.asset\.json"',
        r'from "\1"',
        content,
    )

    # Remove .url dos usos
    content = re.sub(r"([A-Za-z0-9_]+)\.url", r"\1", content)

    file_path.write_text(content, encoding="utf-8")
    print(f"[rewrite] {file_path.relative_to(PROJECT_ROOT)}")


def main() -> None:
    asset_files = sorted(ASSETS_DIR.rglob("*.asset.json"))
    print(f"Encontrados {len(asset_files)} assets para exportar.\n")

    for asset_path in asset_files:
        try:
            download_asset(asset_path)
        except Exception as exc:
            print(f"[erro] {asset_path.relative_to(PROJECT_ROOT)}: {exc}")

    print("\nReescrevendo imports...")
    for target in TARGET_FILES:
        if target.exists():
            rewrite_imports(target)

    print("\nConcluído.")


if __name__ == "__main__":
    main()
