import { Box } from "@mui/material";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div>
        <Box>{children}</Box>
      </div>
    </div>
  );
}
