<template>
  <a :href="href" class="link">{{ text }}</a>
</template>

<script>
export default {
  name: 'Link',
  props: {
    text: {
      type: String,
      default: 'Link',
    },
    href: {
      type: String,
      default: '/mock-address/change-me',
    },
  },
};
</script>

<style lang="scss">
.link {
  text-decoration: none;
  transition: 0.5s;
}
</style>
