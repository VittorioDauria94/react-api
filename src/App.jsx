import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./components/Card";

function App() {
  const [actresses, setActresses] = useState([]);
  const [actors, setActors] = useState([]);
  const [allActors, setAllActors] = useState([]);
  const [sortedActors, setSortedActors] = useState([]);

  // useEffect(() => {
  //   getActresses();
  //   getActors();
  // }, []);

  // useEffect(() => {
  //   if (actresses.length > 0 && actors.length > 0) {
  //     setAllActors([...actresses, ...actors]);
  //   }
  // }, [actresses, actors]);

  // useEffect(() => {
  //   if (allActors.length > 0) {
  //     setSortedActors(
  //       [...allActors].sort((a, b) => a.name.localeCompare(b.name))
  //     );
  //   }
  // }, [allActors]);

  // useEffect(() => {
  //   if (actresses.length > 0 && actors.length > 0) {
  //     const sorted = [...actresses, ...actors].sort((a, b) =>
  //       a.name.localeCompare(b.name)
  //     );
  //     setSortedActors(sorted);
  //   }
  // }, [actors, actresses]);

  useEffect(() => {
    Promise.all([
      axios.get("https://lanciweb.github.io/demo/api/actresses/"),
      axios.get("https://lanciweb.github.io/demo/api/actors/"),
    ]).then(([actressesResp, actorsResp]) => {
      const actressesData = actressesResp.data;
      const actorsData = actorsResp.data;

      const sorted = [...actressesData, ...actorsData].sort((a, b) =>
        a.name.localeCompare(b.name)
      );

      setSortedActors(sorted);
    });
  }, []);

  // function getActresses() {
  //   axios.get("https://lanciweb.github.io/demo/api/actresses/").then((e) => {
  //     setActresses(e.data);
  //   });
  // }

  // function getActors() {
  //   axios.get("https://lanciweb.github.io/demo/api/actors/").then((e) => {
  //     setActors(e.data);
  //   });
  // }

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
                most_famous_movies,
                known_for,
              }) => (
                <Card
                  key={`${name}-${id}`}
                  name={name}
                  birth={birth_year}
                  nationality={nationality}
                  awards={awards}
                  bio={biography}
                  src={image}
                  famousMovies={most_famous_movies || known_for}
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
