import React, { useState, useEffect } from "react";
import "./Components/styles.css";
import Main from "./Components/Main";
import Loading from "./Components/Loading";

const url = "https://course-api.com/react-tours-project";
function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const DataFetched = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setData(tours);
    } catch (erro) {
      setLoading(false);
      console.log(erro);
    }
  };

  const removeData = (id) => {
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
  };

  useEffect(() => {
    DataFetched();
  }, []);

  return (
    <div className="container">
      {loading ? (
        <Loading />
      ) : data.length === 0 ? (
        <div className="refresh_container">
          <div>
            <h1>no tours left</h1>
            <button onClick={() => DataFetched()}>refresh</button>
          </div>
        </div>
      ) : (
        <Main tours={data} removeData={removeData} />
      )}
    </div>
  );
}

export default App;
