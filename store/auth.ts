import { supabase } from "../utils/supabase";
import { africasSms } from "~/utils/africassms";
import bcrypt from "bcryptjs";

export interface User {
  fullname: string;
  phone: string;
  OTP: Number;
  password: string;
}

export const useAuthStore = defineStore("auth", () => {
  const errors = ref({});
  const successMsg = ref({});
  const user = ref<User>({} as User);
  const client = supabase();
  const sms = africasSms();

  async function signUp(values) {
    try {
      const hashedPassword = await bcrypt.hash(values.password, 10);
      values.password = hashedPassword;
      delete values.Cpassword;
      const { data, error } = await client
        .from("user")
        .insert([values])
        .select();
      errors.value = { ...error };
    } catch (error) {
      errors.value = { ...error };
    }
  }

  async function sendOTP() {
    const options = {
      to: ["+254700349970"],
      message: `Your OTP is: 934843`,
    };
    sms
      .send(options)
      .then((response) => console.log(response))
      .catch((error) => (errors.value = { ...error }));
  }
  async function checkphone(phone) {
    try {
      const { data: user, error } = await client
        .from("user")
        .select("*")
        .eq("phoneNumber", phone);

      if (error) {
        console.error("Error fetching user data:", error.message);
      } else if (user.length < 1) {
        return false;
      } else {
        return true;
      }
    } catch (error) {
      console.error("Unexpected error checking for existing users: ", error);
    }
  }

  return {
    errors,
    user,
    supabase,
    signUp,
    sendOTP,
    checkphone,
  };
});
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot));
}
