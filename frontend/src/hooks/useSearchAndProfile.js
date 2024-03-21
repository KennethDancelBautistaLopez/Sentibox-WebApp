import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const SearchAndProfile = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

    const roles = async ({ role }) => {
        const success = handleInputErrors({ role });
        if (!success) return;

        setLoading(true);
        try {
            const res = await fetch("/api/auth/profile", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ role }),
            });
            const data = await res.json();
            if (data.error) {
                throw new Error(data.error);
            }
            localStorage.setItem("chat-user", JSON.stringify(data));
            setAuthUser(data);
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
        
    };
    return { loading, roles };
};
export default SearchAndProfile;