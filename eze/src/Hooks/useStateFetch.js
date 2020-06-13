import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../config";

export const useStateFetch = () => {
  const [deviceState, setDeviceState] = useState([]);
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const searchByPrice = (min, max) => {
    // setDeviceState((prev) =>
    //   prev.filter(
    //     (devices) =>
    //       devices.price >= parseInt(min) && devices.price <= parseInt(max)
    //   )
    // );
  };

  // make an axios call to get the next page
  const loadMoreDevices = (endpoint) => {
    setError(false);
    axios
      .get(endpoint)
      .then((res) => {
        setDeviceState((prevDevices) => [...prevDevices, ...res.data.results]);
        setState({ ...res.data });
        setLoading(false);
      })
      .catch((error) => {
        setError(true);
      });
  };

  // Search for devices from the header
  const searchDevices = (searchTerm) => {
    if (searchTerm) {
      setDeviceState((prev) =>
        prev.filter(
          (devices) =>
            (devices.name &&
              devices.name
                .toLowerCase()
                .includes(searchTerm && searchTerm.toLowerCase())) ||
            (devices.condition &&
              devices.condition
                .toLowerCase()
                .includes(searchTerm && searchTerm.toLowerCase())) ||
            (devices.storage &&
              devices.storage
                .toLowerCase()
                .includes(searchTerm && searchTerm.toLowerCase()))
        )
      );
    }
  };

  // Fetch initially on mount
  useEffect(() => {
    if (sessionStorage.homeState) {
      setState(JSON.parse(sessionStorage.homeState));
      setLoading(false);
    } else {
      axios
        .get(API_URL)
        .then((res) => {
          setDeviceState(res.data.results);
          setState({ ...res.data });
          setLoading(false);
        })
        .catch((error) => {
          setError(true);
        });
    }
  }, []);
  return [
    { loading, error, deviceState, state },
    loadMoreDevices,
    searchDevices,
    searchByPrice,
  ];
};
