import { CssBaseline } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body>
        <AppRouterCacheProvider>
          <CssBaseline>{children}</CssBaseline>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
