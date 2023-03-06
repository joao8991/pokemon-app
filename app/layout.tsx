import ClientSideConfigs from "@/components/ClientSideConfigs";
import StyledComponentsRegistry from "@/lib/registry";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Pokemon App",
  description: "Pokemon app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className}`}>
        <ClientSideConfigs>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </ClientSideConfigs>
      </body>
    </html>
  );
}
