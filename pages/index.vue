<!-- eslint-disable vue/no-multiple-template-root -->
<template>
  <div class="main w-full pt-16">
    <div class="containerM">
      <div class="heroDetails py-20 md:py-28">
        <h1 class="text-white text-center">
          Transforming <span class="text-primary2">Agriculture</span> One Sustainable
          <span class="text-primary2">Harvest</span> at a Time
        </h1>
        <p class="text-center mdm:px-0 md:px-20 leading-2 text-white">
          We focus on empowering farmers through capacity building, soil Management water
          harvesting, storage, and precision irrigation training
        </p>
        <div class="btn-hero grid mt-10 place-items-center">
          <button
            class="tracking-wider py-4 text-white rounded-full cursor-pointer bg-accent2"
            @click="redirectToRegister"
          >
            Register Now
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="containerM">
    <div class="more">
      <div class="abouts smm:flex smm:flex-col-reverse md:grid lg:grid">
        <div class="left">
          <div class="intro smm:flex smm:flex-col">
            <div class="details smm:hidden lg:block xl:block">
              <h2 class="text-primaryColor text-2xl">About Us</h2>
              <h3 class="text-black">Who we are</h3>
            </div>
            <p class="p1 md:pr-2 md:-ml-0.5">
              We are a sustainable agricultural initiative addressing food security in
              rural Kenya by partnering with small holder farmers affected by climate
              change, erratic rainfall, and degraded soil. Our approach focuses on
              empowering farmers through capacity building, soil management, water
              harvesting and precision training...
            </p>
            <NuxtLink
              class="text-accent2 w-full text-center smm:my-6 smm:text-base link"
              to="/about"
            >
              Read More
            </NuxtLink>
          </div>
        </div>
        <div class="right1">
          <div class="details smm:block md:hidden">
            <h2 class="text-primaryColor">About Us</h2>
            <h3 class="text-black">Who we are</h3>
          </div>
        </div>
      </div>

      <div class="abouts bout grid smm:mt-16 mt-10 md:mt-7">
        <div class="right2">
          <h3 class="font-bold text-3xl md:-mt-7 text-center -mt-16 md:hidden">
            Our Mission
          </h3>
        </div>
        <div class="left md:pl-3.5">
          <div class="intro w-full smm:flex smm:flex-col">
            <h3 class="font-bold md:block smm:hidden md:-mt-3">Our Mission</h3>
            <p class="p2 md:pr-0 w-full mdm:text-start">
              At Hyddroo Harvest, our mission is to cultivate a resilient and sustainable
              future for small holder farmers in rural Kenya by empowering them with
              resources and financial support. <br /><br />
              Committed to combating food insecurity exacerbated by climate change,
              erratic rainfall, and degraded soil, we strive to break the cycle of
              vulnerability for 1 million smallholder farmers by 2030.
            </p>
            <NuxtLink
              class="text-accent2 smm:text-base smm:my-6 w-full md:text-start text-center xl:text-start"
              to="/about"
            >
              Read More
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="containerM">
    <div class="whatWeOffer">
      <h1 class="text-black text-center what">What we Offer</h1>
      <div
        class="grid offerCards smm:flex smm:flex-col grid-cols-1 mdm:grid-cols-2 xl:grid-cols-3 gap-8"
      >
        <WhatWeOffer
          :srcurl="capacity"
          title="Capacity Building"
          :text-body="[
            'Soil management training',
            'Water management training',
            'Precision irrigation training',
          ]"
        />
        <WhatWeOffer
          :srcurl="farm"
          title="Farm Inputs"
          :text-body="['Seeds', ' Fertilizers', ' Pesticides']"
        />
        <WhatWeOffer
          :srcurl="soil"
          title="Soil Testing"
          :text-body="['Soil analysis', ' Soil recommendation']"
        />
        <WhatWeOffer
          :srcurl="agronomist"
          title="Agronomist Services"
          :text-body="['Crop management', 'Crop protection']"
        />
        <WhatWeOffer
          :srcurl="financial"
          title="Financial Support"
          :text-body="[
            'Water harvesting equipment eg pumps',
            ' Water storage equipment eg tanks',
            ' Precision irrigation equipment eg sprinkler',
          ]"
        />
      </div>
    </div>
  </div>
  <div class="containerM last">
    <div
      class="abouth w-full md:mt-40 grid grid-cols-1 mdm:gap-8 md:gap-20 md:grid-cols-2"
    >
      <div class="right2 rounded-3xl my-8 md:my-0 w-vw h-96" />
      <div class="left md:pl-3.5">
        <div class="intro w-full smm:flex smm:flex-col">
          <h3 class="font-bold text-center md:text-start md:-mt-3">
            Tackling Climate Change
          </h3>
          <p class="p2 md:pr-0 w-full md:text-start text-center text-base">
            We are working with smallholder farmers to cope with rapid rainfall patterns,
            ensuring that they have necessary tools like water storage and harvesting
            equipment. This not only strengthens the ability to adapt to changing weather
            conditions but also plays a crucial role in eradicating hunger and promoting
            food security in vulnerable communities.
          </p>
          <NuxtLink class="text-accent2 smm:text-center" to="/about">
            Read More
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
  <section class="bg-primaryColor">
    <div class="containerM commit">
      <h1 class="text-center text-white">Our Commitment to Solving SDGs</h1>
      <div class="sgds flex md:flex-col md:gap-10">
        <div
          class="sdgtop grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-10"
        >
          <SdgCard
            :src-url="E_SDG_Icons_02"
            text="End Hunger, achieve food security, improved nutrition, and promote sustainable agriculture"
          />
          <SdgCard
            :src-url="E_SDG_Icons_04"
            text="Ensure Availability and sustainable management of water and sanitation"
          />
          <SdgCard
            :src-url="E_SDG_Icons_06"
            text="Ensure inclusive and equitable quality education, and promote lifelong learning opportunity for all smallholder farmers"
          />

          <SdgCard
            :src-url="E_SDG_Icons_08"
            text="Promote sustained, inclusive and sustainable economic growth, full and productive employement and decent work for all. especially youth and women in rural Kenya"
          />
          <SdgCard
            :src-url="E_SDG_Icons_09"
            text="Industry, Innovation & Infrastructure - - Build resilient infrastructure, promote inclusive and sustainable industrialization and foster innovation"
          />
          <SdgCard
            :src-url="E_SDG_Icons_13"
            text="Take Urgent action to combat climate change and its impacts"
          />
        </div>
      </div>
    </div>
  </section>
  <div class="containerM md:grid md:place-items-center md:my-12">
    <div class="partners">
      <h1 class="text-center text-black">Our Partners</h1>
      <p class="text-center">(Coming Soon)</p>
    </div>
    <div
      class="help bg-primaryColor w-full lg:w-10/12 rounded-3xl flex lg:flex-row flex-col md:justify-between items-center px-5 md:p-10"
    >
      <div class="left">
        <h1 class="text-white">Need Any Help Getting Started</h1>
      </div>
      <div class="right">
        <NuxtLink
          href="#contact"
          class="btn bg-accentColor px-6 py-4 rounded-3xl text-white btn-outline"
        >
          Contact Us
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import E_SDG_Icons_02 from "~/assets/images/E_SDG_Icons-02.webp";
import E_SDG_Icons_04 from "~/assets/images/E_SDG_Icons-04.webp";
import E_SDG_Icons_06 from "~/assets/images/E_SDG_Icons-06.webp";
import E_SDG_Icons_08 from "~/assets/images/E_SDG_Icons-08.webp";
import E_SDG_Icons_09 from "~/assets/images/E_SDG_Icons-09.webp";
import E_SDG_Icons_13 from "~/assets/images/E_SDG_Icons-13.webp";
import farm from "~/assets/images/farm-inputs.svg";
import soil from "~/assets/images/soil-test.svg";
import agronomist from "~/assets/images/agronomist.svg";
import financial from "~/assets/images/financial.svg";
import capacity from "~/assets/images/capacity.svg";

useHead({
  title: "Home",
});
const redirectToRegister = () => {
  navigateTo("/register");
};
</script>
<style scoped></style>
