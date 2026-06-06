import "../assets/css/adminBookings.css";
import AdminSideBar from "../components/AdminSideBar";
import AdminTopBar from "../components/AdminTopBar";
import DashboardBookingsLongDetailed from "../components/DashboardBookingsLongDetailed";
import DashboardMetric from "../components/DashboardMetric";

export default function AdminBookings() {
  return (
    <main aria-label="admin bookings" className="admin-bookings">
      <AdminSideBar />

      <div className="main-content" aria-label="main content">
        <AdminTopBar />

        <div
          className="bookings-dashboard-content"
          aria-label="bookings dashboard content"
        >
          <div
            className="bookings-dashboard-content-header d-flex flex-column"
            aria-label="bookings dashboard content header"
          >
            <div
              className="bookings-dashbord-content-header-intro d-flex flex-column"
              aria-label="bookings dashbord content header intro"
            >
              <h4>Bookings</h4>
              <p>Manage all restaurant reservation bookings.</p>
            </div>
          </div>
          <div
            className="bookings-toolbar d-flex align-items-center"
            aria-label="bookings toolbar"
          >
            <button
              className="btn-create-booking d-flex align-items-center justify-content-center gap-2"
              aria-label="create booking button"
            >
              + New Booking
            </button>

            <div
              className="bookings-timeline d-flex align-items-center justify-content-center gap-2"
              aria-label="bookings timeline"
            >
              <i className="fa-regular fa-calendar"></i>
              <span>June 2, 2026</span>
              <i className="fas fa-chevron-down"></i>
            </div>

            <div
              className="bookings-status-filter d-flex align-items-center justify-content-center gap-2"
              aria-label="bookings status filter"
            >
              <span>All Status</span>
              <i className="fas fa-chevron-down"></i>
            </div>

            <div
              className="bookings-search-filter d-flex align-items-center gap-2"
              aria-label="bookings search filter"
            >
              <input
                type="text"
                placeholder="Search by customer name, phone or booking ID..."
                className="bookings-search-input d-flex align-items-center"
                aria-label="bookings search input"
              />
              <i className="fa-solid fa-magnifying-glass"></i>
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
              heading="Pending"
              icon="fa-solid fa-clock"
              count={2}
              percentage={11}
              comparison="yesterday"
              className="pending-metric-bookings"
            />

            <DashboardMetric
              heading="Confirmed"
              icon="fa-solid fa-circle-check"
              count={14}
              percentage={27}
              comparison="yesterday"
              className="confirmed-metric-bookings"
            />

            <DashboardMetric
              heading="Cancelled"
              icon="fa-solid fa-circle-xmark"
              count={8}
              percentage={23}
              comparison="yesterday"
              className="cancelled-metric-bookings"
            />
          </div>

          <DashboardBookingsLongDetailed />
        </div>
      </div>
    </main>
  );
}
