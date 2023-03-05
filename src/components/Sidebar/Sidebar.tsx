import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
// import { useAppSelector } from "../../hooks/redux-hooks";

const Sidebar = () => {

  const [user] = useAuthState(auth);
  // const photoURL = useAppSelector(state => state.auth.user?.photoURL);

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
            {user?.photoURL ?
              <img className="w-8 h-8 rounded-full" src={String(user?.photoURL)} alt="" />
              :
              (
                <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                  <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                </div>
              )
            }
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
