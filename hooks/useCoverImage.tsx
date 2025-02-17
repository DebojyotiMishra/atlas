import { create } from "zustand";

type CoverImageStore = {
  url?: string;
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
  onReplace: (url: string) => void;
};

const useCoverImage = create<CoverImageStore>((set) => ({
  url: undefined,
  isOpen: false,
  onOpen: () => set({ isOpen: true, url: undefined }),
  onClose: () => set({ isOpen: false, url: undefined }),
  onReplace: (url: string) => set({ isOpen: true, url }),
}));

export default useCoverImage;