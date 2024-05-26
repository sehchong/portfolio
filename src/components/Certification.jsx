import data from "../data/index.json";
import { FaArrowRight } from "react-icons/fa";

export default function Certification() {
  return (
    <section className="certification--section" id="certification">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <p className="sub--title">My Certifications</p>
          <h2 className="sections--heading">Certification's List</h2>
        </div>
      </div>
      <div className="portfolio--section--container">
        {data?.certification?.map((item, index) => (
          <div key={index} className="certification--section--card">
            <p className="text-md certification--org--name">
                {item.org_name}
            </p>
            <img src={require(`../assets/img/${item.src}`)} alt="Certs" />
            <div className="certification--section--card--detail">
              <div>
                <p className="text-md certification--course">
                  {item.course}
                </p>
              </div>
            </div>
            <p className="text-md">{item.description}</p>
            {item.website && (
              <a href={item.website} target="_blank" rel="noopener noreferrer">More Details<FaArrowRight /></a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}