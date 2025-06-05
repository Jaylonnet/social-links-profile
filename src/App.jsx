import image from "./assets/avatar-jessica.jpeg";

function App() {
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="avatar">
            <img src={image} alt="" />
          </div>
          <div className="full-name">Jessica Randall</div>
          <div className="location">London, United Kingdom</div>
          <div className="sub-text">"Front-end developer and avid reader."</div>
          <ul className="link-list">
            <li>
              <a href="#" className="link">
                GitHub
              </a>
            </li>
            <li>
              <a href="#" className="link">
                Frontend Mentor
              </a>
            </li>
            <li>
              <a href="#" className="link">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="#" className="link">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="link">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
