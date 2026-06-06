import "../assets/css/todayOrders.css";

type Order = {
  name: string;
  id: number;
  img: string;
  price: string;
  status: "Completed" | "Cancelled" | "Pending" | "Preparing";
};

export default function DashboardTodayOrders() {
  const orders: Order[] = [
    {
      name: "Cheese Burger",
      id: 1,
      img: "https://media-cdn.tripadvisor.com/media/photo-m/1280/15/2f/e4/2f/super-bugger-burger-bugger.jpg",
      price: "3000",
      status: "Completed",
    },
    {
      name: "French Fries",
      id: 2,
      img: "https://thumbs.dreamstime.com/b/realistic-french-fries-clipart-vector-image-trompe-l-oeil-folds-red-white-french-fries-bag-showcased-clean-283992085.jpg",
      price: "1000",
      status: "Cancelled",
    },
    {
      name: "Long Island",
      id: 3,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDXAnduTFWXNEb8aJErlUpA5wNLMJGBrHYEw&s",
      price: "1500",
      status: "Pending",
    },
    {
      name: "Chicken peri-peri",
      id: 4,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSzfDSS9CXREX1mJefrdQlzOZhdIs7oJMV6Q&s",
      price: "5000",
      status: "Preparing",
    },
  ];

  return (
    <div className="dashboard-today-orders" aria-label="dashboard today orders">
      <div className="today-orders-header d-flex justify-content-between align-items-center">
        <h4>Today's Orders</h4>
        <a className="view-all" aria-label="View all today's orders">
          View all
        </a>
      </div>

      <div className="today-orders-row d-flex flex-column">
        {orders.map((order) => (
          <div key={order.id} className="today-order d-flex align-items-center">
            <div className="order-image-container">
              <img
                src={order.img}
                alt=""
                className="order-img"
                aria-label="order image"
              />
            </div>

            <div className="order-meta d-flex flex-column">
              <span className="order-number">#ORD-{order.id}</span>
              <span className="order-name">{order.name}</span>
            </div>

            <div className="order-currency_status d-flex flex-column ms-auto">
              <span className="order-price">Ugx {order.price}</span>
              <span
                className={`order-status ${order.status.toLowerCase()}`}
                aria-label="order status"
              >
                {order.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
