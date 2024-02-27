import { useAssetPath } from '~/composables/useAssetPath';
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
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div
    class="divbody grid place-items-center py-10 lg:py-20 gap-4 lg:px-12 bg-primaryColor"
  >
    <img
      :src="props.srcurl"
      :srcset="props.srcurl"
      alt="Capacity"
      class="img-capacity"
    />
    <h1 class="">
      {{ props.title }}
    </h1>
    <div class="list flex flex-col gap-3">
      <p
        v-for="(item, index) in props.textBody"
        :key="index"
        class="text-white px-4 text-center"
      >
        {{ item }}
      </p>
    </div>
  </div>
</template>

<style scoped></style>
