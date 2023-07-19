import { Link } from "react-router-dom";

const Home = () => {
  const userId = 10;
  return (
    <>
      <div>Home</div>
      <Link to={`/user/${userId}`}>Link to User 10</Link>
    </>
  );
};

export default Home;
