import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from '../../firebase.init';

const RequireAuth = ({ children }) => {
    const [user,loading] = useAuthState(auth);
    let location = useLocation();
    if(loading){
        return <progress class="progress w-56"></progress>
    }

 if(!user){
    return <Navigate to="/login" state={{ from: location }} replace />;
 }


 return children;
};

export default RequireAuth;