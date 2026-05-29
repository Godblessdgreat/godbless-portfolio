import type { Metadata } from "next";

import { GeestechPage } from "./geestech-page";

export const metadata: Metadata = {
  title: "Gee'stech — Powering your digital life | Godbless Uduak",
  description:
    "Lagos-based IT services brand by Godbless Uduak. Laptop, desktop, and game console repair, sales, and maintenance.",
};

export default function Page() {
  return <GeestechPage />;
}
