import React, { useState } from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import ImageOne from "../../images/image1.jpg";
import ImageTwo from "../../images/image2.png";
import ImageThree from "../../images/image3.jpg";
import ImageFour from "../../images/image4.jpg";
import ImageFive from "../../images/image5.png";
import "./styles.scss";

const portfolioData = [
  {
    id: 2,
    name: "Ecommerce",
    image: ImageOne,
    link: "",
  },
  {
    id: 3,
    name: "Shopping cart design",
    image: ImageTwo,
    link: "",
  },
  {
    id: 3,
    name: "Notes App",
    image: ImageThree,
    link: "",
  },
  {
    id: 2,
    name: "Parallex",
    image: ImageFour,
    link: "",
  },
  {
    id: 3,
    name: "Covid Tracker",
    image: ImageFive,
  },
];

const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "Development",
  },
  {
    filterId: 3,
    label: "Design",
  },
];

const Portfolio = () => {
  const [filteredvalue, setFilteredValue] = useState(1);
  const [hoveredvalue, setHoveredValue] = useState(null);

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  const handleover = (index) => {
    setHoveredValue(index);
  };
  console.log("==================");
  console.log(filteredvalue, hoveredvalue);
  console.log("==================");

  const filteredItems =
    filteredvalue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredvalue);

  console.log(filteredItems, "filteredItems");

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />

      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
              className={item.filterId === filteredvalue ? "active" : ""}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filteredItems.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleover(index)}
              onMouseLeave={() => handleover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a href="">
                  <img src={item.image} alt="image" />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredvalue && (
                  <div>
                    <p>{item.name}</p>
                    <button>Visit</button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
