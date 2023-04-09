import s from "./Reviews.module.css";
import timeLogo from "../../assets/images/time.svg";
import star_black from "../../assets/images/star_black.svg";
import star_white from "../../assets/images/star_white.svg";

function Review({ name, time, text }) {
  return (
    <div className={s.container}>
      <div className={s.wrap}>
        <div className={s.wrapper}>
          <h2 className={s.name}>{name}</h2>
          <div className={s.timeWrap}>
            <img className={s.timeLogo} src={timeLogo} alt="time" />
            <p className={s.time}>{time}</p>
          </div>
        </div>
        <div className={s.stars}>
          <img className={s.star} src={star_black} alt="starblack" />
          <img className={s.star} src={star_black} alt="starblack" />
          <img className={s.star} src={star_black} alt="starblack" />
          <img className={s.star} src={star_black} alt="starblack" />
          <img className={s.star} src={star_white} alt="starwhite" />
        </div>
      </div>
      <p className={s.text}>{text}</p>
    </div>
  );
}

export default Review;
