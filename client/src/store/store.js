import { create } from "zustand"
import { deleteLauncherById, getAllLaunchers, getLauncherById } from "../api/api"

export const useLauncherStore = create((set) => ({
    launchers: [],
    feachLaunchers: async () => {
        const data = await getAllLaunchers();
         set({ launchers: data })
        return data
    },
    deleteLuancher: async (id) => {
        const res = await deleteLauncherById(id)
        alert("launcher id: " + id.subString(0,5) + " deleted")
        set((state) => ({ launchers: state.launchers.filter(l => l._id !== id) }))
    }

}))