import { create } from 'zustand'
import { UserData } from '../types/user'

type UserStoreState = {
  user: UserData | null;
  isLoading: boolean;
  error: string | null;
  getUser: () => Promise<void>;
};

const useUserStore = create<UserStoreState>((set) => ({
  user: null,
  isLoading: false,
  error: null,
  getUser: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await fetch('/api/user');
      const data = await response.json();
      set({ user: data, isLoading: false });
    } catch (err) {
      set({ error: `Failed to fetch user: ${err}`, isLoading: false, user: null });
    }
  },
}));

export default useUserStore;