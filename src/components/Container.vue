<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Container',
};
</script>

<style lang="scss">
.container {
  width: calc(100% - 5rem);
  max-width: 111rem;
  margin: 0 auto;
}
</style>
