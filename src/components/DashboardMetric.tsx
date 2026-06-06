import "../assets/css/dashboardMetric.css";

type DashboardMetricProps = {
  heading: string;
  count: number | string;
  percentage: number;
  comparison: string;
  icon: string;
  className?: string;
};

export default function DashboardMetric({
  heading,
  count,
  percentage,
  comparison,
  icon,
  className = "",
}: DashboardMetricProps) {
  return (
    <div
      className={`dashboard-metric d-flex ${className}`}
      aria-label="dashboard metric"
    >
      <div className="metric-image-container d-flex justify-content-center align-items-center">
        <i className={icon}></i>
      </div>

      <div className="metric-content d-flex flex-column">
        <h6 className="metric-heading" aria-label="metric heading">
          {heading}
        </h6>

        <span className="metric-count" aria-label="metric count">
          {count}
        </span>

        <span className="metric-percentage" aria-label="metric percentage">
          <i className="fa-solid fa-arrow-up"></i>
          <span> </span>
          {percentage}%
        </span>

        <span className="metric-comparison" aria-label="metric comparison">
          vs {comparison}
        </span>
      </div>
    </div>
  );
}
