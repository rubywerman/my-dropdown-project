import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
      {/* <Link to="/">Home</Link> */}
      {/* <Link to="/filters">Filters</Link> */}
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;