<template>
  <div class="register">
    <h1 class="text-black text-center">Register With Us</h1>
    <div class="formDiv grid max-w-3xl bg-gray rounded-3xl">
      <VForm
        v-slot="{ meta: formMeta }"
        class="flex flex-col gap-6 w-full"
        :initial-values="initialValues"
        :validation-schema="userSchema"
        @submit="submitForm"
      >
        <!--begin::Input group-->
        <VTextInput
          id="pname"
          type="text"
          name="fullname"
          label="Enter your full name:"
          placeholder="Eg John Doe"
          border-class="roundit"
        />
        <!--end::Input group-->

        <!--begin::Input group-->
        <VTextInput
          id="phone"
          type="text"
          name="phoneNumber"
          label="Enter your phone number:"
          datamaska="+254#########"
          placeholder="+254 7------"
          border-class="roundit"
          mode="lazy"
        />
        <!--end::Input group-->

        <!--begin::Input group-->
        <VTextInput
          id="pass"
          type="password"
          name="password"
          label="Enter your password:"
          placeholder="********"
          :show="true"
        />

        <!--end::Input group-->

        <!--begin::Input group-->
        <VTextInput
          id="passC"
          type="password"
          name="Cpassword"
          label="Repeat password:"
          placeholder="********"
          :show="true"
        />

        <!--end::Input group-->

        <!-- start:Action buttons -->
        <div class="actions">
          <CustomButton :disabled="!formMeta.valid" val="Get OTP" />
        </div>
        <!-- end::Actions -->
      </VForm>
    </div>
  </div>
</template>
<script lang="ts" setup>
import * as Yup from "yup";
import { configure } from "vee-validate";
import "sweetalert2/src/sweetalert2.scss";
import { useAuthStore } from "~/store/auth";
import { type User } from "~/store/auth";
import { supabase } from "~/utils/supabase";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { generateUniqueRandomNumbers } from "~/composables/randomNumbers";
useHead({
  title: "Register With Us",
});
const nuxtApp = useNuxtApp();
const axios = nuxtApp.$axios;
const client = supabase();
const useAuth = useAuthStore();
configure({
  validateOnBlur: true, // controls if `blur` events should trigger validation with `handleChange` handler
  validateOnChange: true, // controls if `change` events should trigger validation with `handleChange` handler
  validateOnInput: false, // controls if `input` events should trigger validation with `handleChange` handler
  validateOnModelUpdate: true, // controls if `update:modelValue` events should trigger validation with `handleChange` handler
});

const userSchema = Yup.object().shape({
  fullname: Yup.string().required("Full name is required"),
  phoneNumber: Yup.lazy((value) =>
    Yup.string()
      .min(12)
      .required("Phone number is required")
      .test(
        "phone-is-taken",
        "Phone is already taken",
        async (value) => !(await useAuth.checkphone(value)),
      ),
  ),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  Cpassword: Yup.string()
    .required("Confirm password is required")
    .oneOf([Yup.ref("password")], "Passwords must match"),
});
//initial values
const initialValues = {
  fullname: "",
  phoneNumber: "",
  password: "",
  Cpassword: "",
};

const submitForm = async (values: any, actions: { resetForm: () => void }) => {
  const uniqueNumbers = generateUniqueRandomNumbers(5, 0, 9);
  const OTP = { OTP: uniqueNumbers };
  const userDetails = { ...values, ...OTP };
  values = userDetails as User;
  const data = {
    phone: values.phoneNumber, // Example phone number
    message: `Msimbo wako ni ${values.OTP}`, // Example message
  };
  console.log(data);

  await useAuth.signUp(values);
  const error = Object.values(useAuth.errors);
  if (error.length === 0) {
    Swal.fire({
      text: "Registration Success. We have sent you an OTP.",
      icon: "success",
      buttonsStyling: false,
      confirmButtonText: "Ok, got it!",
      heightAuto: false,
      customClass: {
        confirmButton: "bg-primaryColor text-white px-3 py-2 confirmbutton",
      },
    }).then(() => {
      console.log(data);
      axios
        .get("/api/sendSMS", { data })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    });
  } else {
    Swal.fire({
      text: error as unknown as string,
      icon: "error",
      buttonsStyling: false,
      confirmButtonText: "Try again!",
      heightAuto: false,
      customClass: {
        confirmButton:
          "btn bg-danger tex-white px-3 py-2 rounded-xl fw-semibold btn-light-danger",
      },
    }).then(() => {
      useAuth.errors = {};
    });
  }
  actions.resetForm();
};
</script>

<style scoped></style>
~/utils/sweetalert2 ~/store/auth~/store/auth
