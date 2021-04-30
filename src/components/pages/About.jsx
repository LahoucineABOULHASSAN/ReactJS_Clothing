import '../../stylesheets/about.css';

const About = () => {
  return (
    <>
      <section id="about-us" data-aos="flip-left">
        <p className="headline">About Clothing App</p>
        <div className="grid">
          <div>
            <h3 className="info">Looking for the best products?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
              aperiam nisi id, fuga aut laborum tempore saepe dicta ducimus
              placeat
            </p>
            <ul>
              <li>Lorem, ipsum dolor sit.</li>
              <li>Lorem, ipsum dolor sit.</li>
              <li>Lorem, ipsum dolor sit.</li>
            </ul>
            <button>
              {'Read More'} <i className="chevron right icon"></i>
            </button>
          </div>
          <figure>
            <img
              src="https://images.unsplash.com/photo-1542744173-05336fcc7ad4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1382&q=80"
              alt="marketing pic from unsplash"
            />
          </figure>
        </div>
      </section>
    </>
  );
};
export default About;
