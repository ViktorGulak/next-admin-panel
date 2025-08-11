import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface IAuthorizedEmployee{
    employeeId: string,
    setEmployeeId: (id: string) => void,
    clearProfileId: () => void
}

export const useAuthorizedEmployeeStore = create<IAuthorizedEmployee>()
(
  persist(
    (set) => ({
      employeeId: "",
      setEmployeeId: (id) => set({ employeeId: id }),
      clearProfileId: () => set({ employeeId: "" }),
    }),
    {
      name: "employee-storage", // Ключ для LocalStorage
    }
  )
);