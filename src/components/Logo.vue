<template>
  <div class="logo">
    <a href="/" title="Shortly - URL shortening app">
      <img class="logo__img" :src="image" alt="Shortly logo" />
    </a>
  </div>
</template>

<script>
import image from '@images/logo.svg';

export default {
  name: 'Logo',
  data() {
    return {
      image,
    };
  },
};
</script>

<style lang="scss">
.logo {
  &__img {
    display: block;
    max-width: 100%;
    height: auto;
  }
}
</style>
