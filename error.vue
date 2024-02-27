<template>
  <div class="containerM error">
    <div class="flex flex-col items-center justify-center h-screen">
      <img src="~/assets/images/404 error-large.webp" alt="error 404" />

      <p class="text-center">
        We are sorry for the inconvenience. It looks like you are trying to
        access a <br />
        page that has been deleted or never existed.
      </p>

      <button
        class="bg-accentColor cursor-pointer text-white py-4 px-6 rounded-3xl"
        @click="handleError"
      >
        Back to Homepage
      </button>
    </div>
  </div>
</template>
<script setup>
// const error = useError();
useHead({
  title: "Page Not Found",
});

const handleError = () => {
  clearError({
    redirect: "/",
  });
};
</script>
