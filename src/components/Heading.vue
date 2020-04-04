<template>
  <h1 class="heading heading_type_h1" v-if="type === 'h1'">{{ text }}</h1>
  <h2 class="heading heading_type_h2" v-else-if="type === 'h2'">{{ text }}</h2>
  <h3 class="heading heading_type_h3" v-else-if="type === 'h3'">{{ text }}</h3>
  <h4 class="heading heading_type_h4" v-else-if="type === 'h4'">{{ text }}</h4>
  <h5 class="heading heading_type_h5" v-else-if="type === 'h5'">{{ text }}</h5>
  <h6 class="heading heading_type_h6" v-else-if="type === 'h6'">{{ text }}</h6>
</template>

<script>
export default {
  name: 'Heading',
  props: {
    type: {
      type: String,
      required: true,
    },
    text: String,
  },
};
</script>

<style lang="scss">
.heading {
  color: $very-dark-blue;
  margin: 0;
  line-height: 1.125;

  &_type {
    &_h1 {
      font-size: 4rem;

      @include tablet {
        font-size: 4.8rem;
      }

      @include screen-sm {
        font-size: 6.4rem;
      }

      @include screen-md {
        font-size: 8rem;
        letter-spacing: -0.2rem;
      }
    }
  }
}
</style>
