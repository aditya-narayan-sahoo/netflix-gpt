import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const dispatch = useDispatch();

  const handleGPTSearchClick = () => {
    //toggle gpt search
    dispatch(toggleGptSearchView());
  };
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    //Unsubscribe when the component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute px-6 py-2 bg-gradient-to-b from-black z-10 w-screen flex flex-col md:flex-row items-center md:items-start md:justify-between">
      <div className="flex justify-center w-full md:w-auto">
        <img className="w-48" src={LOGO} alt="netlfix-logo" />
      </div>
      {user && (
        <div className="flex flex-col md:flex-row items-center md:items-start py-6 w-full md:w-auto">
          <div className="flex items-center mb-2 md:mb-0">
            <button
              className="py-2 px-4 mx-2 bg-purple-800 text-white rounded-lg"
              onClick={handleGPTSearchClick}
            >
              {showGptSearch ? "HomePage" : "GPT Search"}
            </button>
            <img
              className="w-12 h-12 mx-2 hidden md:block"
              src={user?.photoURL}
              alt="user-icon"
            />
            <button
              className="font-semibold text-white"
              onClick={handleSignOut}
            >
              (Sign Out)
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
