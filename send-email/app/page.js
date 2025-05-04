"use client";

export default function Home() {
  const sendEmail = async () => {
    const res = await fetch("/api/send", { method: "POST" },  { cache:'no-store' });
    const data = await res.json();
    if (res.ok) alert("✅ Email sent!");
    else alert("❌ Failed: " + data.error);
  };

  return <button onClick={sendEmail}>Send Email</button>;
}
