function MsgBox({userName,textColor}){
      let txtColor = {color: textColor};
  return (
    <div>
      <h1 style={txtColor}>Hello {userName}</h1>
    </div>
  );
};

export default MsgBox;