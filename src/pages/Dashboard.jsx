import { useNavigate, Outlet, Link } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleClick = () => navigate("/");

  return (
    <>
      <div>Dashboard</div>
      <button onClick={handleClick}>Logout</button>

      <div>
        <Link to="welcome">To Welcome SubRoute</Link>
        <br />
        <Link to="goodbye">To Goodbye SubRoute</Link>
        <br />
        <Outlet />
      </div>
    </>
  );
};

export default Dashboard;
