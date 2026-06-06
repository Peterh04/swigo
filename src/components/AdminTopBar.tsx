import "../assets/css/adminTopBar.css";

export default function AdminTopBar() {
  return (
    <div
      className="main-content-header d-flex align-items-center justify-content-between"
      aria-label="main content header"
    >
      <i className="fa-solid fa-bars-staggered mirror"></i>

      <div
        className="user-panel d-flex align-items-center gap-3 ms-auto"
        aria-label="user panel"
      >
        <button
          className="notification-btn position-relative d-flex align-items-center"
          aria-label="notification btn"
        >
          <i className="far fa-bell"></i>

          <div
            className="notification-container position-absolute d-flex justify-content-center align-items-center"
            aria-label="notification container"
          >
            <p className="notification-number" aria-label="notification number">
              3
            </p>
          </div>
        </button>

        <div
          className="profile-container d-flex align-items-center gap-2"
          aria-label="profile container"
        >
          <div
            className="profile-meta d-flex align-items-center"
            aria-label="profile meta"
          >
            <div
              className="profile-image-container"
              aria-label="profile image container"
            >
              <img
                src="https://bodyinmotion.co.nz/wp-content/uploads/2018/07/placeholder-img-min.jpg"
                alt="admin"
                className="profile-img"
                aria-label="profile image"
              />
            </div>
          </div>

          <button
            className="profile-settings d-flex align-items-center justify-content-center gap-2"
            aria-label="profile settings"
          >
            <span className="profile-user" aria-label="profile user">
              Admin
            </span>

            <i className="fas fa-chevron-down"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
