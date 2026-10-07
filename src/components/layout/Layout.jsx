import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#F6F8FC]">
      <Navbar />

      {/*
        The navigation is a drawer opened from the hamburger button.
        It is intentionally NOT part of the page layout, so pages always
        use the full available width when the drawer is closed.

        This wrapper is the ONE place that controls the page width and the
        horizontal padding, so every page, the navbar and the footer share
        exactly the same left and right edges.
      */}
      <main className="min-h-[70vh] w-full pt-[68px] sm:pt-[76px] lg:pt-[84px]">
        <div className="relative mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
          {children}
        </div>
      </main>

      <Footer />
    </div>
  );
}
