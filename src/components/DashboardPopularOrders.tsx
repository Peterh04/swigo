import "../assets/css/dashboardPopularOrders.css";

type Order = {
  name: string;
  img: string;
  total_orders: number;
};

export default function DashboardPopularOrders() {
  const orders: Order[] = [
    {
      name: "Cheese Burger",
      img: "https://media-cdn.tripadvisor.com/media/photo-m/1280/15/2f/e4/2f/super-bugger-burger-bugger.jpg",
      total_orders: 200,
    },
    {
      name: "French Fries",
      img: "https://thumbs.dreamstime.com/b/realistic-french-fries-clipart-vector-image-trompe-l-oeil-folds-red-white-french-fries-bag-showcased-clean-283992085.jpg",
      total_orders: 120,
    },
    {
      name: "Long Island",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDXAnduTFWXNEb8aJErlUpA5wNLMJGBrHYEw&s",
      total_orders: 98,
    },
    {
      name: "Chicken peri-peri",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSzfDSS9CXREX1mJefrdQlzOZhdIs7oJMV6Q&s",
      total_orders: 50,
    },
  ];

  return (
    <div
      className="dashboard-popular-orders"
      aria-label="dashboard popular orders"
    >
      <div className="popular-orders-header d-flex justify-content-between align-items-center">
        <h4>Popular Menu Items</h4>
        <a className="view-all" aria-label="View all popular orders">
          View all
        </a>
      </div>

      <div className="popular-orders-row d-flex flex-column">
        {orders.map((order, index) => (
          <div
            key={index}
            className="popular-order d-flex align-items-center"
            aria-label="popular order"
          >
            <div className="order-image-container">
              <img
                src={order.img}
                alt={order.name}
                className="order-img"
                aria-label="order image"
              />
            </div>

            <div className="order-meta d-flex flex-column">
              <span className="order-name">{order.name}</span>
            </div>

            <div className="order-total-status ms-auto">
              <span className="order-total-number">
                {order.total_orders} orders
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
