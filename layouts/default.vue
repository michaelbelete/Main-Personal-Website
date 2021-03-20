<template>
  <div>
    <navbar />
    <Nuxt />
    <my-footer />
  </div>
</template>
<script>
import navbar from "~/components/navbar";
import footer from '~/components/footer'
export default {
  components: {
    navbar,
    "my-footer": footer
  },
};
</script>
