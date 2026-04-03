import BGURI from "./BGURI"
const CachedData = {}
const getButtonsFromBG = async (page) => {
    try {
        if (CachedData[page]) {
            return CachedData[page];
        }
        const response = await fetch(`${BGURI}/api/buttons?page=${page}`);
        const data = await response.json();
        if (!data.success) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        CachedData[page] = data.data;
        return data.data;
    } catch (error) {
        console.error("Error fetching buttons from backend:", error);
        return [];
    }
}

export default getButtonsFromBG;