
import "./globals.css";



export const metadata = {
  title: "Morad Boumazough",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
            >
        {children}
      </body>
    </html>
  );
}
