import "../assets/css/dashboardBookings.css";

const bookings = [
  {
    time: "9:00 - 10:00 AM",
    name: "James Smith",
    people: 4,
    staus: "completed",
  },
  {
    time: "12:00 - 13:00 PM",
    name: "Emily Johnson",
    people: 2,
    staus: "confirmed",
  },
  {
    time: "15:00 - 16:00 PM",
    name: "Angie Ndolvu",
    people: 1,
    staus: "cancelled",
  },
  {
    time: "15:00 - 16:00 PM",
    name: "Peter Heri",
    people: 5,
    staus: "pending",
  },
  {
    time: "17:00 - 18:00 PM",
    name: "Mercy Kirubo",
    people: 5,
    staus: "pending",
  },
];

export default function DashboardBookings() {
  return (
    <div className="dashboard-upcoming-bookings">
      <div className="bookings-header d-flex justify-content-between align-items-center">
        <h4>Upcoming Bookings</h4>
        <a className="view-all" aria-label="View all upcoming bookings">
          View all
        </a>
      </div>

      <div className="bookings-grid">
        <div className="grid-header">TIME-SLOT</div>
        <div className="grid-header">CUSTOMER</div>
        <div className="grid-header">PEOPLE</div>
        <div className="grid-header">STATUS</div>

        {bookings.map((booking, index) => (
          <div className="grid-row" key={index}>
            <div className="time">{booking.time}</div>
            <div className="customer">{booking.name}</div>
            <div className="people">{booking.people}</div>
            <div className="status">
              <span className={`status-badge ${booking.staus}`}>
                {booking.staus}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
