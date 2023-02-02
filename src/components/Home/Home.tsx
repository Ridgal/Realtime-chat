import { Navigate } from "react-router-dom";
import { removeUser } from "../../redux/user/userSlice";
import { useAppDispatch } from "../../hooks/redux-hooks";
import { useAuth } from "../../hooks/use-auth";

const Home = () => {
    const dispatch = useAppDispatch();
    const {isAuth, email} = useAuth();

  return isAuth ?
    (
      <div>
        <button
          className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            onClick={()=> dispatch(removeUser())}
          >
          Log out {email}
          </button>
      </div>
    )
    :
    (
      <Navigate to="/login" />
    )
}

export { Home };