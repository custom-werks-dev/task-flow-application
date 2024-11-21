import { BarChart, BriefcaseBusiness, CircleUserRound } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path ? "bg-[#ffffff2c]" : "";

  return (
    <div className="flex  justify-center mb-3 p-2 items-center  md:text-[16px] bg-[black] text-white pl-[calc(100vw-100%)]">
      <ul className="flex md:gap-10 justify-center">
        <li
          onClick={() => navigate("/")}
          className={`hover:bg-[#ffffff2c]  transition-all rounded-sm px-6 py-2 cursor-pointer flex items-center gap-3  ${isActive(
            "/"
          )}`}
        >
          <BarChart /> <span className="md:block hidden">Tasks</span>
        </li>
        {/* <li
          onClick={() => navigate("/tasks")}
          className={`hover:bg-[#ffffff2c] transition-all rounded-sm px-6 py-1 cursor-pointer flex items-center gap-3 ${isActive(
            "/tasks"
          )}`}
        >
          <CircleUserRound />{" "}
          <span className="md:block hidden">Personal Contacts</span>
        </li> */}
        {/* <li
                    onClick={() => navigate('/business-contacts')}
                    className={`hover:bg-[#ffffff2c] transition-all rounded-sm px-6 py-1 cursor-pointer flex items-center gap-3  ${isActive(
                        '/business-contacts'
                    )}`}
                >
                    <BriefcaseBusiness />{' '}
                    <span className="md:block hidden">
                        Business Contacts
                    </span>
                </li> */}
      </ul>
    </div>
  );
};

export default Navbar;
