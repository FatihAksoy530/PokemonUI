import axiosInstance from "../axiosInstance";

const fetchPokemon = async (searchTerm: string, fetchFilter: string) => {
    const response = await axiosInstance.get(`/cards?q=${fetchFilter}:${searchTerm}`);
    return response;
}

export { fetchPokemon };