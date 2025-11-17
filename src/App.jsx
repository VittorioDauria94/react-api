import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./components/Card";

function App() {
  const [sortedActors, setSortedActors] = useState([]);

  useEffect(() => {
    Promise.all([
      axios.get("https://lanciweb.github.io/demo/api/actresses/"),
      axios.get("https://lanciweb.github.io/demo/api/actors/"),
    ]).then(([actressesResp, actorsResp]) => {
      const actressesData = addKey(
        actressesResp.data,
        "famousMovies",
        "most_famous_movies"
      );

      const actorsData = addKey(actorsResp.data, "famousMovies", "known_for");

      const sorted = [...actressesData, ...actorsData].sort((a, b) =>
        a.name.localeCompare(b.name)
      );

      setSortedActors(sorted);
    });
  }, []);

  const addKey = (array, newKey, oldKey) =>
    array.map((item) => {
      const newItem = { ...item, [newKey]: item[oldKey] };
      delete newItem[oldKey];
      return newItem;
    });

  return (
    <>
      <div className="container mt-5 mb-5">
        <h2 className="mb-4 text-center fw-bold">
          🎬 Actresses & Actors Database
        </h2>

        {sortedActors.length ? (
          <div className="row row-cols-2 row-cols-lg-5 g-4">
            {sortedActors.map(
              ({
                id,
                name,
                birth_year,
                nationality,
                awards,
                biography,
                image,
                famousMovies,
              }) => (
                <Card
                  key={`${name}-${id}`}
                  name={name}
                  birth={birth_year}
                  nationality={nationality}
                  awards={awards}
                  bio={biography}
                  src={image}
                  famousMovies={famousMovies}
                />
              )
            )}
          </div>
        ) : (
          <div className="d-flex justify-content-center align-items-center mt-5">
            <div className="spinner-border me-2" role="status"></div>
            <span className="fw-semibold">Loading actors...</span>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
