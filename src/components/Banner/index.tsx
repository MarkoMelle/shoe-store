import banner from "../../public/img/banner.jpg";

const Banner = () => (
  <div className="banner">
    <img
      src={banner}
      className="img-fluid"
      alt="Ready for Spring!"
    ></img>
    <h2 className="banner-header">Ready for Spring!</h2>
  </div>
);

export default Banner;
