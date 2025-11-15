import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./components/Card";

function App() {
  const [actresses, setActresses] = useState([]);
  const [actors, setActors] = useState([]);
  const [allActors, setAllActors] = useState([]);

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
      setActors(e.data);
    });
  }

  useEffect(() => {
    if (actresses.length > 0 && actors.length > 0) {
      setAllActors([...actresses, ...actors]);
    }
  }, [actresses, actors]);

  return (
    <>
      <div className="container mt-5 mb-5">
        <h2>Actresses and actors</h2>
        <div className="row row-cols-2 row-cols-lg-5 g-4">
          {allActors.map(
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
                key={`${name}-${id}`}
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
