export default function ReviewItem({ review }) {
    return (
      <div className="col-12">
        <div>{review.name}</div>
        <div>{review.vote}</div>
        <div>{review.text}</div>
      </div>
    );
  }