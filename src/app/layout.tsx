import '@mantine/core/styles.css';
import './globals.css'
import type { Metadata } from "next";
import { MantineProvider } from "@mantine/core";
import { theme } from '../../theme';

export const metadata: Metadata = {
  title: "Prof. Laiane Bernardo",
  description: "Conteúdo de História geral",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <MantineProvider theme={theme} defaultColorScheme='dark'>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
