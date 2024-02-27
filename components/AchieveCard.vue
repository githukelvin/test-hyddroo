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
    type: String,
    required: true,
  },
});
</script>

<template>
  <div
    class="divbody grid place-items-center py-10 mdm:px-4 smm:px-4 gap-4 px-8 bg-primaryColor"
  >
    <img :src="props.srcurl" :srcset="props.srcurl" alt="Capacity" class="img-capacity" />
    <h1 class="text-center mdm:text-2xl smm:text-xl leading-6">
      {{ props.title }}
    </h1>
    <div class="">
      <p class="text-white px-4 text-center mdm:px-0 smm:text-xl mdm:text-2xl">
        {{ textBody }}
      </p>
    </div>
  </div>
</template>

<style scoped></style>
