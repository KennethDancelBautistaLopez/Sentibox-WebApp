import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useIdentity = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

    const identity = async ({ role }) => {
        const success = handleInputErrors({ role });
        if (!success) return;

        setLoading(true);
        try {
            const res = await fetch("/api/auth/people", {
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
    return { loading, identity };
};
export default useIdentity;

// function handleInputErrors({ role }) {
//     if (!role) {
//         toast.error("Please fill in all fields");
//         return false;
//     }
//     return true;
//     if (role !== "teacher" && role !== "student") {
//         toast.error("Invalid role");
//         return false;
//     }
//     return true;
// }