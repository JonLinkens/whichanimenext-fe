import create from "zustand";

export const useStore = create((set) => ({
  display_anime: false,
  set_display_anime: (newvalue) => set({ display_anime: newvalue }),

  should_search: false,
  toggle_should_search: () =>
    set((state) => ({ should_search: !state.should_search })),

  searchquery: "",
  set_searchquery: (newvalue) => set({ searchquery: newvalue }),
}));
