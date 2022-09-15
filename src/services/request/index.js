import { api } from "../api";

export const getList = async () => {
  try {
    const result = await api.get("/list-items");
    return result.data;
  } catch (error) {
    alert("Error ao buscar dados da API");
    return { error };
  }
};
