<template>
  <div class="logo">
    <a href="/" title="Shortly - URL shortening app">
      <img
        v-if="isWhite"
        class="logo__img"
        :src="whiteImage"
        alt="Shortly logo"
      />
      <img v-else class="logo__img" :src="image" alt="Shortly logo" />
    </a>
  </div>
</template>

<script>
import image from '@images/logo.svg';
import whiteImage from '@images/logo-white.svg';

export default {
  name: 'Logo',
  props: {
    isWhite: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      image,
      whiteImage,
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
