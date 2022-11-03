import { Button } from "../../components/button/button";
import dots from "../../images/dots-horizontal.svg";
import profile from "../../images/profile.svg";
import github from "../../images/github.svg";
import share from "../../images/share.svg";
import slack from "../../images/slack.svg";
import { LandingLayout } from "../../layouts/landing-layout/landing-layout";
import "./landing-page.css";

function LandingPage() {
  return (
    <LandingLayout>
      <div className="profile-section">
        <img src={profile} id="profile__img" alt="user avatar" />
        <h1 id="twitter" className="twitter">
          ebenscript
        </h1>
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
        <Button component="a" id="twitter" href="#twitter" disabled>
          Twitter Link
        </Button>

        <Button component="a" id="btn__zuri" href="https://training.zuri.team/">
          Zuri Team
        </Button>

        <Button component="a" id="books" href="http://books.zuri.team/">
          Zuri Books
        </Button>

        <Button
          component="a"
          id="book__python"
          href="https://books.zuri.team/python-for-beginners?ref_id=ebenscript"
        >
          Python Books
        </Button>

        <Button
          component="a"
          id="pitch"
          href="https://background.zuri.team/"
          text=""
        >
          Background Check for Coders
        </Button>

        <Button
          component="a"
          id="book__design"
          href="https://books.zuri.team/design-rules"
        >
          Design Books
        </Button>

        <Button component="link" id="contact" to="/linktree/contact">
          Contact Me
        </Button>
      </div>

      <div className="social-section">
        <a href="#ebenscript" className="social-link">
          <img src={slack} alt="slack logo" />
        </a>

        <a href="https://github.com/ebenscript" className="social-link">
          <img src={github} alt="github logo" />
        </a>
      </div>
    </LandingLayout>
  );
}

export default LandingPage;
