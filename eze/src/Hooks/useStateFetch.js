import { useState, useEffect } from "react";
import axios from "axios";

export const useStateFetch = (searchTerm) => {
  const [deviceState, setDeviceState] = useState([]);
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [hasMore, setHasMore] = useState(false);

  // useEffect(() => {
  //   setDeviceState([]);
  // }, [searchTerm]);

  const loadMoreDevices = (endpoint) => {
    axios
      .get(endpoint)
      .then((res) => {
        setDeviceState((prevDevices) => [...prevDevices, ...res.data.results]);
        setState({ ...res.data });
        // setHasMore(res.data.next.totalPages > pageNumber);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
        setError(true);
      });
  };

  // useEffect(() => {
  //   setLoading(true);
  //   setError(false);

  //   axios
  //     .get("http://localhost:5555/sell?page=1&limit=20")
  //     .then((res) => {
  //       setDeviceState((prevDevices) => [...prevDevices, ...res.data.results]);
  //       setState({ ...res.data });
  //       // setHasMore(res.data.next.totalPages > pageNumber);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.log(error.message);
  //       setError(true);
  //     });
  // }, [pageNumber]);

  // Fetch initially on mount
  useEffect(() => {
    if (sessionStorage.homeState) {
      setState(JSON.parse(sessionStorage.homeState));
      setLoading(false);
    } else {
      axios
        .get("http://localhost:5555/sell?page=1&limit=20")
        .then((res) => {
          setDeviceState(res.data.results);
          setState({ ...res.data });
          // setHasMore(res.data.next.totalPages > pageNumber);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error.message);
          setError(true);
        });
    }
  }, []);
  return [{ loading, error, deviceState, state, hasMore }, loadMoreDevices];
};
