import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
} from 'firebase/auth';
import { login } from "./authSlice";
import { AppDispatch } from "../store";


const registration = (email: string, password: string) => async (dispatch: AppDispatch) => {
  try {
    const auth = getAuth();
    const response = await createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log('redux request:', user);
        dispatch(login(user))
        return user;
      })
    return response;
  } catch (error) {
    console.log(error)
  }
};

const login_pass = (email: string, password: string) => async (dispatch: AppDispatch) => {
  try {
    const auth = getAuth();
    const response = await signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log('redux request:', user);
        dispatch(login(user))
        return user;
      })
    return response;
  } catch (error) {
    console.log(error)
  }
};

const login_google = () => async (dispatch: AppDispatch) => {
  try {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const response = await signInWithPopup(auth, provider)
      .then(({ user }) => {
        console.log('redux login_google:', user);
        dispatch(login(user))
        return user;
      })
    return response;
  } catch (error) {
    console.log(error)
  }
};

// const registration = createAsyncThunk(
//   'user/registration',
//   async (data: {email: string, password: string}) => {
//     const auth = getAuth();
//     const { email, password } = data;
//     const response = await createUserWithEmailAndPassword(auth, email, password)
//       .then(({ user }) => {
//         console.log('redux request:', user);
//         return user;
//       })
//       .catch((error) => {
//         console.log('redux request error:',error)
//       })
//     return response;
//   }
// );

// const login_pass = createAsyncThunk(
//   'user/login_pass',
//   async (data: { email: string, password: string }, thunkAPI) => {
//     const auth = getAuth();
//     const { email, password } = data;
//     const response = await signInWithEmailAndPassword(auth, email, password)
//       .then(({ user }) => {
//         console.log('redux login:', user);
//         thunkAPI.dispatch(login(user))
//         return user;
//       })
//       .catch((error) => {
//         console.log('error login:', error)
//       })
//     return response;
//   }
// );


// const login_google = () => createAsyncThunk(
//   'user/login_google',
//   async () => {
//     const auth = getAuth();
//     const provider = new GoogleAuthProvider();
//     const response = await signInWithPopup(auth, provider)
//       .then(({ user }) => {
//         console.log('redux login_google:', user);
//         return user;
//       })
//       .catch((error) => {
//         console.log('error login_google:', error)
//       }) 
//     return response;
//   }
// );

export { registration, login_pass, login_google };