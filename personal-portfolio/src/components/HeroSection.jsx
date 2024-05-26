import { MdPreview } from "react-icons/md";
import myImg from '../assets/img/hero_img.png';
import Typewriter from 'typewriter-effect';
import { useState } from "react";
import PreviewModal from "./PreviewModal";
import urlPath from "../assets/files/resume.pdf";

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Kong Seh Chong</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">
              <Typewriter 
              onInit={(typewriter) => {
                typewriter
                  .typeString("Develepor")
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString("Programmer")
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString("Tech Enthusiast")
                  .pauseFor(2000)
                  .deleteAll()
                  .start({
                    loop: true
                  });
              }}
              options={{ loop: true }}
              />
              </span>
          </h1>
          <p className="hero--section-description">
          A recent graduate holding a Bachelor of Computer Science degree from UCSI University,
          I am passionate about technology and eager to embark on a career path that allows me to apply my knowledge and skills in a meaningful way.
          </p>
        </div>
        <button className="btn btn-primary" onClick={openModal}>
          <MdPreview className="download-icons" /> Preview
        </button>
        <PreviewModal
          pdfUrl={urlPath}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      </div>
      <div className="hero--section--img">
        <img src={myImg} alt="Hero Section" />
      </div>
    </section>
  );
}