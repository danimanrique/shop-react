import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context";

const Navbar = () => {
  const context = useContext(ShoppingCartContext);
  const activeStyle = "underline underline-offset-4";

  return (
    <nav className="flex justify-between items-center fixed z-10 top-0  w-full py-5 px-8 text-sm font-light bg-white">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink to="/" onClick={() => {
              context.setCategory(null);
            }}>Shopi</NavLink>
        </li>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? activeStyle : undefined)}>
            All
          </NavLink>
        </li>
        <li>
          <NavLink to="/men's clothing" className={({ isActive }) => (isActive ? activeStyle : undefined)}>
            Men&apos;s clothing
          </NavLink>
        </li>
        <li>
          <NavLink to="/women's clothing" className={({ isActive }) => (isActive ? activeStyle : undefined)}>
            Women&apos;s clothing
          </NavLink>
        </li>
        <li>
          <NavLink to="/electronics" className={({ isActive }) => (isActive ? activeStyle : undefined)}>
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink to="/jewelery" className={({ isActive }) => (isActive ? activeStyle : undefined)}>
            Jewelery
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3">
        <li className="text-black/60">usuario@email.com</li>
        <li>
          <NavLink to="/my-orders">My Orders</NavLink>
        </li>
        <li>
          <NavLink to="/my-account">My Account</NavLink>
        </li>
        <li>
          <NavLink to="/sign-in">Sign In</NavLink>
        </li>
        <li>
          <div className="flex items-center cursor-pointer" onClick={() => (context.openCheckoutSideMenu())}>
            <ShoppingCartIcon className="size-4 mr-2"/>
            {context?.count}
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
