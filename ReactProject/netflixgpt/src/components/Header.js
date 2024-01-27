import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        //dispatch(removeUser()); dipatch action will be done automatically from onAuthChanged
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
        // An error happened.
      });
  };

  return (
    <div class="main-header">
      <div>
        <img
          style={{
            width: "200px",
            backgroundImage: "linear-gradient(black,rgba(255,0,0,0))",
            padding: "25px",
          }}
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="netflix-bg"
        />
      </div>
      {user && (
        <div class="user-sign-out">
          <img
            style={{ width: "50px", padding: "20px", height: "20px" }}
            alt="usericon"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWOdZJlzGgsaxupEmN1jGhRIn41F0Y-0ZR7A&usqp=CAU"
          />
          <button class="signout-btn" type="submit" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
