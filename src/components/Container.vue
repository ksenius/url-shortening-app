<template>
  <div class="container" :class="type ? `container_type_${type}` : ''">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Container',
  props: {
    type: String,
  },
};
</script>

<style lang="scss">
.container {
  width: calc(100% - 5rem);
  max-width: 111rem;
  margin: 0 auto;

  &_type {
    &_flex-row {
      @include flexbox(true, center);

      @include tablet {
        flex-direction: row-reverse;
        justify-content: space-between;
      }
    }
  }
}
</style>
