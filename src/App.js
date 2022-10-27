import "./App.css";
import profile from "./images/profile.svg";
import dots from "./images/dots-horizontal.svg";
import share from "./images/share.svg";
import slack from "./images/slack.svg";
import github from "./images/github.svg";
import zuri from "./images/zuri.svg";
import i4g from "./images/I4G.svg";

function ButtonLink(props) {
  const { id, url, text } = props;

  return (
    <a id={id} href={url} className="button-link">
      {text}
    </a>
  );
}

function App() {
  return (
    <>
      <div className="profile-section">
        <img src={profile} id="profile__img" alt="user avatar" />
        <h1 id="twitter">ebenscript</h1>
        <h2 id="slack" hidden>
          ebenscript
        </h2>

        <button className="share-button share-button__mobile">
          <img src={dots} alt="horizontal dots" />
        </button>

        <button className="share-button share-button__desktop">
          <img src={share} alt="share arrow" />
        </button>
      </div>

      <div className="links-section">
        <ButtonLink id="twitter" url="#twitter" text="Twitter Link" />

        <ButtonLink
          id="btn__zuri"
          url="https://training.zuri.team/"
          text="Zuri Team"
        />

        <ButtonLink
          id="books"
          url="http://books.zuri.team/"
          text="Zuri Books"
        />

        <ButtonLink
          id="book__python"
          url="https://books.zuri.team/python-for-beginners?ref_id=ebenscript"
          text="Python Books"
        />

        <ButtonLink
          id="pitch"
          url="https://background.zuri.team/"
          text="Background Check for Coders"
        />

        <ButtonLink
          id="book__design"
          url="https://books.zuri.team/design-rules"
          text="Design Books"
        />
      </div>

      <div className="social-section">
        <a href="#ebenscript" className="social-link">
          <img src={slack} alt="slack logo" />
        </a>

        <a href="https://github.com/ebenscript" className="social-link">
          <img src={github} alt="github logo" />
        </a>
      </div>

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
    </>
  );
}

export default App;
