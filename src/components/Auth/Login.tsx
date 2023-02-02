import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAppDispatch } from '../../hooks/redux-hooks';
import { setUser } from '../../redux/user/userSlice';
import logo from '../../assets/logo.svg';


const Login:React.FC = () => {

  const style = {
    page: 'absolute top-0 left-0 w-full h-full bg-indigo-100',
    wrapper: 'absolute top-[18%] rounded-xl drop-shadow-xl left-[34%] w-[32rem] h-[34rem] bg-white',
    inner: 'flex flex-col  content-center w-full h-full p-14 md:pb-0 md:px-7 md:pt-6 sm:px-5 mb-4',
    thumb_content: 'flex justify-center',
    thumbnail: 'w-72 mb-6 sm:mb-3 sm:w-56',
    title: 'mb-4 text-3xl lg:text-2xl sm:text-xl md:mb-0 sm:mb-0 font-bold text-center text-blue-800',
    form: 'mt-6 sm:mt-4',
    label: 'block text-sm text-slate-900',
    input: 'w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600',
    button: 'block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue',
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
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(setUser({
          email: user.email,
          id: user.uid,
          token: user.refreshToken,
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
                >
                  Log In
                </button>
            </div>
          </form>
          <p className={style.excerpt}> 
            Don't have an account?
          <Link to="/register" className={style.link_register}>
            Sign up
          </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export { Login };
