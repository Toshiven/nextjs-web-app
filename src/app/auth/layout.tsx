import { CssBaseline } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ReactNode } from "react";
import Layout from "components/LoginLayout";

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html>
            <body>
                <AppRouterCacheProvider>
                    <CssBaseline>
                        <Layout>
                            {children}
                        </Layout>
                    </CssBaseline>
                </AppRouterCacheProvider>
            </body>
        </html>
    )
}