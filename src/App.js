import "./App.css";
import profile from "./images/profile.svg";

function App() {
  return (
    <>
      <div className="profile-section">
        <img src={profile} id="profile__img" alt="user avatar" />
        <h1 id="twitter">ebenscript</h1>
        <h2 id="slack" hidden>
          ebenscript
        </h2>
      </div>
    </>
  );
}

export default App;
