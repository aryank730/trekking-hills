import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "/logo/Logo(3).png";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const menuItems = [
    { name: "Ecosystem" },
    { name: "Discover", dropdown: ["Whitepaper", "Roadmap", "Team"] },
    { name: "Users" },
    { name: "Community" },
  ];

  const handleLinkClick = () => {
    if (window.innerWidth < 768) {
      toggleSidebar(); // Close sidebar on small screens
    }
  };

  return (
    <nav className="bg-[#0D1117] text-white px-6 py-2 relative h-14">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" onClick={handleLinkClick}>
            <img src={logo} alt="Logo" className="w-36 h-auto object-contain" />
          </Link>
        </div>

        {/* Menu Items */}
        <ul className="flex justify-center items-center gap-x-16">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="relative group cursor-pointer"
              onMouseEnter={() => setOpenDropdown(item.dropdown ? index : null)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <div className="flex items-center gap-1">
                {item.name}
                {item.dropdown && <ChevronDown size={16} />}
              </div>

              {/* Dropdown Menu */}
              {item.dropdown && openDropdown === index && (
                <ul className="absolute left-0 mt-2 w-48 bg-gray-800 text-white shadow-lg rounded-md py-2">
                  {item.dropdown.map((subItem, subIndex) => (
                    <li key={subIndex} className="px-4 py-2 hover:bg-gray-700">
                      {subItem}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;