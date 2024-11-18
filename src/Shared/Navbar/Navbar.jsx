import { Dialog, DialogPanel } from "@headlessui/react";
import { Menu, ShoppingCart, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

const Container = ({ children, className }) => {
  return (
    <div className={twMerge("max-w-screen-xl mx-auto px-3", className)}>
      {children}
    </div>
  );
};

const navigationLinks = [
  { title: "Home", link: "/" },
  { title: "Our Menu", link: "/all-menu-item" },
  { title: "Order", link: "/order-food-item/salad" },
  { title: "Secret", link: "/secret" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY >= 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <div
      className={`h-20 w-full fixed top-0 left-0 z-50 duration-300 ${
        isScrolled ? "bg-red-100 text-blue-900" : "bg-transparent text-black"
      }`}
    >
      <Container className="h-full flex items-center justify-between">
        <h1 className="text-xl font-bold">Mozammel Hosen</h1>
        {/* <img src={logoDark} alt="logoDark" className="w-10 " /> */}

        <div className="hidden md:flex items-center gap-x-6 uppercase text-xs lg:text-sm font-medium tracking-wide">
          {navigationLinks.map((item) => (
            <Link
              key={item.title}
              to={item.link}
              className={twMerge(
                "hover:text-white duration-200 cursor-pointer relative group overflow-hidden",
                location.pathname === item.link ? "text-orange-500" : ""
              )}
            >
              {item.title}
              <span className="w-full h-[1px] bg-white inline-block absolute bottom-0 left-0 -translate-x-[110%] group-hover:translate-x-0 duration-300" />
            </Link>
          ))}
          {/* <Link to={"/dashboard/cart"}>
            <button className="btn">
              <RiShoppingCartFill />
              <div className="badge badge-secondary">+{cart.length}</div>
            </button>
          </Link> */}
          {/* {user ? (
            <>
              <span>{user?.displayName}</span>
              <span onClick={handleLogout} className="cursor-pointer">
                LogOut
              </span>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className={
                  location.pathname === "/login" ? "text-orange-500" : ""
                }
              >
                Login
              </Link>
            </>
          )} */}
          <Link to="/cart">
            <button className="relative flex items-center">
              <ShoppingCart className="w-6 h-6 hover:text-orange-500 duration-200" />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </button>
          </Link>
          {/* <form
            onSubmit={handleSearch}
            className="relative flex items-center"
          >
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="border border-gray-300 rounded-full px-4 py-1 text-sm focus:outline-none focus:ring focus:ring-orange-300"
            />
            <button
              type="submit"
              className="absolute right-2 text-gray-500 hover:text-orange-500"
            >
              <Search className="w-5 h-5" />
            </button>
          </form> */}
        </div>

        <Menu
          onClick={toggleMenu}
          size={25}
          className="hover:text-white cursor-pointer md:hidden"
          aria-label="Open menu"
        />
      </Container>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50 md:hidden text-white/80"
      >
        <div className="fixed inset-0 flex items-center justify-center p-4 ">
          <DialogPanel className="w-[94%] space-y-4 p-6 border border-lightText rounded-md absolute top-10 m-5 bg-gray-800">
            <div className="flex items-center justify-between gap-5">
              <h3 className="font-semibold text-xl">Navigation Menu</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/40 text-2xl hover:text-red-600 duration-300 border border-white/20 rounded-sm hover:border-white/40"
                aria-label="Close menu"
              >
                <X />
              </button>
            </div>
            <div className="flex flex-col gap-5 pt-5 cursor-pointer">
              {navigationLinks.map((item) => (
                <Link
                  key={item.title}
                  to={item.link}
                  onClick={() => setIsOpen(false)}
                  className={twMerge(
                    "hover:text-white relative group flex items-center gap-2 cursor-pointer",
                    location.pathname === item.link
                      ? "text-orange-500"
                      : "text-white"
                  )}
                >
                  <span className="w-2.5 h-2.5 rounded-full border border-white/80 inline-flex group-hover:border-white" />
                  {item.title}
                  <span className="absolute w-full h-[1px] bg-white/20 left-0 -bottom-1 group-hover:bg-white duration-300" />
                </Link>
              ))}

              {/* {user ? (
                <span
                  onClick={() => {
                    handleLogout();
                    setIsOpen(false);
                  }}
                  className="hover:text-white text-white"
                >
                  LogOut
                </span>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className={
                    location.pathname === "/login"
                      ? "text-orange-500"
                      : "text-purple-300 font-mono text-xl font-bold"
                  }
                >
                  Login
                </Link>
              )} */}
              <Link to="/cart">
                <button className="relative flex items-center">
                  <ShoppingCart className="w-6 h-6 hover:text-orange-500 duration-200" />
                  {cart.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                      {cart.length}
                    </span>
                  )}
                </button>
              </Link>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  );
};

export default Navbar;
