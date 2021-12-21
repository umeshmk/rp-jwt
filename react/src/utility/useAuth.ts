export function useAuth() {
  const token = localStorage.token;
  console.log(token);

  return token;
}
