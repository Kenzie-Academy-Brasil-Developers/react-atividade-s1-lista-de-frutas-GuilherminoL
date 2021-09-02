import "./style.css";
const FruitsList = ({ props }) => {
  console.log(props);
  return (
    <>
      <h2 className="totalPrice">
        Preço total ={" "}
        {props.reduce((acc, current) => (acc += current.price), 0)}
      </h2>
      <ul className="fruitsList">
        {props.map((item) => {
          return <li className="fruitsItem">{item.name}</li>;
        })}
      </ul>
    </>
  );
};
export default FruitsList;
