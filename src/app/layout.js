
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "India Laser - High-Quality Laser Machines and Testing Equipment",
  description:
    "Discover top-notch laser machines and testing equipment at India Laser. We offer a wide range of products including fiber lasers, CO2 lasers, UV lasers, welding machines, and gold testing equipment. Our solutions are designed to meet the needs of various industries with precision and reliability.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />

        {children}

        <Footer />

        <a
          href="https://wa.me/917782069184?text=Hello%20I%20am%20interested%20in%20your%20products"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 group"
        >
          <div
            className="bg-[#25D366] p-4 rounded-full shadow-2xl 
                  hover:scale-110 transition duration-300 
                  animate-pulse"
          >
            {/* WhatsApp SVG Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-7 h-7 fill-white"
            >
              <path d="M16 .4C7.5.4.6 7.3.6 15.8c0 2.8.7 5.5 2.1 7.9L.4 31.6l8.1-2.1c2.3 1.3 4.9 2 7.5 2 8.5 0 15.4-6.9 15.4-15.4S24.5.4 16 .4zm0 28.1c-2.4 0-4.7-.7-6.7-2l-.5-.3-4.8 1.3 1.3-4.7-.3-.5c-1.4-2.1-2.1-4.5-2.1-7 0-7 5.7-12.7 12.7-12.7s12.7 5.7 12.7 12.7S23 28.5 16 28.5zm7.1-9.5c-.4-.2-2.5-1.2-2.9-1.3-.4-.2-.7-.2-1 .2-.3.4-1.1 1.3-1.3 1.6-.2.2-.4.3-.8.1-.4-.2-1.6-.6-3-1.8-1.1-1-1.8-2.1-2-2.5-.2-.4 0-.6.2-.8.2-.2.4-.4.6-.7.2-.2.3-.4.4-.7.1-.2 0-.5 0-.7 0-.2-1-2.3-1.4-3.2-.3-.7-.6-.6-1-.6h-.8c-.3 0-.7.1-1 .5-.3.4-1.3 1.3-1.3 3.2s1.3 3.7 1.5 4c.2.2 2.5 3.9 6.1 5.4.8.4 1.5.6 2 .8.8.3 1.6.2 2.2.1.7-.1 2.5-1 2.8-2 .3-1 .3-1.9.2-2.1-.1-.2-.4-.3-.8-.5z" />
            </svg>
          </div>

          {/* Tooltip */}
          <span className="absolute right-16 bottom-3 bg-black text-white text-xs px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition">
            Chat with us
          </span>
        </a>
      </body>
    </html>
  );
}