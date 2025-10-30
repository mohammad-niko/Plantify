export const StarRating = ({ rating, maxStars = 5 }) => {
  const stars = [];

  for (let i = 0; i < rating; i++) {
    stars.push(
      <span
        key={`filled-${i}`}
        className="star-filled"
        style={{ color: "gold" }}
      >
        ★
      </span>
    );
  }

  for (let i = rating; i < maxStars; i++) {
    stars.push(
      <span
        key={`empty-${i}`}
        className="star-empty"
        style={{ color: "lightgray" }}
      >
        ☆
      </span>
    );
  }

  return <div className="product-rating">{stars}</div>;
};
