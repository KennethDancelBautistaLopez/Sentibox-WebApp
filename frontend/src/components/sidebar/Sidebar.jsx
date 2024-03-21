import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchAndProfile from "./SearchAndProfile";

// import Profile from "./Settings";

const Sidebar = () => {
  return (
    <div className="border-r  border-slate-500 p-4 flex flex-col">
      <SearchAndProfile />

      {/* <SearchAndProfile/> */}
      <div className="divider px-3"></div>
      <Conversations />
      <LogoutButton />
    </div>
  );
};

export default Sidebar;
