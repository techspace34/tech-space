import Review from "./Review";
import s from "./Reviews.module.css";

function Reviews() {
  return (
    <div className={s.reviews}>
      <h1 className={s.title}>Reviews</h1>
      <div className={s.reviewsContainer}>
        <div className={s.content}>
          <Review
            name="Olga Show"
            time="20 March"
            text="Bought a phone happy with the purchase. Cool specialist, very cool, helped a lot in choosing. I advise everyone!!!"
          />
          <Review
            name="Olga Show"
            time="20 March"
            text="Bought a phone happy with the purchase. Cool specialist, very cool, helped a lot in choosing. I advise everyone!!!"
          />
          <Review
            name="Olga Show"
            time="20 March"
            text="Bought a phone happy with the purchase. Cool specialist, very cool, helped a lot in choosing. I advise everyone!!!"
          />
          <Review
            name="Olga Show"
            time="20 March"
            text="Bought a phone happy with the purchase. Cool specialist, very cool, helped a lot in choosing. I advise everyone!!!"
          />
          <Review
            name="Olga Show"
            time="20 March"
            text="Bought a phone happy with the purchase. Cool specialist, very cool, helped a lot in choosing. I advise everyone!!!"
          />
          <Review
            name="Olga Show"
            time="20 March"
            text="Bought a phone happy with the purchase. Cool specialist, very cool, helped a lot in choosing. I advise everyone!!!"
          />
          <Review
            name="Olga Show"
            time="20 March"
            text="Bought a phone happy with the purchase. Cool specialist, very cool, helped a lot in choosing. I advise everyone!!!"
          />
        </div>
      </div>
    </div>
  );
}

export default Reviews;
