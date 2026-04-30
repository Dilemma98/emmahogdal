export default function SantaHat() {
  return (
    <div
      style={{
        position: "absolute",
        top: 8,
        left: 10,
        width: 170,
        transform: "rotate(-2deg)",
        filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.2))",
      }}
    >
      <svg
        viewBox="0 0 300 400"
        width="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Själva luvan */}
        <path d="M65 140 Q80 10 300 40 Q200 30 280 130 Z" fill="#c62828" />

        <path
          d="M85 110 Q110 40 240 45"
          stroke="#a5262686"
          strokeWidth="15"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="120" cy="75" r="3" fill="white" />
        <circle cx="170" cy="90" r="2.5" fill="white" />
        <circle cx="220" cy="60" r="3.5" fill="white" />

        {/* Vit kant */}
        <rect x="60" y="120" width="230" height="25" rx="12" fill="#e2e2e2" />

        {/* Tofs */}
        <circle cx="280" cy="40" r="18" fill="#e2e2e2" />
      </svg>
    </div>
  );
}
