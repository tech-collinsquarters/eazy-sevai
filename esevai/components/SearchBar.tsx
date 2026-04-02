"use client";

interface SearchBarProps {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  theme: "light" | "dark";
  resultCount?: number;
  totalCount?: number;
}

export default function SearchBar({
  value,
  onChange,
  placeholder = "Search services...",
  theme,
  resultCount,
  totalCount,
}: SearchBarProps) {
  const isLight = theme === "light";

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Wrapper — no overflow-hidden so button fills flush */}
      <div
        className="flex items-stretch rounded-2xl transition-all"
        style={{
          background: isLight ? "#ffffff" : "rgba(255,255,255,0.06)",
          border: isLight
            ? "2px solid #e5e7eb"
            : "1px solid rgba(255,255,255,0.14)",
          boxShadow: isLight
            ? "0 4px 24px rgba(0,102,179,0.08)"
            : "0 4px 32px rgba(0,0,0,0.3)",
          overflow: "hidden",
        }}
      >
        {/* Magnifying glass icon */}
        <span
          className="flex items-center pl-4 pr-2 flex-shrink-0 pointer-events-none"
          style={{ color: isLight ? "#9ca3af" : "rgba(255,255,255,0.35)" }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </span>

        {/* Input — no outline at all */}
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="flex-1 py-4 pr-2 text-base bg-transparent"
          style={{
            color: isLight ? "#1e3a5f" : "#ffffff",
            outline: "none",
            border: "none",
            boxShadow: "none",
            WebkitAppearance: "none",
          }}
        />

        {/* Clear (×) button */}
        {value && (
          <button
            type="button"
            onClick={() => onChange("")}
            className="flex items-center justify-center flex-shrink-0 px-3 transition-opacity opacity-60 hover:opacity-100"
            style={{
              color: isLight ? "#6b7280" : "rgba(255,255,255,0.5)",
              outline: "none",
              border: "none",
              background: "transparent",
            }}
            aria-label="Clear search"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        )}

        {/* Search button — self-stretches via items-stretch on parent */}
        <button
          type="button"
          className="flex-shrink-0 flex items-center justify-center px-7 font-semibold text-sm text-white transition-opacity hover:opacity-90"
          style={{
            background: "linear-gradient(135deg, #0066b3 0%, #14b8a6 100%)",
            outline: "none",
            border: "none",
            borderRadius: 0,
            cursor: "default",
          }}
        >
          Search
        </button>
      </div>

      {/* Result count */}
      {value && resultCount !== undefined && totalCount !== undefined && (
        <p
          className="text-xs mt-2 text-center"
          style={{ color: isLight ? "#6b7280" : "rgba(255,255,255,0.4)" }}
        >
          Showing {resultCount} of {totalCount} services
        </p>
      )}
    </div>
  );
}
