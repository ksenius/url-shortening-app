<template>
  <div class="attribution">
    Challenge by
    <Link
      class="attribution__link"
      text="Frontend Mentor"
      href="https://www.frontendmentor.io?ref=challenge"
      target="_blank"
      rel="noreferrer"
    />. Coded by
    <Link
      class="attribution__link"
      :text="codedBy"
      :href="url"
      target="_blank"
      rel="noreferrer"
    />.
  </div>
</template>

<script>
import Link from './Link';

export default {
  name: 'Attribution',
  components: {
    Link,
  },
  props: {
    codedBy: String,
    url: String,
  },
};
</script>

<style lang="scss">
.attribution {
  font-size: 1.1rem;

  &__link {
    color: hsl(228, 45%, 44%);

    &:hover {
      color: $cyan;
    }
  }
}
</style>
