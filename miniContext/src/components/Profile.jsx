import { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {

 const {user} = useContext(UserContext);

 //here we do conditional rendering
 if(!user) return <div>Please Log in</div>

 return <div>Welcome, {user.username}</div>
}

export default Profile;