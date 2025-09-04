import { create } from 'zustand'
import type {Tab} from "@/lib/types/TabMenuTypes"

type TabStoreType = {
  activeTab: Tab
  setActiveTab: (newTab: Tab) => void
}

export const useTabStore = create<TabStoreType>()((set) => ({
  activeTab: "notes",
  setActiveTab: (newActiveTab: Tab) => set((state) => ({ activeTab: newActiveTab })),
}))