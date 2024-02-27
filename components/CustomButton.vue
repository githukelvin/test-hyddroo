<template>
  <div>
    <button
      id="kt_sign_in_submit"
      ref="submitButton"
      tabindex="5"
      type="submit"
      class="bg-accentColor cursor-pointer text-white font-medium py-3 px-6 rounded-lg"
    >
      {{ props.val }}
    </button>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  val: {
    type: String,
    required: true,
    default: "submit",
  },
});
</script>

<style scoped></style>
