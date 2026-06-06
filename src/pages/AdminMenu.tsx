import "../assets/css/adminMenu.css";
import AdminSideBar from "../components/AdminSideBar";
import AdminTopBar from "../components/AdminTopBar";
import DashboardMetric from "../components/DashboardMetric";

export default function AdminMenu() {
  return (
    <main aria-label="admin menu " className="admin-menu">
      <AdminSideBar />

      <div className="main-content" aria-label="main content">
        <AdminTopBar />

        <div
          className="menu-dashboard-content d-flex flex-column"
          aria-label="menu dashboard content"
        >
          <div
            className="menu-dashboard-content-header d-flex align-items-center justify-content-between w-100"
            aria-label="menu dashboard content header"
          >
            <div
              className="menu-dashbord-content-header-intro d-flex flex-column"
              aria-label="menu dashbord content header intro"
            >
              <h4>Menu</h4>
              <p>Manage your restaurant menu items, categories and prices.</p>
            </div>

            <button
              className="add-item-btn d-flex align-items-center"
              aria-label="add menu item button"
            >
              <i className="fa-solid fa-plus"></i>
              <span>Add Menu Item</span>
            </button>
          </div>
          <div
            className="dashboard-metrics d-flex gap-4"
            aria-label="dashboard metrics"
          >
            <DashboardMetric
              heading="Total Items"
              icon="fa-solid fa-calendar-days"
              count={48}
              percentage={12}
              comparison="yesterday"
              className="bookings"
            />

            <DashboardMetric
              heading="Categories"
              icon="fa-solid fa-receipt"
              count={50}
              percentage={24}
              comparison="yesterday"
              className="orders"
            />

            <DashboardMetric
              heading="Add-ons"
              icon="fa-solid fa-users"
              count="1,248"
              percentage={15}
              comparison="last month"
              className="customers"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
