<template>
  <div class="services">
    <div class="containerM holder">
      <h1 class="text-black text-center">Products & Services</h1>
      <div
        class="serviceCardHolder grid smm:flex smm:flex-col lg:grid-cols-3 mdm:grid-cols-2 mdm:auto-rows-auto mdm:gap-8 lg:gap-16"
      >
        <ProductCard
          :srcurl="comprehensive"
          text-body="In-depth training modules covering soil management,water harvesting, storage, and precision irrigation techniques."
          title="Comprehensive Training programs"
        />
        <ProductCard
          :srcurl="partner"
          text-body="Facilitating partnerships with NGOs, government bodies, and other stakeholders in the agricultural sector"
          title="Partnership and Networking Opportunities"
        />
        <ProductCard
          :srcurl="data"
          text-body="-Regular monitoring and evaluation of the impact of trainingprograms and interventions"
          title="Data Analytics and Impact Assessment"
        />
        <ProductCard
          :srcurl="harvest"
          text-body="Financing and distribution of water harvesting and storage equipment, including rainwater harvesting systems, drip irrigation kits, and water storage containers"
          title="Water Harvesting and Storage Equipment"
        />
        <ProductCard
          :srcurl="workshops"
          text-body="Conducting workshops and community outreach programs toraise awareness, share knowledge, and build a sense of communityamong farmers"
          title="Community Workshops and Outreach"
        />
        <ProductCard
          :srcurl="flexible"
          text-body="Tailored financing options for smallholder farmers to acquirewater harvesting and storage equipment."
          title="Flexible Financing Solutions"
        />
        <ProductCard
          :srcurl="support"
          title="Agronomic Support Services"
          text-body="Offers personalised guidance to farmers, helpingthem implement best practices, troubleshoot issuesClimate-Smart Agriculture Consultancy"
        />

        <ProductCard
          :srcurl="consultancy"
          text-body=" Providing expertise on climate-smart agricultural practicestailored to the local context"
          title="Climate-Smart Agriculture Consultancy"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: "Our Services",
});

import comprehensive from "~/assets/images/comprehensive.svg";
import partner from "~/assets/images/partner.svg";
import data from "~/assets/images/data.svg";
import workshops from "~/assets/images/workshops.svg";
import harvest from "~/assets/images/harvest.svg";
import flexible from "~/assets/images/flexible.svg";
import support from "~/assets/images/support.svg";
import consultancy from "~/assets/images/consultancy.svg";
</script>

<style scoped></style>
