<template>
  <div class="nav-list">
    <Heading type="h4" class="nav-list__heading" :text="heading" />
    <ul class="nav-list__items">
      <li class="nav-list__item" v-for="(item, index) in items" :key="index">
        <Link class="nav-list__link" :href="item.href" :text="item.text" />
      </li>
    </ul>
  </div>
</template>

<script>
import Heading from './Heading';
import Link from './Link';

export default {
  name: 'NavList',
  components: {
    Heading,
    Link,
  },
  props: {
    heading: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.nav-list {
  font-size: 1.6rem;

  &__heading {
    color: #fff;
    margin-bottom: 2.2rem;
  }

  &__items {
    @include list-reset;
  }

  &__item {
    &:not(:last-child) {
      margin-bottom: 0.6rem;
    }
  }

  &__link {
    color: inherit;

    &:hover {
      color: $cyan;
    }
  }
}
</style>
