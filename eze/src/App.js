import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Devices from "./Components/Devices";
import Footer from "./Components/Footer";
import LoadMore from "./Components/LoadMore";
import Spinner from "./Components/Spinner";

// Custom Hook
import { useStateFetch } from "./Hooks/useStateFetch";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [
    {
      loading,
      error,
      deviceState,
      hasMore,
      state: { next },
    },
    loadMoreDevices,
  ] = useStateFetch(searchTerm);

  console.log(next);
  const searchByMinMaxPrice = (min, max = 500000) => {
    // setState((prev) =>
    //   prev.filter(
    //     (devices) =>
    //       devices.price >= parseInt(min) && devices.price <= parseInt(max)
    //   )
    // );
    console.log(min, max);
  };

  const searchDevicesByKeyword = (search) => {
    // if (search) {
    //   setState((prev) =>
    //     prev.filter(
    //       (devices) =>
    //         (devices.name &&
    //           devices.name
    //             .toLowerCase()
    //             .includes(search && search.toLowerCase())) ||
    //         (devices.condition &&
    //           devices.condition
    //             .toLowerCase()
    //             .includes(search && search.toLowerCase()))
    //     ||
    // (devices.storage &&
    //   devices.storage
    //     .toLowerCase()
    //     .includes(search && search.toLowerCase()))
    //     )
    //   );
    // }
  };

  const loadMore = () => {
    // if (next.currentPage) {
    // const loadEndpoint = `http://localhost:5555/sell?page=${next.currentPage +
    //   1}&limit=20`;

    // loadMoreDevices(loadEndpoint);
    // }
    console.log("hey");
  };

  if (error)
    return (
      <div className="App">
        <Header />
        Something went wrong, It's not you It's us please hold on ...
        <Footer />
      </div>
    );
  if (loading)
    return (
      <div className="App">
        <Header />
        <Spinner />
        <Footer />
      </div>
    );

  return (
    <div className="App">
      <Header searchDevicesCallback={searchDevicesByKeyword} />
      <Devices
        devices={deviceState}
        searchPriceCallback={searchByMinMaxPrice}
      />
      {next.currentPage < next.totalPages && !loading && (
        <LoadMore text="Load More" loadMore={loadMore} />
      )}
      <Footer />
    </div>
  );
}

export default App;
