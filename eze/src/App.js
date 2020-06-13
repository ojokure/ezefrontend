import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Devices from "./Components/Devices";
import Footer from "./Components/Footer";
import LoadMore from "./Components/LoadMore";
import Spinner from "./Components/Spinner";

// Custom Hook
import { useStateFetch } from "./Hooks/useStateFetch";

function App() {
  const [
    {
      loading,
      error,
      deviceState,
      state: { next },
    },
    loadMoreDevices,
    searchDevices,
    searchByPrice,
  ] = useStateFetch();

  const loadMore = () => {
    if (next.currentPage) {
      const loadEndpoint = `https://eaze.herokuapp.com/sell?page=${next.currentPage +
        1}&limit=20`;

      loadMoreDevices(loadEndpoint);
    }
  };

  if (error)
    return (
      <div className="App">
        <div
          style={{
            display: "flex",
            color: "silver",
            justifyContent: "center",
            paddingTop: "150px",
          }}
        >
          <h1>Something went wrong, It's not you It's us please hold on ...</h1>
        </div>
      </div>
    );
  if (loading)
    return (
      <div className="App">
        <Header />
        <Spinner />
      </div>
    );

  return (
    <div className="App">
      <Header searchDevicesCallback={searchDevices} />
      <Devices devices={deviceState} searchPriceCallback={searchByPrice} />

      {next.currentPage < next.totalPages && !loading && (
        <LoadMore data-testid="load more" loadMore={loadMore} />
      )}
      {loading ? <Spinner /> : <Footer />}
    </div>
  );
}

export default App;
