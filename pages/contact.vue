<script lang="ts" setup>
useHead({
  title: "Contact Us",
});
</script>

<template>
  <div class="contactPage">
    <div class="containerM">
      <div class="intro">
        <p class="text-primaryColor text-center">Contact Us</p>
        <h1 class="text-black text-center">Lets Connect</h1>
      </div>
      <div class="cDetails grid gap-5">
        <div class="address bg-primaryColor">
          <h1 class="text-white">Contact Details</h1>
          <ul class="flex flex-col gap-14">
            <li class="flex flex-row gap-3 items-center">
              <img
                class="w-vw object-cover"
                src="~/assets/images/location.svg"
                alt="location"
              />
              <p class="text-white">Westlands, Nairobi</p>
            </li>
            <li class="flex flex-row gap-3 items-center">
              <img
                class="w-vw object-cover"
                src="~/assets/images/email.svg"
                alt="email"
              />
              <p class="text-white">info@hyddrooharvest.com</p>
            </li>
            <li class="flex flex-row gap-3 items-center">
              <img
                class="w-vw object-cover"
                src="~/assets/images/call.svg"
                alt="call"
              />
              <p class="text-white">+254 705544426</p>
            </li>
          </ul>
        </div>
        <div class="submitemail w-full">
          <h1 class="text-black">Leave a Message and We'll get Back to You</h1>
          <div class="emailform">
            <VForm class="flex flex-col gap-7 w-9/12 mdm:w-full">
              <!-- Start:input -->
              <div class="nameEmail grid">
                <!--begin::Input group-->
                <div class="">
                  <!--begin::Input-->
                  <VField
                    tabindex="1"
                    class="text-black py-4 px-3 w-full bg-gray rounded-xl"
                    type="text"
                    placeholder="Your  name"
                    name="name"
                    autocomplete="off"
                  />
                  <!--end::Input-->
                  <div class="">
                    <div class="">
                      <VErrorMessage name="name" />
                    </div>
                  </div>
                </div>
                <!--end::Input group-->

                <!--begin::Input group-->
                <div class="">
                  <!--begin::Input-->
                  <VField
                    tabindex="2"
                    class="text-black py-4 px-3 w-full bg-gray rounded-xl"
                    type="email"
                    placeholder="Enter  Your Email Address"
                    name="email"
                    autocomplete="off"
                  />
                  <!--end::Input-->
                  <div class="">
                    <div class="">
                      <VErrorMessage name="email" />
                    </div>
                  </div>
                </div>
                <!--end::Input group-->
              </div>

              <!-- end:input -->

              <!-- start::subject -->
              <div class="subject">
                <!--begin::Input group-->
                <div class="">
                  <!--begin::Input-->
                  <VField
                    tabindex="3"
                    class="text-black py-4 px-3 w-full bg-gray rounded-xl"
                    type="text"
                    placeholder="Enter Subject"
                    name="subject"
                    autocomplete="off"
                  />
                  <!--end::Input-->
                  <div class="">
                    <div class="">
                      <VErrorMessage name="subject" />
                    </div>
                  </div>
                </div>
                <!--end::Input group-->
              </div>
              <!-- end::subject -->
              <!-- start:bodyEmail -->
              <div class="bodyEmail">
                <!--begin::Input group-->
                <div class="">
                  <!--begin::Input-->
                  <VField
                    tabindex="4"
                    class="text-black py-4 px-3 w-full bg-gray rounded-xl"
                    type="textarea"
                    placeholder="Enter Message"
                    name="message"
                    autocomplete="off"
                  />
                  <!--end::Input-->
                  <div class="fv-plugins-message-container">
                    <div class="fv-help-block">
                      <VErrorMessage name="message" />
                    </div>
                  </div>
                </div>
                <!--end::Input group-->
              </div>
              <!-- end:bodyEmail -->

              <!-- start:Action buttons -->
              <div class="actions">
                <button
                  id="kt_sign_in_submit"
                  ref="submitButton"
                  tabindex="5"
                  type="submit"
                  class="bg-accentColor cursor-pointer text-white font-medium py-3 px-6 rounded-lg"
                >
                  Send Message
                </button>
              </div>
              <!-- end::Actions -->
            </VForm>
          </div>
        </div>
      </div>
      <div class="maps w-full rounded-3xl mt-20">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d3988.853357106032!2d36.7793883!3d-1.2601586!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ske!4v1707716344331!5m2!1sen!2ske"
          height="450"
          class="w-full rounded-3xl"
          style="border: 0"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
