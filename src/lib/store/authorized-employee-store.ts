import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface IAuthorizedEmployee{
    employeeId: string,
    setEmployeeId: (id: string) => void,
    clearEmployeeId: () => void
}

export const useAuthorizedEmployeeStore = create<IAuthorizedEmployee>()
(
  persist(
    (set) => ({
      employeeId: "",
      setEmployeeId: (id) => set({ employeeId: id }),
      clearEmployeeId: () => {
       // Удаляем ключ из localStorage
        if (typeof window !== 'undefined') {
          localStorage.removeItem('employee-storage');
        }
        // Сбрасываем состояние
        //set({ employeeId: "" });
      }
    }),
    {
      name: "employee-storage", // Ключ для LocalStorage
    }
  )
);