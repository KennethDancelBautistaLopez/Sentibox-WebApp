import React from "react";
// import Profile from "./Profile";
import ThemeSwitcher from "./themeSwitcher";
import LogoutButton from "./LogoutButton";
// import Account from "./Account";
// import useSearchAndProfile from "../../hooks/useSearchAndProfile";

const SearchAndProfile = () => {
  //   const [profile, setProfile] = useState({
  //     avatar: "",
  //   });

  //   const { loading } = useSearchAndProfile();

  //   const handleEditClick = (avatar) => {
  //     setProfile({ ...profile, avatar });
  //   };
  // };

  return (
    <div className="navbar ">
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
        <div className="dropdown dropdown-end flex flex-col">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a>
                Profile
                {/* <Profile /> */}
              </a>
            </li>
            <li>
              <a>
                Account
                {/* 
              <Account /> */}
              </a>
            </li>
            <li>
              <a>
                <ThemeSwitcher />
              </a>
            </li>
            <li>
              <LogoutButton />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SearchAndProfile;
