<template>
  <nav class="navbar">
    <div class="navbar__items">
      <Link
        v-for="(item, index) in items"
        :key="index"
        :text="item.text"
        :href="item.href"
        class="navbar__link"
      />
    </div>
    <div class="navbar__items">
      <Link
        :text="loginLink.text"
        :href="loginLink.href"
        class="navbar__link"
      />
      <Button
        :text="signupButton.text"
        :href="signupButton.href"
        :isLink="true"
      />
    </div>
  </nav>
</template>

<script>
import Link from './Link';
import Button from './Button';

export default {
  name: 'Navbar',
  props: {
    items: {
      type: Array,
      required: true,
    },
    loginLink: {
      type: Object,
      required: true,
    },
    signupButton: {
      type: Object,
      required: true,
    },
  },
  components: {
    Link,
    Button,
  },
};
</script>

<style lang="scss">
.navbar {
  @include flexbox(false, center, space-between);
  font-size: 1.4rem;

  &__link {
    color: $grayish-violet;
    font-weight: 700;
    margin-right: 3.5rem;

    &:hover {
      color: $cyan;
    }
  }
}
</style>
