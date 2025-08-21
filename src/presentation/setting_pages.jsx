import React, { useEffect, useMemo, useState } from "react";
import Section from "../components/section.jsx";
import Button from "../components/button.jsx";
import Switch from "../components/switch.jsx";
import Select from "../components/select.jsx";
import { useTheme } from "../app/theme.jsx";

export default function SettingsPage() {
  const { theme, setTheme } = useTheme();
  const [model, setModel] = useState("gpt-4o-mini");
  const [kbHints, setKbHints] = useState(true);

  useEffect(() => {
    localStorage.setItem("pref:model", model);
    localStorage.setItem("pref:kb", String(kbHints));
  }, [model, kbHints]);

  const account = useMemo(() => ({ name: "Fokie", email: "you@example.com", plan: "Free" }), []);

  return (
    <div className="mx-auto max-w-6xl px-4 py-6 grid gap-6">
      <h1 className="text-2xl font-bold">Settings</h1>

      <Section title="Account" desc="Kelola akun & langganan.">
        <div className="flex items-center justify-between">
          <div>
            <div className="font-medium">{account.name}</div>
            <div className="text-sm text-[var(--color-muted-foreground)]">
              {account.email} • {account.plan} plan
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">Manage plan</Button>
            <Button variant="ghost">Sign out</Button>
          </div>
        </div>
      </Section>

      <Section title="Appearance" desc="Atur tema aplikasi.">
        <Select
          label="Theme"
          value={theme}
          onChange={setTheme}
          options={[
            { value: "system", label: "System" },
            { value: "light", label: "Light" },
            { value: "dark", label: "Dark" },
          ]}
        />
      </Section>

      <Section title="Model & Behavior">
        <div className="grid gap-4 sm:grid-cols-2">
          <Select
            label="Default model"
            value={model}
            onChange={setModel}
            options={[
              { value: "gpt-4o-mini", label: "GPT-4o-mini" },
              { value: "gpt-4o", label: "GPT-4o" },
              { value: "gpt-3.5", label: "GPT-3.5" },
            ]}
          />
          <Switch label="Show keyboard hints" checked={kbHints} onChange={setKbHints} />
        </div>
      </Section>
    </div>
  );
}
