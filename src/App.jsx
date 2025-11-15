import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./components/Card";

function App() {
  const [actresses, setActresses] = useState([]);
  const [actors, setActors] = useState([]);

  useEffect(() => {
    getActresses();
    getActors();
  }, []);

  function getActresses() {
    axios.get("https://lanciweb.github.io/demo/api/actresses/").then((e) => {
      setActresses(e.data);
    });
  }

  function getActors() {
    axios.get("https://lanciweb.github.io/demo/api/actors/").then((e) => {
      setActors(e.data)
    })
  }

  return (
    <>
      <div className="container mt-5 mb-5">
        <h2>Actresses</h2>
        <div className="row row-cols-2 row-cols-lg-5 g-4">
          {actresses.map(
            ({
              id,
              name,
              birth_year,
              nationality,
              awards,
              biography,
              image,
            }) => (
              <Card
                key={id}
                name={name}
                birth={birth_year}
                nationality={nationality}
                awards={awards}
                bio={biography}
                src={image}
              />
            )
          )}
        </div>
        <h2>Actors</h2>
        <div className="row row-cols-2 row-cols-lg-5 g-4">
          {actors.map(
            ({
              id,
              name,
              birth_year,
              nationality,
              awards,
              biography,
              image,
            }) => (
              <Card
                key={id}
                name={name}
                birth={birth_year}
                nationality={nationality}
                awards={awards}
                bio={biography}
                src={image}
              />
            )
          )}
        </div>
      </div>
    </>
  );
}

export default App;
