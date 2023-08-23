import "../App.css";

function Navbar() {
  return (
    <div className="flex navbar text-sm text-white">
      <a href="https://google.com" className="custom-header-margin margin-left cursor-pointer text-decoration hover:text-red-300">Home</a>
      <a href="https://react.dev" className="custom-header-margin cursor-pointer text-decoration hover:text-red-300">Categories</a>
      <a href="https://dev-client.recordme.ai" className="custom-header-margin cursor-pointer text-decoration hover:text-red-300">Favourites</a>
      <a href="https://google.com" className="custom-header-margin cursor-pointer text-decoration hover:text-red-300">Contact</a>
      <a href="https://vuejs.org" className="custom-header-margin cursor-pointer text-decoration hover:text-red-300">About</a>
    </div>
  );
}

export default Navbar;
