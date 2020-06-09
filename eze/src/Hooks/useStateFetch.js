import { useState } from "react";

export const useHomeFetch = (searchTerm) => {
  const [state, setState] = useState({ devices: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchDevices = async (endpoint) => {
    setError(false);
    setLoading(true);

    const isLoadMore = endpoint.search("page");

    try {
      const result = await (await axios).json();
      setState((prev) => ({
        ...prev,
        devices:
          isLoadMore !== -1
            ? [...prev.devices, ...result.results]
            : [...result.results],
        currentPage: result.page,
        totalPages: result.total_pages,
      }));
    } catch (error) {
      setError(true);
      console.log(error);
    }
    setLoading(false);
  };

  return [{ state, loading, error }, fetchDevices];
};
