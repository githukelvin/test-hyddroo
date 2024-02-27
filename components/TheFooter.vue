<!-- eslint-disable vue/no-parsing-error -->
<template>
  <footer class="bg-primaryColor">
    <div class="containerM py-10 md:py-9">
      <div
        class="layout flex flex-col justify-center items-center md:items-start md:grid md:grid-cols-3 md:gap-7 lg:gap-48"
      >
        <div class="hyddroo flex flex-col gap-6 md:flex md:flex-col md:gap-5">
          <img
            class="md:w-72"
            src="~/assets/images/logo/logo.png"
            alt="logo fooer"
          />
          <p class="text-white text-center md:text-start">
            Transforming agriculture one <br />
            sustainable harvest at a time
          </p>
          <div
            class="socials flex flex-row gap-5 mb-2 justify-center md:items-start md:justify-start items-center md:flex-row md:gap-6"
          >
            <NuxtLink to="#" target="_blank">
              <i class="fa-brands fa-instagram" />
            </NuxtLink>
            <NuxtLink to="#" target="_blank">
              <i class="fa-brands fa-linkedin-in" />
            </NuxtLink>
            <NuxtLink to="#" target="_blank">
              <i class="fa-brands fa-facebook" />
            </NuxtLink>
          </div>
        </div>
        <div class="quicklinks mb-3 flex flex-col w-svw items-center md:w-fit">
          <h1>Quick links</h1>
          <ul class="text-white flex items-center flex-col gap-2">
            <li class="py-2">
              <NuxtLink to="/"> Home </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/register"> Register </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/service"> Services </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/about"> About Us </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contact"> Contact Us </NuxtLink>
            </li>
          </ul>
        </div>
        <div class="contact text-white md:-ml-12">
          <h1 class="md:pb-1 text-center md:text-start pb-3">Contact</h1>
          <ul
            class="flex justify-center items-center md:items-start flex-col gap-4"
          >
            <li class="flex md:py-1 cursor-pointer gap-4 items-center">
              <img
                class="w-6 object-contain object-center"
                src="~/assets/images/email.svg"
                alt="email"
              />
              <p>info@hyddrooharvest.com</p>
            </li>
            <li class="flex md:py-1 cursor-pointer gap-4 items-center">
              <img
                class="w-6 object-contain object-center"
                src="~/assets/images/call.svg"
                alt="email"
              />
              <p>+254 705544426</p>
            </li>
            <li class="flex md:py-1 cursor-pointer gap-4 items-center">
              <img
                class="w-6 object-contain object-center"
                src="~/assets/images/location.svg"
                alt="email"
              />
              <p>Westlands, Nairobi</p>
            </li>
          </ul>
        </div>
      </div>

      <div class="termndconditions">
        <div class="line bg-white h-px my-7" />
        <div class="details flex flex-col md:flex-row justify-between">
          <p class="text-white">&copy Hyddroo Harvest All rights reserved.</p>
          <div class="terms flex flex-row text-white">
            <p class="md:pr-3">Terms & Conditions</p>
            <p>|</p>
            <p class="md:pl-3">Privacy Policy</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
