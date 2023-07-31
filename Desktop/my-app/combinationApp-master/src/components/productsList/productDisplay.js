import { Link } from "react-router-dom";
import { Fragment } from "react";

const ProductDisplay = ({ name, image, id, description }) => {
  return (
    <Fragment>
      <div className="itemPack">
        <img className="itemImg" src={image}></img>
        <h3 className="itemName">Name: {name}</h3>
        <h3 className="itemDescription">description: {description}</h3>
        <Link className="itemLink" to={"/products/" + id}>
          More Information
        </Link>
      </div>
    </Fragment>
  );
};
export default ProductDisplay;
