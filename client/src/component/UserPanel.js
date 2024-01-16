import Signup from "../pages/Signup";
import Login from "../pages/Login";
import UserDetails from "../UserDetails";

function UserPanel({currentUser, logout, attemptLogin, attemptSignup}) {
    if (!currentUser) {
        return (
            <>
                <Signup attemptSignup={attemptSignup}/>
                <Login  attemptLogin={attemptLogin}/>
            </>
        )
    } else {
        return (
            <UserDetails currentUser={currentUser} logout={logout} />
        )
    }
}

export default UserPanel;