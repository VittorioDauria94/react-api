export default function Card({
  src,
  name,
  birth,
  nationality,
  bio,
  awards,
  famousMovies,
}) {
  return (
    <div className="actor-card card h-100">
      <img src={src} className="actor-img" alt={`Image of ${name}`} />
      <div className="card-body actor-body">
        <h5>{name}</h5>
        <p className="actor-text mb-1">
          <strong>Born:</strong> {birth}
        </p>
        <p className="actor-text mb-1">
          <strong>Nationality:</strong> {nationality}
        </p>
        <p className="actor-text mb-1">
          <strong>Biography:</strong> {bio}
        </p>
        <p className="actor-text mb-1">
          <strong>Awards:</strong> {awards}
        </p>
        <p className="actor-text ">
          <strong>Famous for:</strong> {famousMovies}
        </p>
      </div>
    </div>
  );
}
