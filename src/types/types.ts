export type IUser = {
  id: number | string,
  email: string,
  password: string | null,
  displayName?: string | null,
  photoUrl: string | null
};