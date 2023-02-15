import { useAppSelector } from './redux-hooks';

export function useAuth() {
  const {email, token, id, displayName, photoUrl, loading} = useAppSelector(state => state.user);
  return {
    isAuth: !!email,
    email,
    token,
    id,
    displayName,
    photoUrl,
    loading
  };
};