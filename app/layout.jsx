import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

// metadata estatica
export const metadata = {
  title: "e-AutoFram",
  description: "Venta en respuestos y accesorios de vehiculos en linea",
  keywords: ["autofram", "repuestos", "accesorios", "autos", "baterias", "neumaticos", "online", ],
  openGraph: { // extension para el uso de redes sociales.
    title: "e-AutoFram",
    description: "AutoFram ahora con su tienda online",
    type: "website",
    publishedTime: "2023-01-01T00:00:00Z",
    authors: ["lubiano83"]
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-white" style={{ height: "calc(100vh - 157px)" }}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
