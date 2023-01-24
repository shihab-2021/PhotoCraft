import { useContext } from "react"
import { AuthContext } from "../Context/Context";

const useAuth = () => {
    return useContext(AuthContext);
}

export default useAuth;