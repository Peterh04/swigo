import "../assets/css/adminSideBar.css";

export default function AdminSideBar() {
  return (
    <div
      className="side-navigation d-flex flex-column"
      aria-label="side navigation"
    >
      <div className="side-nav-header d-flex flex-column justify-content-center">
        <h2>Swigo</h2>
      </div>

      <ul className="side-nav-links d-flex flex-column">
        <li className="navigation-link active d-flex align-items-center">
          <i className="fas fa-tachometer-alt"></i>
          Dashboard
        </li>

        <li className="navigation-link d-flex align-items-center">
          <i className="fas fa-calendar-check"></i>
          Bookings
        </li>

        <li className="navigation-link d-flex align-items-center">
          <i className="fas fa-utensils"></i>
          Menu
        </li>

        <li className="navigation-link d-flex align-items-center">
          <i className="fas fa-clock"></i>
          Today's Menu
        </li>

        <li className="navigation-link d-flex align-items-center">
          <i className="fas fa-star"></i>
          Special Menu
        </li>

        <li className="navigation-link d-flex align-items-center">
          <i className="fas fa-shopping-cart"></i>
          Orders
        </li>

        <li className="navigation-link d-flex align-items-center">
          <i className="fas fa-comments"></i>
          Comments
        </li>

        <li className="navigation-link d-flex align-items-center">
          <i className="fas fa-user-friends"></i>
          Staff
        </li>

        <li className="navigation-link d-flex align-items-center">
          <i className="fas fa-photo-video"></i>
          Media
        </li>

        <li className="navigation-link d-flex align-items-center">
          <i className="fas fa-cog"></i>
          Settings
        </li>
      </ul>
    </div>
  );
}
