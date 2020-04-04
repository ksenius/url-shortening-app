<template>
  <Link
    class="button"
    :class="type ? `button_type_${type}` : ''"
    :href="href"
    :text="text"
    v-if="isLink"
  />
  <button class="button" :class="type ? `button_type_${type}` : ''" v-else>
    <span class="button__text">{{ text }}</span>
  </button>
</template>

<script>
import Link from './Link';

export default {
  name: 'Button',
  props: {
    isLink: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
      default: 'Click me!',
    },
    href: {
      type: String,
      default: '/mock-address/change-me',
    },
    type: String,
  },
  components: {
    Link,
  },
};
</script>

<style lang="scss">
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  border: 0;
  background-color: $cyan;
  font: {
    family: inherit;
    size: inherit;
    weight: 700;
  }
  height: 4rem;
  border-radius: 2rem;
  padding: 0 2.5rem;
  box-sizing: border-box;
  transition: background-color 0.5s;
  cursor: pointer;

  &:hover {
    background-color: mix($cyan, #fff, 50%);
  }

  &_type {
    &_cta {
      font-size: 2rem;
      height: 5.6rem;
      border-radius: 2.8rem;
      padding: 0 4rem;
    }
  }
}
</style>
