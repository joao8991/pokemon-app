"use client";

import { theme } from "@/styling/theme";
import { AppGlobalStyles } from "@/styling/global";

import styled, { ThemeProvider } from "styled-components";

const PageLayout = styled.div`
  margin: 20px;
`;

export default function ClientSideConfigs({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      <AppGlobalStyles />
      <PageLayout>{children}</PageLayout>
    </ThemeProvider>
  );
}
