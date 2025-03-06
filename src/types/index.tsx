export interface MovieModalProps {
  visible: boolean;
  onClose: () => void;
  onSubmit: (movie: Movie) => void;
  editMode?: boolean; // Default qiymat borligi uchun ixtiyoriy qilamiz
  movieData?: Movie | null; // Default qiymat null bo‘lishi uchun ixtiyoriy qilamiz
}

export interface Movie {
  _id: string;
  title: string;
  year: number;
  director: string;
  genre: string[];
  duration: number;
  format: string;
  price: number;
  image?: string;
  availableDate?: string; // Agar ixtiyoriy bo‘lsa, ? qo‘shamiz
  availableTime?: string;
}
