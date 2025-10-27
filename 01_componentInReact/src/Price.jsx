export default function Price({ amount, discount }) {
  let oldStyles = {
    textDecoration: "line-through"
  };
  let newStyles = {
    fontWeight: "bold"
  };
  let styles = {
    backgroundColor: "gold",
    height: "30px",
    borderBottomLeftRadius: "10px",
    borderBottomRightRadius: "10px",
  };
  return (
    <div style={styles}>
      <span style={oldStyles}>
        ${amount}
      </span>
      &nbsp;&nbsp;
      <span style={newStyles}>
        ${amount - (amount * discount) / 100}
      </span>
    </div>
  );
};