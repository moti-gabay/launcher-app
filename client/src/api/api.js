
import axios from 'axios'


const BASE_API_URL = import.meta.BASE_API_URL || "http://localhost:3003";


export const getAllLaunchers = async () => {
    try {
        const { data } = await axios.get(`${BASE_API_URL}/api/launchers`)
        return data;

    } catch (error) {
        console.error(error)
    }
}

export const getLauncherById = async (id) => {
    try {
        const { data } = await axios.get(`${BASE_API_URL}/api/launchers/${id}`)
        return data;

    } catch (error) {
        console.error(error)
    }
}
export const addNewLauncher = async (launcher) => {
    try {

        const { data } = await axios.post(`${BASE_API_URL}/api/launchers`, launcher)
        return data
    } catch (error) {
        console.error(error)
    }
}


export const deleteLauncherById = async (id) => {
    const { data } = await axios.delete(`${BASE_API_URL}/api/launchers/${id}`)
    return data;
}
