import { useState } from 'react';

import { getAuth } from "firebase/auth";
import { db, auth } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { collection, addDoc, serverTimestamp, query, orderBy } from 'firebase/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import { BoxArrowRight } from "react-bootstrap-icons";


const Chat:React.FC = () => {

  const [value, setValue] = useState('');
  const [user] = useAuthState(auth);
  const q = query(collection(db, 'messages'), orderBy('createdAt'));
  const [messages] = useCollectionData(q);

  const sendMessage = async () => {
    await addDoc(collection(db, 'messages'), {
      uid: user?.uid,
      text: value,
      photoURL: user?.photoURL,
      createdAt: serverTimestamp(),
    });

    setValue('')
  };

  const logout = () => {
    const auth = getAuth();
    auth.signOut();
  };

  return (
    <div className="w-full h-full border-l">
      <section className="h-[44.5rem]">
        <div className="flex justify-between items-center h-10 px-2 bg-blue-700 rounded-tr-lg">
          <p className="text-lg text-white font-Quicksand">{user?.displayName}</p>
          <button
            className="p-1 text-white font-medium text-lg text-center"
            onClick={logout}
          >
            <BoxArrowRight />
          </button>
        </div>
        <div className="h-[42rem] p-2 bg-indigo-200 overflow-auto scroll-smooth scroll-p-2">
          {messages?.map((message) => (
            <div key={Math.random()} className='flex justify-end items-center py-2 '>
              <img alt="avatar" className="w-10 h-10 rounded-full" src={message.photoURL} />
              <div className='max-w-md p-2 ml-2 text-ellipsis overflow-x-hidden bg-blue-400 rounded-lg'>
                <p>{message.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="h-14 flex">
        <input
          className="w-[85%] h-14 pl-2 focus:outline-none"
          placeholder="Send message"
          type="text"
          value={value}
          onChange={((event) => setValue(event.target.value))}
        />
        <button
          onClick={sendMessage}
          className="w-[15%] h-full rounded-br-lg text-lg text-center text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none hover:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium">
          Send
        </button>
      </section>
    </div> 
  )
};

export { Chat };
