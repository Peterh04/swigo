import "../assets/css/admin.css";
import DashboardBookings from "../components/DashboardBookings";
import DashboardMetric from "../components/DashboardMetric";
import DashboardTodayOrders from "../components/DashboardTodayOrders";
import DashboardPopularOrders from "../components/DashboardPopularOrders";
import DashboardRecentComments from "../components/DashboardRecentComments";
import AdminSideBar from "../components/AdminSideBar";
import AdminTopBar from "../components/AdminTopBar";

const Admin = (): JSX.Element => {
  return (
    <main aria-label="admin-page" className="admin-page">
      <AdminSideBar />

      <div
        className="main-content d-flex flex-column gap-3"
        aria-label="main content"
      >
        <AdminTopBar />

        <div
          className="dashboard-content d-flex flex-column"
          aria-label="dashboard content"
        >
          <div
            className="dashboard-content-header d-flex align-items-center justify-content-between w-100"
            aria-label="dashboard content header"
          >
            <div
              className="dashbord-content-header-intro d-flex flex-column"
              aria-label="dashbord content header intro"
            >
              <h4>Dashboard</h4>
              <p>Welcome back Admin! Here's what's happening today.</p>
            </div>

            <div
              className="dashboard-timeline d-flex align-items-center"
              aria-label="dashboard timeline"
            >
              <i className="fa-regular fa-calendar"></i>
              <span>June 2, 2026</span>
              <i className="fas fa-chevron-down"></i>
            </div>
          </div>

          <div
            className="dashboard-metrics d-flex gap-4"
            aria-label="dashboard metrics"
          >
            <DashboardMetric
              heading="Today's Bookings"
              icon="fa-solid fa-calendar-days"
              count={24}
              percentage={12}
              comparison="yesterday"
              className="bookings"
            />

            <DashboardMetric
              heading="Today's Orders"
              icon="fa-solid fa-receipt"
              count={50}
              percentage={24}
              comparison="yesterday"
              className="orders"
            />

            <DashboardMetric
              heading="Total Customers"
              icon="fa-solid fa-users"
              count="1,248"
              percentage={15}
              comparison="last month"
              className="customers"
            />

            <DashboardMetric
              heading="Total Revenue"
              icon="fa-solid fa-dollar-sign"
              count="4,560"
              percentage={18}
              comparison="last month"
              className="revenue"
            />
          </div>

          <div
            className="dashboard-middle-section d-flex w-100 gap-4"
            aria-label="dashboard middle section"
          >
            <DashboardBookings />
            <DashboardTodayOrders />
          </div>

          <div
            className="dashboard-end-section d-flex w-100 gap-4"
            aria-label="dashboard end section"
          >
            <DashboardPopularOrders />
            <DashboardRecentComments />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Admin;
