import type { ReactNode } from "react";

import "../globals.css";

export default function RedirectRootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="es-CO">
      <body>{children}</body>
    </html>
  );
}
