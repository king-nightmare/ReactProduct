import { Link, Outlet } from "react-router-dom";

const MainNavigations = () => {
  return (
    <div className="wrapper">
      <div className="containor">
        <h2 className="header">Products</h2>
        <Link className="link" to="/Products">
          Click here for more information
        </Link>
      </div>
      <div className="containor">
        <h2 className="header">call information</h2>
        <Link className="link" to="/Call">
          Click here for entering the information
        </Link>
      </div>
      <Outlet />
    </div>
  );
};
export default MainNavigations;
