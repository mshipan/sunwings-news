export const getAllMembers = async () => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/users`);
  const data = res.json();
  return data;
};
