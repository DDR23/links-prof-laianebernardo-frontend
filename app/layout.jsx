import '../styles/globals.scss'

export const metadata = {
  title: "Prof. Bernardo",
  description: "Conteúdo de História geral",
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}