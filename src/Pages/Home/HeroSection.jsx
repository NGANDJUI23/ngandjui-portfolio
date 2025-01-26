export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Ivan Ngandjui</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Software Engineer</span>{" "}
            <br />
            Fullstack Developer
          </h1>
          <p className="hero--section-description">
          My name is NGANDJUI HANGA Ivan Delors, an engineering student at Saint Jean Engineering, level 4, majoring in Computer Science and Information Systems.
            <br /> Wellcome to my portfolio
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.jpeg" alt="Hero Section" />
      </div>
    </section>
  );
}
