import "../../stylesheets/infos.css";
const Infos = () => {
  return (
    <div id="links" className="footer-infos grid">
      <div>
        <h3>Finance Business</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dolorem
          tenetur nesciunt est non ullam?
        </p>
        <ul className="icons">
          <li className="icon-item">
            <i className="twitter large icon"></i>
          </li>
          <li className="icon-item">
            <i className="linkedin large icon"></i>
          </li>
          <li className="icon-item">
            <i className="facebook large icon"></i>
          </li>
          <li className="icon-item">
            <i className="telegram large icon"></i>
          </li>
        </ul>
      </div>
      <div>
        <h3>Useful Links</h3>
        <ul>
          <li>Lorem ipsum dolor</li>
          <li>Lorem ipsum dolor</li>
          <li>Lorem ipsum dolor</li>
          <li>Lorem ipsum dolor</li>
        </ul>
      </div>
      <div>
        <h3>Additional Pages</h3>
        <ul>
          <li>About Us</li>
          <li>How We Work</li>
          <li>Contact Us</li>
          <li>Privacy and Policy</li>
        </ul>
      </div>
    </div>
  );
};
export default Infos;
