import "./Navbar.css";

const Navbar = (props) => {
  function darkModeHandler() {
    props.mode(props.img);
  }

  const icon = props.img ? "fas fa-sun" : "fas fa-moon";
  return (
    <div className="Navbar container">
      <div className="Navbar-title">
        <h1>Where in the world?</h1>
      </div>
      <div className="Navbar-darkmode">
        <i className={icon} onClick={darkModeHandler}></i> Dark Mode
      </div>
    </div>
  );
};

export default Navbar;
