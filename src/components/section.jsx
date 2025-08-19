import React from "react";

export default function Section({ title, desc, children }) {
  return (
    <section className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-5">
      <div className="mb-4">
        <h3 className="text-base font-semibold">{title}</h3>
        {desc && <p className="text-sm text-[var(--color-muted-foreground)] mt-1">{desc}</p>}
      </div>
      <div className="grid gap-4">{children}</div>
    </section>
  );
}
