import "../assets/css/dashboardBookingsDetailed.css";

const bookings = [
  {
    bookingId: "#BK-1",
    customer: "Peter Heri",
    phone: "+256 746 120 320",
    guests: 4,
    date: "02 June 2026",
    time: "10-11 AM",
    status: "confirmed",
    statusLabel: "Confirmed",
  },
  {
    bookingId: "#BK-2",
    customer: "Sarah Nakanwagi",
    phone: "+256 701 234 567",
    guests: 2,
    date: "03 June 2026",
    time: "12-1 PM",
    status: "pending",
    statusLabel: "Pending",
  },
  {
    bookingId: "#BK-3",
    customer: "James Okello",
    phone: "+256 772 345 678",
    guests: 6,
    date: "03 June 2026",
    time: "6-7 PM",
    status: "confirmed",
    statusLabel: "Confirmed",
  },
  {
    bookingId: "#BK-4",
    customer: "Grace Namusoke",
    phone: "+256 750 456 789",
    guests: 3,
    date: "04 June 2026",
    time: "1-2 PM",
    status: "cancelled",
    statusLabel: "Cancelled",
  },
  {
    bookingId: "#BK-5",
    customer: "David Kato",
    phone: "+256 784 567 890",
    guests: 5,
    date: "04 June 2026",
    time: "7-8 PM",
    status: "confirmed",
    statusLabel: "Confirmed",
  },
  {
    bookingId: "#BK-6",
    customer: "Ruth Atim",
    phone: "+256 770 678 901",
    guests: 2,
    date: "05 June 2026",
    time: "11-12 PM",
    status: "pending",
    statusLabel: "Pending",
  },
  {
    bookingId: "#BK-7",
    customer: "Michael Ouma",
    phone: "+256 703 789 012",
    guests: 8,
    date: "05 June 2026",
    time: "8-9 PM",
    status: "confirmed",
    statusLabel: "Confirmed",
  },
  {
    bookingId: "#BK-8",
    customer: "Esther Achieng",
    phone: "+256 771 890 123",
    guests: 4,
    date: "06 June 2026",
    time: "2-3 PM",
    status: "cancelled",
    statusLabel: "Cancelled",
  },
  {
    bookingId: "#BK-9",
    customer: "Brian Mugisha",
    phone: "+256 705 901 234",
    guests: 3,
    date: "06 June 2026",
    time: "5-6 PM",
    status: "confirmed",
    statusLabel: "Confirmed",
  },
  {
    bookingId: "#BK-10",
    customer: "Patricia Nambi",
    phone: "+256 781 012 345",
    guests: 7,
    date: "07 June 2026",
    time: "9-10 PM",
    status: "pending",
    statusLabel: "Pending",
  },
];

export default function DashboardBookingsLongDetailed() {
  return (
    <div className="dashboard-bookings-detailed ">
      <div className="bookings-header d-flex justify-content-between align-items-center">
        <h4>All Bookings</h4>
      </div>

      <div className="bookings-grid">
        <div className="grid-header">BOOKING ID</div>
        <div className="grid-header">CUSTOMER</div>
        <div className="grid-header">PHONE NUMBER</div>
        <div className="grid-header">GUESTS</div>
        <div className="grid-header">DATE</div>
        <div className="grid-header">TIME-SLOT</div>
        <div className="grid-header">STATUS</div>
        <div className="grid-header">ACTIONS</div>

        {bookings.map((booking, idx) => (
          <div className="grid-row" key={idx}>
            <div className="bookingId">{booking.bookingId}</div>
            <div className="customer">{booking.customer}</div>
            <div className="phone">{booking.phone}</div>
            <div className="guests">{booking.guests}</div>
            <div className="date">{booking.date}</div>
            <div className="time">{booking.time}</div>
            <div className="status">
              <span className={`status-badge ${booking.status}`}>
                {booking.statusLabel}
              </span>
            </div>
            <div className="actions">
              <button className="view-booking">
                <i className="fa-solid fa-eye"></i>
              </button>
              <button className="edit-booking">
                <i className="fa-solid fa-pencil"></i>
              </button>
              <button className="delete-booking">
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
