// import africastalking from "africastalking";
// import "dotenv/config";
// export const africasSms = () => {
//   // const config = useRuntimeConfig();
//   const africaSmsKey = process.env.VITE_AT_APIKEY;
//   const africaSmsUsername = process.env.VITE_AT_USERNAME;
//   const credentials = {
//     apiKey: africaSmsKey,
//     username: africaSmsUsername,
//   };
//   const AfricasTalking = africastalking(credentials);
//   return AfricasTalking;
// };

import africastalking from "africastalking";

// Modify the africasSms function to use environment variables
export const africasSms = () => {
  const apiKey = import.meta.env.VITE_AT_APIKEY;
  const username = import.meta.env.VITE_AT_USERNAME;
  if (!apiKey || !username) {
    throw new Error("Africa SMS API key or username is not provided.");
  }

  const credentials = {
    apiKey: apiKey,
    username: username,
  };
  const AfricasTalking = africastalking(credentials);
  return AfricasTalking;
};
