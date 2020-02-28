export const getToken = () => {
  return localStorage.getItem('githubToken');
}

export const getAuthenticatedUser = async () => {
  const token = localStorage.getItem('githubToken');
  if (token) {
    const response = await fetch('https://api.github.com/user', {
      headers: new Headers({
        authorization: `Bearer ${token}`
      }),
    });
    const result = await response.json();
    result.token = token;
    return result;
  }
}