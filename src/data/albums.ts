import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import g5 from "@/assets/g5.jpg";
import g6 from "@/assets/g6.jpg";
import g7 from "@/assets/g7.jpg";
import g8 from "@/assets/g8.jpg";

export type AlbumCategory = "Casamento" | "Evento especial";

export type Album = {
  slug: string;
  title: string;
  category: AlbumCategory;
  cover: string;
  coverAlt: string;
  photos: { src: string; alt: string }[];
};

// Placeholders — substituir as fotos quando o material oficial chegar.
const placeholderPhotos = (titulo: string) => [
  { src: g1, alt: `${titulo} — cerimônia` },
  { src: g4, alt: `${titulo} — detalhes da decoração` },
  { src: g3, alt: `${titulo} — os noivos` },
  { src: g2, alt: `${titulo} — recepção` },
  { src: g6, alt: `${titulo} — bastidores` },
  { src: g5, alt: `${titulo} — salão` },
  { src: g7, alt: `${titulo} — alianças` },
  { src: g8, alt: `${titulo} — primeira dança` },
];

export const albums: Album[] = [
  {
    slug: "andreia-lucas",
    title: "Andreia & Lucas",
    category: "Casamento",
    cover: g1,
    coverAlt: "Andreia e Lucas — capa do álbum",
    photos: placeholderPhotos("Andreia & Lucas"),
  },
  {
    slug: "angela-vinicius",
    title: "Angela & Vinicius",
    category: "Casamento",
    cover: g3,
    coverAlt: "Angela e Vinicius — capa do álbum",
    photos: placeholderPhotos("Angela & Vinicius"),
  },
  {
    slug: "gabriela-nicholas",
    title: "Gabriela & Nicholas",
    category: "Casamento",
    cover: g4,
    coverAlt: "Gabriela e Nicholas — capa do álbum",
    photos: placeholderPhotos("Gabriela & Nicholas"),
  },
  {
    slug: "gabriela-pedro",
    title: "Gabriela & Pedro",
    category: "Casamento",
    cover: g5,
    coverAlt: "Gabriela e Pedro — capa do álbum",
    photos: placeholderPhotos("Gabriela & Pedro"),
  },
  {
    slug: "nadine-flavio",
    title: "Nadine & Flavio",
    category: "Casamento",
    cover: g6,
    coverAlt: "Nadine e Flavio — capa do álbum",
    photos: placeholderPhotos("Nadine & Flavio"),
  },
  {
    slug: "yasmin-gustavo",
    title: "Yasmin & Gustavo",
    category: "Casamento",
    cover: g8,
    coverAlt: "Yasmin e Gustavo — capa do álbum",
    photos: placeholderPhotos("Yasmin & Gustavo"),
  },
  {
    slug: "milena-15-anos",
    title: "Milena — 15 anos",
    category: "Evento especial",
    cover: g7,
    coverAlt: "Milena 15 anos — capa do álbum",
    photos: placeholderPhotos("Milena 15 anos"),
  },
];
