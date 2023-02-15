import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/use-auth";
import { Sidebar } from "../Sidebar/Sidebar";
import { Chat } from "../Chat/Chat";

const Home = () => {
  const { isAuth } = useAuth();
  // const style = {
  //   layout: '',
  //   sidebar: '',
  //   chat: '',
  // };
  
  return isAuth ?
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