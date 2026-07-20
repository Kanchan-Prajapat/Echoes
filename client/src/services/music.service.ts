import api from "./api";

export async function searchMusic(query: string) {

    const { data } = await api.get(
        "/music/search",
        {
            params: {
                q: query,
            },
        }
    );

    return data.data;
}