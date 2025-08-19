import React from "react";

export default function Select({ label, value, onChange, options = [] }) {
  return (
    <label className="flex flex-col gap-1">
      <span className="text-sm">{label}</span>
      <select
        className="h-9 rounded-lg border border-[var(--color-border)] bg-[var(--color-input)] px-3 text-sm"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
      >
        {options.map(o => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
    </label>
  );
}
