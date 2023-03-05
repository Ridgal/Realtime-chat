import { Navigate } from "react-router-dom";
// import { useAuth } from "../../hooks/use-auth";
import { auth } from "../../firebase";
import { useAuthState } from 'react-firebase-hooks/auth';
import { Sidebar } from "../Sidebar/Sidebar";
import { Chat } from "../Chat/Chat";

const Home = () => {
  const [user] = useAuthState(auth);
  console.log(user)
  
  return user ?
    (
      <section className="container p-0 flex mt-14 w-full h-[48rem] bg-slate-200 rounded-xl shadow-xl">
        <div className="w-[30%] h-full">
          <Sidebar />
        </div>
        <div className="w-[70%] h-full">
          <Chat />
        </div>
      </section>
    )
    :
    (
      <Navigate to="/login" />
    )
}

export { Home };