import "../assets/css/recentComments.css";

type Comment = {
  name: string;
  customer_img: string;
  rating: number;
  time: number;
  comment: string;
};

export default function DashboardRecentComments() {
  const comments: Comment[] = [
    {
      name: "Sophia Williams",
      customer_img:
        "https://bodyinmotion.co.nz/wp-content/uploads/2018/07/placeholder-img-min.jpg",
      rating: 5,
      time: 1,
      comment: "Excellent service and very friendly staff.",
    },
    {
      name: "Emily Johnson",
      customer_img:
        "https://bodyinmotion.co.nz/wp-content/uploads/2018/07/placeholder-img-min.jpg",
      rating: 4,
      time: 3,
      comment: "Great experience, would definitely recommend.",
    },
    {
      name: "Michael Brown",
      customer_img:
        "https://bodyinmotion.co.nz/wp-content/uploads/2018/07/placeholder-img-min.jpg",
      rating: 5,
      time: 8,
      comment: "Quick, professional, and hassle-free.",
    },
    {
      name: "Olivia Davis",
      customer_img:
        "https://bodyinmotion.co.nz/wp-content/uploads/2018/07/placeholder-img-min.jpg",
      rating: 4,
      time: 15,
      comment: "Very satisfied with the overall quality.",
    },
    {
      name: "James Wilson",
      customer_img:
        "https://bodyinmotion.co.nz/wp-content/uploads/2018/07/placeholder-img-min.jpg",
      rating: 5,
      time: 23,
      comment: "Fantastic support from start to finish.",
    },
  ];

  return (
    <div
      className="dashboard-recent-comments"
      aria-label="dashboard recent comments"
    >
      <div className="recent-comments-header d-flex justify-content-between align-items-center">
        <h4>Recent Comments</h4>
        <a className="view-all" aria-label="View all comments">
          View all
        </a>
      </div>

      <div className="recent-comments-row d-flex flex-column">
        {comments.map((comment, index) => (
          <div
            key={index}
            className="recent-comment d-flex align-items-center"
            aria-label="recent comment"
          >
            <div className="customer-image-container">
              <img
                src={comment.customer_img}
                alt={comment.name}
                className="customer-img"
              />
            </div>

            <div className="comment-meta d-flex flex-column w-100 position-relative">
              <span className="customer-name">{comment.name}</span>

              <span className="comment-rating">{comment.rating} stars</span>

              <span className="customer-comment">{comment.comment}</span>

              <span className="comment-date position-absolute top-0 end-0">
                {comment.time} hours ago
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
