import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";

const Sidebar = () => {

  const [user] = useAuthState(auth);

  return (
    <div className="w-full h-full border-r-2 border-blue-700">
      <section className="flex justify-between px-2 w-full h-10 bg-blue-700 rounded-tl-lg">
        <div className="flex items-center">
          <p className="font-mono text-xl text-white">
            Chat
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center text-white font-medium">
            <img className="w-6 h-6 rounded-full pr-2" src='' alt="" />
            <p>{user?.displayName}</p>
          </div>
        </div>
      </section>
      <section className="pt-4 p-2 h-[45.5rem]">
        <input></input>
        Users
      </section>
    </div>
  );
};

export { Sidebar };
