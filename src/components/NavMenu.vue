<template>
  <nav class="nav-menu">
    <div class="nav-menu__items">
      <Link
        v-for="(item, index) in items"
        :key="index"
        :text="item.text"
        :href="item.href"
        class="nav-menu__link"
      />
    </div>
    <div class="nav-menu__items nav-menu__items_bottom">
      <Link
        :text="loginLink.text"
        :href="loginLink.href"
        class="nav-menu__link"
      />
      <Button
        :text="signupButton.text"
        :href="signupButton.href"
        :isLink="true"
        class="nav-menu__button"
      />
    </div>
  </nav>
</template>

<script>
import Link from './Link';
import Button from './Button';

export default {
  name: 'NavMenu',
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
.nav-menu {
  background: $dark-violet;
  padding: 3rem 2.5rem;
  box-sizing: border-box;
  border-radius: 1rem;

  &__items {
    @include flexbox(true, center);

    &_bottom {
      padding-top: 1.5rem;
      margin-top: 1.5rem;
      border-top: 1px solid mix($dark-violet, #fff, 85%);
    }
  }

  &__link {
    color: #fff;
    font-weight: 700;
    padding: 0.5rem 1rem;
    margin: 1rem 0;

    &:hover {
      color: $cyan;
    }
  }

  &__button {
    margin-top: 1rem;
    width: 100%;
    height: 4.8rem;
    border-radius: 2.4rem;
  }
}
</style>
