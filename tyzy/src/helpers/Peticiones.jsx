import axios from "axios";

export const Peticiones = async (url) => {
    const { data } = await axios.get(url)
    return data;
}