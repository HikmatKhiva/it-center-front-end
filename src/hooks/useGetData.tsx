import { useEffect, useState } from "react";
import { client } from "../server/client";
const useGetData = (query: string) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<Error | null | unknown>();
  const fetchDataAsync = async (query: string) => await client.fetch(query);
  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await fetchDataAsync(query);
        if (isMounted) {
          setData(result);
          setLoading(false);
        }
      } catch (err: any) {
        setError(err);
        setLoading(false);
      }
    };
    if (isMounted) {
      fetchData();
    }
    return () => {
      isMounted = false;
    };
  }, [query]);
  return { data, loading, error };
};
export default useGetData;
