<template>
  <header class="fixed w-svw bg-primaryColor">
    <div
      class="containerM align-baseline w-11/12 md:w-11/12 lg:w-11/12 lg:mx-auto  lg:px-6 text-sm xl:px-8 pr-2 px-0 md:px-0 sm:px-0 py-7 navDiv flex text-white flex-row items-center justify-between"
    >
      <div class="logo">
        <NuxtLink to="/">
          <img src="~/assets/images/logo/logo.png" alt="logo" />
        </NuxtLink>
      </div>
      <div id="navbar" class="navbar bg-primaryColor lg:bg-transparent">
        <nav>
          <ul id="navUl" class="flex flex-row gap-5 md:gap-10 items-center">
            <li>
              <NuxtLink @click="isToggled.toggle()" to="/"> Home </NuxtLink>
            </li>
            <li>
              <NuxtLink @click="isToggled.toggle()" to="/register"> Register </NuxtLink>
            </li>
            <li>
              <NuxtLink @click="isToggled.toggle()" to="/service"> Services </NuxtLink>
            </li>
            <li>
              <NuxtLink @click="isToggled.toggle()" to="/about"> About Us </NuxtLink>
            </li>
            <li>
              <NuxtLink
                @click="isToggled.toggle()"
                class="flex flex-row gap-1 items-center"
                to="/training"
              >
                Training
                <img class="" src="~/assets/images/arrowDown.png" alt="" />
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contact"> Contact Us </NuxtLink>
            </li>
          </ul>
          <!-- <nuxt-link to="/login" class="button">Register Now</nuxt-link> -->
        </nav>
      </div>
      <div @click="isToggled.toggle()" class="ham" />
    </div>
  </header>
</template>
<script lang="ts" setup>
//ham bugger close and open
const isToggled = {
  value: false,
  toggle() {
    const ul = document.querySelector("#navbar");
    const body = document.querySelector("body");

    if (!ul || !body) return;

    this.value = !this.value;
    ul.classList.toggle("active");
    body.classList.toggle("active");
  },
};
</script>
<style scoped></style>
