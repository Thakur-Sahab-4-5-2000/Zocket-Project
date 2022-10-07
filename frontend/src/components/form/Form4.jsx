import React, { useState } from "react";
import "./form4.scss";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const From1 = () => {
  const list = [
    {
      id: 1,
      name: "Mukund Cake Shop",
      desc: "We are the best bakery around you. Please like my page to get updates on exciting offers and discounts",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC8B3nwwZeRyNS2erxMIzucZjVvoon3GxuVbuDOwp7&s",
      selected: false,
      imagePerson:
        "https://i.pinimg.com/originals/bf/e5/fd/bfe5fd63c5124fbb3730c5b9e2d3bc01.png",
    },
    {
      id: 2,
      name: "Mukund Cake Shop",
      desc: "We are the best bakery around you. Please like my page to get updates on exciting offers and discounts",
      image:
        "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      selected: false,
      imagePerson:
        "https://i.pinimg.com/originals/bf/e5/fd/bfe5fd63c5124fbb3730c5b9e2d3bc01.png",
    },
    {
      id: 3,
      name: "Mukund Cake Shop",
      desc: "We are the best bakery around you. Please like my page to get updates on exciting offers and discounts",
      image:
        "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      selected: false,
      imagePerson:
        "https://i.pinimg.com/originals/bf/e5/fd/bfe5fd63c5124fbb3730c5b9e2d3bc01.png",
    },
  ];

  const [data, setData] = useState(list);

  const handleClick = (e, id) => {
    e.preventDefault();
    console.log(id);
    list.forEach((i) => {
      if (i.id === id) {
        i.selected = !i.selected;
      }
    });
    setData([...list]);
  };

  return (
    <div className="outside">
      <div className="headoutside">
        <span className="heading">Ready to go</span>
        <span className="nonhead">(Step 4 of 4)</span>
      </div>

      <div className="cardWrapperOut">
        {data.map((item) => (
          <div className="cardWrapper" onClick={(e) => handleClick(e, item.id)}>
            <div className="cardMain">
              <div className="">
                <img src={item.imagePerson} alt="image" className="mainImage" />
              </div>
              <div className="cardSponsered">
                <span className="cardHead">{item.name}</span>
                <span className="spons">Sponsored</span>
              </div>
            </div>
            <span className="desc">{item.desc}</span>
            <img src={item.image} alt="image" className="imgCard" />

            <div className="likeDiv">
              <span className="likename">{item.name}</span>
              <span className="shopDesc">
                <ThumbUpAltIcon className="thum" />
                Like
              </span>
            </div>
            {item.selected === true ? (
              <div className="hiddenDiv">
                <span className="spanHidden">Change image</span>
                <span className="spanHidden">Edit Text</span>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default From1;
