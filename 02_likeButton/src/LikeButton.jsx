import {useState} from "react";

export default function LikeButton() {
  const [isLiked,setIsLiked]= useState(false);
  const [clicks,setClicks]= useState(0);

  let toggleLike = () => {
    setIsLiked(!isLiked);
    setClicks((prevClicks) => {
       return prevClicks + 1
      }); // functional update form
    setClicks(prevClicks => prevClicks + 1); // functional update form in sorter way
    //setClicks(11); // this will override the previous setClicks
  }

  let heartStyle = {
    color: isLiked ? "red" : "white",
    cursor: "pointer",
    fontSize: "144px"
  };

  return (
    <div>
      <h1>I am learning STATES in REACT</h1>
      <p onClick = {toggleLike} style={heartStyle}>
        { isLiked ? <i className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i> }</p>
      <p>
        {clicks} clicks
      </p>
     <h2>LIKE BUTTON COMPONENT</h2>
    </div>
  );
};