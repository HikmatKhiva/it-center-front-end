import { useQuery } from "@tanstack/react-query"
import { client } from "../server/client"
export const useQueryData = (query: string, params: any) => {
    const fetchData = async () => {
        try {
            const data = await client.fetch(query, params ? params : '')
            return data
        }
        catch (err) { return err }
    }
    const { data, isLoading, error } = useQuery([query], fetchData)

    return { data, isLoading, error }
}