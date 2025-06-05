import image from "./assets/avatar-jessica.jpeg";
import Link from "./components/Link";

const links = [
  { text: "GitHub", url: "https://github.com" },
  { text: "Frontend Mentor", url: "https://frontendmentor.io" },
  { text: "LinkedIn", url: "https://linkedin.com" },
  { text: "Twitter", url: "https://twitter.com" },
  { text: "Instagram", url: "https://instagram.com" },
];

function App() {
  const linkList = links.map((link) => (
    <Link className="link" text={link.text} url={link.url} />
  ));
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
          <ul className="link-list">{linkList}</ul>
        </div>
      </div>
    </>
  );
}

export default App;
