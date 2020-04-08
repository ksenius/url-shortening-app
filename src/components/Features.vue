<template>
  <section class="features">
    <Container>
      <div class="features__description">
        <Heading type="h2" :text="heading" />
        <p class="features__text">{{ text }}</p>
      </div>

      <div class="features__cards">
        <FeatureCard
          class="features__card"
          v-for="(card, index) in cards"
          :key="index"
          :heading="card.heading"
          :text="card.text"
          :icon="card.icon"
          :class="`features__card_${index + 1}`"
        />
      </div>
    </Container>
  </section>
</template>

<script>
import Container from './Container';
import Heading from './Heading';
import FeatureCard from './FeatureCard';

export default {
  name: 'Features',
  components: {
    Container,
    Heading,
    FeatureCard,
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
    cards: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.features {
  background: $gray-bgr;
  padding: 3rem 0 8rem;

  @include tablet {
    padding-top: 5rem;
  }

  @include screen-sm {
    padding: 8rem 0 12rem;
  }

  &__description {
    text-align: center;
    max-width: 54rem;
    margin: 0 auto;
  }

  &__text {
    margin: 1.8rem 0;
  }

  &__cards {
    position: relative;
    margin-top: 4.5rem;

    @include screen-sm {
      display: flex;
      margin-top: 5.5rem;
    }

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      display: block;
      width: 0.9rem;
      height: 100%;
      background: $cyan;

      @include screen-sm {
        width: 100%;
        height: 0.9rem;
        top: 50%;
        left: 0;
        transform: translate(0, -50%);
      }
    }
  }

  &__card {
    z-index: 1;

    @include screen-sm {
      flex-basis: 33.33%;
      &:not(:last-child) {
        margin-right: 3rem;
      }
    }

    &_2 {
      margin: 4.4rem 0;
    }

    &_3 {
      align-self: flex-end;
    }
  }
}
</style>
