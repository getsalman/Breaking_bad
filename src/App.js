import React, { useState, useEffect } from "react";
import Header from "./components/ui/Header";
import CharacterGrid from "./components/characters/CharacterGrid";
import Search from "./components/ui/Search";
import "./App.css";
import Axios from "axios";

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await Axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      setItems(response.data);
      setIsLoading(false);
    };

    fetchData();
  }, [query]);

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
};

export default App;
