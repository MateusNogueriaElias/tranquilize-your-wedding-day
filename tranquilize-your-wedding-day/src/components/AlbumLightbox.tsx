import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { Album } from "@/data/albums";

type Props = {
  album: Album | null;
  onClose: () => void;
};

export function AlbumLightbox({ album, onClose }: Props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, [album?.slug]);

  useEffect(() => {
    if (!album) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % album.photos.length);
      if (e.key === "ArrowLeft")
        setIndex((i) => (i - 1 + album.photos.length) % album.photos.length);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [album, onClose]);

  if (!album) return null;

  const photo = album.photos[index];
  const next = () => setIndex((i) => (i + 1) % album.photos.length);
  const prev = () =>
    setIndex((i) => (i - 1 + album.photos.length) % album.photos.length);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Álbum ${album.title}`}
      className="fixed inset-0 z-[100] flex flex-col bg-ink/95 backdrop-blur-md animate-in fade-in duration-300"
      onClick={onClose}
    >
      <header
        className="flex items-start justify-between gap-4 px-6 py-5 md:px-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="min-w-0">
          <p className="eyebrow text-gold">{album.category}</p>
          <h3 className="mt-1 truncate font-display text-2xl text-ivory md:text-3xl">
            {album.title}
          </h3>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar álbum"
          className="shrink-0 rounded-full border border-ivory/20 p-2 text-ivory transition-colors hover:border-gold hover:text-gold"
        >
          <X className="h-5 w-5" />
        </button>
      </header>

      <div
        className="relative flex flex-1 items-center justify-center px-4 md:px-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={prev}
          aria-label="Foto anterior"
          className="absolute left-3 z-10 rounded-full border border-ivory/20 bg-ink/40 p-3 text-ivory transition-colors hover:border-gold hover:text-gold md:left-8"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <img
          key={photo.src}
          src={photo.src}
          alt={photo.alt}
          loading="eager"
          decoding="async"
          className="max-h-[65vh] max-w-full object-contain animate-in fade-in duration-300"
        />

        <button
          type="button"
          onClick={next}
          aria-label="Próxima foto"
          className="absolute right-3 z-10 rounded-full border border-ivory/20 bg-ink/40 p-3 text-ivory transition-colors hover:border-gold hover:text-gold md:right-8"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div
        className="flex flex-col gap-4 px-6 py-5 md:px-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex gap-2 overflow-x-auto pb-1">
          {album.photos.map((p, i) => (
            <button
              key={p.src + i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Ver foto ${i + 1}`}
              className={`relative h-16 w-20 shrink-0 overflow-hidden rounded-sm border transition-all md:h-20 md:w-24 ${
                i === index
                  ? "border-gold opacity-100"
                  : "border-ivory/20 opacity-60 hover:opacity-100"
              }`}
            >
              <img
                src={p.src}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>

        <div className="flex items-center justify-between gap-4">
          <span className="text-xs text-ivory/60">
            {index + 1} / {album.photos.length}
          </span>
          <a
            href="#contato"
            onClick={onClose}
            className="inline-flex items-center justify-center border border-gold bg-gold px-6 py-3 font-display text-sm uppercase tracking-[0.2em] text-ink transition-colors hover:bg-transparent hover:text-gold"
          >
            Quero uma celebração assim
          </a>
        </div>
      </div>
    </div>
  );
}
