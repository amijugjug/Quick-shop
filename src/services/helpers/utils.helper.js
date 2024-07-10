export const isValidEmail = (email) => {
  // Regular expression for basic email validation
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};
