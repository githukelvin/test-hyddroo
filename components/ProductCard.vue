<template>
  <div
    class="card w-full bg-gray rounded-3xl flex flex-col gap-3 p-6 items-center justify-center"
  >
    <img :src="props.srcurl" :alt="props.title" />
    <h2 class="text-primaryColor text-center">
      {{ props.title }}
    </h2>
    <p class="text-center text-black2">
      {{ props.textBody }}
    </p>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps({
  srcurl: {
    type: String,
    required: true,
    default: "",
  },
  title: {
    type: String,
    required: true,
  },
  textBody: {
    type: String,
    required: true,
  },
});
</script>

<style scoped></style>
