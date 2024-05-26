import data from "../data/index.json";
import { motion } from "framer-motion";

export default function Experience() {
    const ferrisOfTechs = [
        "react-js.svg",
        "c.svg",
        "css.svg",
        "django.svg",
        "git.svg",
        "html.svg",
        "java.svg",
        "javascript.svg",
        "linux.svg",
        "mysql.svg",
        "php.svg",
        "python.svg"
    ];
  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        <p className="section--title">My Skills</p>
        <h2 className="skills--section--heading">My Experience</h2>
      </div>
      <div className="skills--section--container">
        {data?.skills?.map((item, index) => (
          <div key={index} className="skills--section--card">
            <div className="skills--section--img">
              <a href={item.link}>
                <img src={require(`../assets/img/${item.src}`)} alt="Company Logo" />
              </a>
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">{item.title}</h3>
              <p className="skills--section--description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="portfolio--container">
        <h2 className="skills--section--heading">Programming Languages</h2>
      </div>
      <div className="logo-container">
        {ferrisOfTechs.map((tech, index) => {
            return (
            <motion.div
                className="ferris-wheel-techs"
                key={index + 1}
                initial="initial"
                animate={["animate", "initialHide"]}
                variants={{
                initial: {
                    opacity: 0,
                },
                initialHide: {
                    opacity: 1,
                    transition: {
                    delay: index + 1,
                    },
                },
                animate: {
                    rotate: -360,
                    transition: {
                    duration: ferrisOfTechs.length,
                    repeat: Infinity,
                    delay: index + 1,
                    ease: "linear",
                    },
                },
                }}
            >
                <div className="image-parent">
                <img
                    className="tech-icon"
                    src={require(`../tech-icons/${tech}`)}
                    alt={tech}
                />
                </div>
            </motion.div>
            );
        }, [])}
      </div>
      <hr className="experience_divider" />
    </section>
  );
}