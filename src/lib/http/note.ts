import $api from "./index"
export const getNotes = async <T>(url: string): Promise<T> => {
    try {
        const response = await $api.get<T>(url);
        return response.data;
    } 
    catch (error) {
        console.error('Fetch error:', error);
        throw error; // Важно пробрасывать ошибку для SWR
    }
}