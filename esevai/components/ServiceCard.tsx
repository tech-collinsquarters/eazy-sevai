import Link from "next/link";
import { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode | string;
  title: string;
  description: string;
  href: string;
  theme: "light" | "dark";
  badge?: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
  href,
  theme,
  badge,
}: ServiceCardProps) {
  const isLight = theme === "light";

  return (
    <Link
      href={href}
      className="group flex flex-col h-full rounded-2xl p-6 transition-all duration-200"
      style={
        isLight
          ? {
              background: "#ffffff",
              border: "2px solid #e5e7eb",
              boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
            }
          : {
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.10)",
              backdropFilter: "blur(12px)",
            }
      }
      onMouseEnter={(e) => {
        if (isLight) {
          e.currentTarget.style.borderColor = "#0066b3";
          e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,102,179,0.12)";
        } else {
          e.currentTarget.style.background = "rgba(255,255,255,0.08)";
          e.currentTarget.style.borderColor = "rgba(20,184,166,0.4)";
        }
      }}
      onMouseLeave={(e) => {
        if (isLight) {
          e.currentTarget.style.borderColor = "#e5e7eb";
          e.currentTarget.style.boxShadow = "0 1px 4px rgba(0,0,0,0.04)";
        } else {
          e.currentTarget.style.background = "rgba(255,255,255,0.04)";
          e.currentTarget.style.borderColor = "rgba(255,255,255,0.10)";
        }
      }}
    >
      {/* Top accent bar on hover */}
      <div
        className="h-0.5 w-full rounded-full mb-4 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
        style={{ background: "linear-gradient(90deg, #0066b3, #14b8a6)" }}
      />

      {/* Icon */}
      <div className="mb-4">
        {typeof icon === "string" ? (
          <span className="text-3xl">{icon}</span>
        ) : (
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center"
            style={{
              background: isLight
                ? "linear-gradient(135deg, rgba(0,102,179,0.1), rgba(20,184,166,0.1))"
                : "rgba(20,184,166,0.15)",
              color: "#14b8a6",
            }}
          >
            {icon}
          </div>
        )}
      </div>

      {/* Badge */}
      {badge && (
        <span
          className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-2"
          style={
            isLight
              ? { background: "#f0f9ff", color: "#0066b3" }
              : { background: "rgba(20,184,166,0.15)", color: "#14b8a6" }
          }
        >
          {badge}
        </span>
      )}

      {/* Title */}
      <h3
        className="text-lg font-bold mb-2 leading-snug"
        style={{ color: isLight ? "#1e3a5f" : "#ffffff" }}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className="text-sm flex-1 mb-4 line-clamp-2"
        style={{ color: isLight ? "#6b7280" : "rgba(255,255,255,0.55)" }}
      >
        {description}
      </p>

      {/* View More link */}
      <div
        className="flex items-center gap-1 text-sm font-semibold group-hover:gap-2 transition-all"
        style={{ color: isLight ? "#0066b3" : "#14b8a6" }}
      >
        View More
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="group-hover:translate-x-0.5 transition-transform"
        >
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </div>
    </Link>
  );
}
