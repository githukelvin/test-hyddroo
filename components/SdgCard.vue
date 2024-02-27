<script lang="ts" setup>
const props = defineProps({
  srcUrl: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div
    class="card flex flex-col justify-center md:flex-row gap-3 xl:gap-5 items-center"
  >
    <div class="divimg w-full grid place-items-center">
      <img
        class="w-24 h-24 object-cover"
        :srcset="props.srcUrl"
        :src="props.srcUrl"
        alt=""
      />
    </div>
    <div class="details">
      <p class="text-white text-center md:text-start">
        {{ props.text }}
      </p>
    </div>
  </div>
</template>

<style scoped></style>
