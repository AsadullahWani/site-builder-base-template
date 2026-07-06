// Signature element: a badminton/futsal court boundary diagram whose lines
// draw themselves in on load. Used as a section divider so the "court markings"
// motif recurs through the page instead of a generic gradient rule.
export default function CourtLines({ variant = "full", className = "" }) {
  if (variant === "divider") {
    return (
      <svg
        viewBox="0 0 1200 60"
        className={`w-full ${className}`}
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <line
          x1="0"
          y1="30"
          x2="1200"
          y2="30"
          stroke="#35624A"
          strokeWidth="2"
          className="court-line"
        />
        <circle cx="600" cy="30" r="18" stroke="#E7A339" strokeWidth="2" fill="none" className="court-line court-line-delay" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 800 500"
      className={`w-full h-full ${className}`}
      aria-hidden="true"
    >
      <rect x="20" y="20" width="760" height="460" fill="none" stroke="#35624A" strokeWidth="3" className="court-line" />
      <line x1="20" y1="250" x2="780" y2="250" stroke="#35624A" strokeWidth="3" className="court-line court-line-delay" />
      <line x1="400" y1="20" x2="400" y2="480" stroke="#35624A" strokeWidth="2" strokeDasharray="6 10" />
      <rect x="90" y="90" width="620" height="320" fill="none" stroke="#C7BFA8" strokeWidth="2" className="court-line court-line-delay" />
      <circle cx="400" cy="250" r="60" fill="none" stroke="#E7A339" strokeWidth="2" className="court-line" />
    </svg>
  );
}
