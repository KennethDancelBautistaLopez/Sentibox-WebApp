import MessageContainer from "../../components/messages/MessageContainer";
import Profile from "../../components/sidebar/Profile";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
	return (
		<div className='flex bg-zinc-200 sm:h-[450px] dark:bg-slate-800 md:h-[550px] rounded-lg overflow-hidden  bg-clip-padding backdrop-filter backdrop-blur-lg '>
			{/* <Profile /> */}
			<Sidebar/>
			<MessageContainer />
		</div>
	);
};
export default Home;