<template>
  <div class="feature-card">
    <div class="feature-card__icon-wrapper">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="feature-card__icon"
        aria-hidden="true"
      >
        <use :xlink:href="`#${icon}`"></use>
      </svg>
    </div>
    <div class="feature-card__content">
      <Heading type="h3" :text="heading" />
      <p class="feature-card__text">{{ text }}</p>
    </div>
  </div>
</template>

<script>
import Heading from './Heading';

export default {
  name: 'FeatureCard',
  components: {
    Heading,
  },
  props: {
    heading: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.feature-card {
  position: relative;
  padding-top: 4.4rem;

  &__icon-wrapper {
    @include flexbox(false, center, center);
    width: 8.8rem;
    height: 8.8rem;
    background: $dark-violet;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;

    @include screen-sm {
      left: 3.2rem;
      transform: none;
    }
  }

  &__icon {
    fill: $cyan;
    width: 4rem;
    height: 4rem;
  }

  &__content {
    background: #fff;
    padding: 8.1rem 3.2rem 3.9rem;
    border-radius: 0.5rem;
    font-size: 1.5rem;
    line-height: 1.74;
    text-align: center;

    @include screen-sm {
      text-align: left;
    }
  }

  &__text {
    margin: 1.9rem 0 0;
  }
}
</style>
