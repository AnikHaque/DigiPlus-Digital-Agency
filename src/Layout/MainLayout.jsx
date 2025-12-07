import { Outlet, useLocation } from "react-router-dom";


const Layout = () => {
  const location = useLocation();

  // Check if current route is home ("/")
  const isHome = location.pathname === "/";

  return (
    <>
      {/* Show Navbar only if NOT home page */}
      

      <main className="min-h-[calc(100vh-160px)]">
        <Outlet />
      </main>

      
    </>
  );
};

export default Layout;
