import "./landing-layout.css";
import i4g from "../../images/I4G-logo.svg";
import zuri from "../../images/zuri.svg";

export default function DefaultLayout(props) {
  return (
    <div className="landing-layout">
      <div className="landing-layout__container">{props.children}</div>

      <div className="footer-section">
        <div className="footer-section__container">
          <a href="https://zuri.team">
            <img src={zuri} alt="zuri logo" />
          </a>

          <p className="footer-text">HNG Internship 9 Frontend Task</p>

          <a href="#i4g">
            <img src={i4g} alt="i4g logo" />
          </a>
        </div>
      </div>
    </div>
  );
}
