export default function Card({ src, name, birth, nationality, bio, awards }) {
  return (
    
      <div className="card">
        <img src={src} className="card-img-top" alt={`Image of ${name}`} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{`Date of birth: ${birth}`}</p>
          <p className="card-text">{`Nationality: ${nationality}`}</p>
          <p className="card-text">{`Biografy: ${bio}`}</p>
          <p className="card-text">{`Awards: ${awards}`}</p>
        </div>
      </div>
  );
}
