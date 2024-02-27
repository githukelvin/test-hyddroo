<template>
  <div class="about">
    <div class="containerM flex flex-col justify-center">
      <div class="aboutContent">
        <div class="top grid smm:flex smm:flex-col-reverse">
          <div class="left">
            <div class="details smm:hidden">
              <h2 class="text-primaryColor">About Us</h2>
              <h3 class="text-black">Who we are</h3>
            </div>
            <p>
              We are a sustainable agricultural initiative addressing food security in
              rural Kenya by partnering with small holder farmers affected by climate
              change, erratic rainfall, and degraded soil. Our approach focuses on
              empowering farmers through capacity building, soil management, water
              harvesting and precision training. Additionally, we offer financing for
              water harvesting and storage equipment to support year-round cultivation.
            </p>
          </div>
          <div class="right">
            <div class="details md:hidden">
              <h2 class="text-primaryColor">About Us</h2>
              <h3 class="text-black">Who we are</h3>
            </div>
          </div>
        </div>
        <div class="last lg:place-content-center flex flex-col">
          <div class="bottom grid lg:place-content-center">
            <div class="right">
              <div class="details md:hidden">
                <h3 class="text-black md:hidden">Our Mission</h3>
              </div>
            </div>
            <div class="left">
              <div class="details">
                <h3 class="text-black smm:hidden">Our Mission</h3>
              </div>
              <p>
                At Hyddroo Harvest, our mission is to cultivate a resilient and
                sustainable future for small holder farmers in rural Kenya by empowering
                them with resources and financial support. Committed to combating food
                insecurity exacerbated by climate change, erratic rainfall, and degraded
                soil, we strive to break the cycle of vulnerability for 1 million
                smallholder farmers by 2030. Through comprehensive training in soil
                management, water harvesting, soil, and precision irrigation, coupled with
                accesible financing for essential equipment, we aim .
              </p>
            </div>
          </div>
          <p class="plast">
            to uplift farmers enabling year-round crop cultivations and improved
            livelihoods. By fostering community collaboration and embracing climate-mart
            agriculture, our mission is not only to enhance food security but also create
            a positive impact on the environment and the well-being of the communities we
            serve. At hyddroo Harvest, we believe in sustainable growth, resilience, and
            shared prosperity, envisioning a future where smallholder farmers thrive and
            agriculture becomes a force for positive change.
          </p>
        </div>
      </div>
      <div class="goalsObjectives">
        <h3 class="text-center text-primaryColor">Goals & Objectives</h3>
        <h2 class="text-center text-black mt-3">What we Want to Achieve</h2>
        <div class="Achieves smm:flex smm:flex-col grid lg:place-content-center">
          <div class="left grid">
            <AchieveCard
              :srcurl="natural"
              title="Enhance Agricultural Practices"
              text-body="Introduce climate-smart agricultural practices in 80% of trained farmers’ fields, promoting resilience to erratic weather patterns and improving overall crop yields"
            />
            <div class="mid">
              <AchieveCard
                :srcurl="foster"
                title="Foster Community Collaboration and Sustainability"
                text-body="Collaborate with farmer cooperatives to encourage shared resources, knowledge exchange and collective decision-making among smallholder farmers, leading to improved community resilience"
              />
            </div>
          </div>
          <AchieveCard
            :srcurl="water"
            title="Expand Access to Water Harvesting  Infrastructure"
            text-body="Conduct workshops on proper usage and maintenance of water harvesting equipment, ensuring long - term functionality and sustainability"
          />
        </div>
      </div>
      <div class="growingFast">
        <h1 class="text-center text-black">Growing Fast</h1>
        <p class="text-center text-gray">(Stats Coming Soon)</p>
      </div>
      <div class="customerReviews">
        <h2 class="text-center text-primaryColor">Customer Reviews</h2>
        <h1 class="text-center text-black">What Customers Say About us</h1>
        <p class="text-center text-gray">(Coming Soon)</p>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
useHead({
  title: "About Us",
});
import water from "~/assets/images/water.svg";
import natural from "~/assets/images/natural.svg";
import foster from "~/assets/images/foster.svg";
</script>

<style scoped></style>
