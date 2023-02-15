import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase';

import { useAppDispatch } from '../../hooks/redux-hooks';
import { setUser } from '../../redux/user/userSlice';

import google from '../../assets/svg/google-icon.svg';
import logo from '../../assets/svg/logo.svg';


const Login:React.FC = () => {

  const style = {
    page: 'absolute top-0 left-0 w-full h-full bg-indigo-100',
    wrapper: 'absolute top-[18%] rounded-xl drop-shadow-xl left-[34%] w-[32rem] h-[38rem] bg-white',
    inner: 'flex flex-col  content-center w-full h-full p-14 md:pb-0 md:px-7 md:pt-6 sm:px-5 mb-4',
    thumb_content: 'flex justify-center',
    thumbnail: 'w-72 mb-6 sm:mb-3 sm:w-56',
    title: 'mb-4 text-3xl lg:text-2xl sm:text-xl md:mb-0 sm:mb-0 font-bold text-center text-blue-800',
    form: 'mt-6 sm:mt-4',
    label: 'block text-sm text-slate-900',
    input: 'w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600',
    button: 'block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 ',
    excerpt: 'mt-4 text-xs font-light text-center text-slate-900',
    link_pass: 'text-xs text-slate-900 hover:underline',
    link_register: 'font-medium text-blue-600 hover:underline'
  };

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const authWithGoogle = async () => { // Авторизация по паролю
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider)
      .then(({user}) => {
        console.log(user);
        dispatch(setUser({
          email: user.email,
          id: user.uid,
          token: user.refreshToken,
          displayName: user.displayName,
          photoUrl: user.photoURL
        }));
        navigate('/')
        
      }).catch((error) => {
        console.log(error.message)
      })
  };

  const authWithEmail = async () => { // Авторизация с помошью Google
    const auth = getAuth();
    await signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(setUser({
          email: user.email,
          id: user.uid,
          token: user.refreshToken,
          displayName: user.displayName,
          photoUrl: user.photoURL
        }));
        navigate('/');
      })
      .catch(() => alert('Invalid user!'))
  };
  

  return (
    <section className={style.page}>
      <div className={style.wrapper}>
        <div className={style.inner}>
          <div className={style.thumb_content}>
            <img className={style.thumbnail} src={logo} alt="logo"/>
          </div>
            <h1 className={style.title}>
              Login to Your Account
            </h1>
          <form className={style.form} method='POST' onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className={style.label}>Email</label>
              <input 
                type="email" 
                className={style.input}
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                name="email"
                required
              />
            </div>
            <div className="mt-4 sm:mt-2" />
              <div>
                <label htmlFor="password" className={style.label}>Password</label>
                <input 
                  type="password" 
                  className={style.input}
                  autoComplete="on" 
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  name="password" 
                  required
                />
              </div>
                <a href="/" className={style.link_pass}>Forget Password?</a>
                <div className="mt-6">
                <button 
                  className={style.button}
                  onClick={authWithEmail}
                >
                  Log In
                </button>
            </div>
          </form>
          <div className="flex justify-center mt-4 text-grey-600 text-base">
            Don't have an account?{" "}
            <span>
              <Link className="text-blue-600 hover:underline" to="/register">
                  Sing Up
              </Link>
            </span>
          </div>
          <div className="flex items-center w-full my-4">
            <hr className="w-full" />
            <p className="px-3 ">OR</p>
            <hr className="w-full" />
          </div>
          <button
            aria-label="Login with Google"
            type="button"
            onClick={authWithGoogle}
            className="flex items-center justify-center w-full p-2 space-x-4 border text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg"
          >
          <img src={google} alt="google" className="w-5 h-5 text-white" />
          <p>Login with Google</p>
          </button>
        </div>
      </div>
    </section>
  );
};

export { Login };
