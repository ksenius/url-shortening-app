<template>
  <section class="intro">
    <Container class="intro__container">
      <div class="intro__content">
        <div class="intro__img-wrapper">
          <img :src="image" alt class="intro__img" />
        </div>
      </div>
      <div class="intro__content intro__description">
        <Heading class="intro__title" type="h1" :text="heading" />
        <p class="intro__text">{{ text }}</p>
        <Button
          type="cta"
          :isLink="true"
          :text="buttonText"
          :href="buttonUrl"
        />
      </div>
    </Container>
  </section>
</template>

<script>
import image from '@images/illustration-working.svg';
import Container from './Container';
import Heading from './Heading';
import Button from './Button';

export default {
  name: 'Intro',
  components: {
    Container,
    Heading,
    Button,
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
    buttonText: {
      type: String,
      default: 'Get Started',
    },
    buttonUrl: String,
  },
  data() {
    return {
      image,
    };
  },
};
</script>

<style lang="scss">
.intro {
  padding: 0 0 3rem;
  overflow-x: hidden;

  @include screen-md {
    padding-top: 3rem;
  }

  &__container {
    @include flexbox(true, center);

    @include tablet {
      flex-direction: row-reverse;
    }
  }

  &__img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  &__content {
    text-align: center;
    width: 100%;
    height: 100%;

    @include tablet {
      text-align: left;
    }
  }

  &__img-wrapper {
    width: 152%;

    @include media(534px, 767px) {
      margin-left: calc(100% - 48.3rem);
    }

    @include media(1075px) {
      margin-left: calc(100% - 48.3rem);
    }

    @include media(1280px) {
      margin-left: 8.5rem;
    }
  }

  &__description {
    max-width: 45rem;

    @include tablet {
      flex-shrink: 0;
      max-width: 50%;
      margin-right: 2rem;
    }

    @include screen-sm {
      margin-right: 3rem;
    }

    @include screen-md {
      flex-shrink: 0;
      width: 58rem;
      max-width: none;
      margin-right: 0;
    }
  }

  &__title {
    margin-top: 4rem;

    @include tablet {
      margin: 0;
    }
  }

  &__text {
    margin: 1rem 0 2.5rem;
    font-size: 1.8rem;

    @include screen-sm {
      margin-bottom: 3rem;
    }

    @include screen-md {
      font-size: 2.1rem;
      letter-spacing: 0.065rem;
      margin-top: 0;
      margin-bottom: 3.5rem;
    }
  }
}
</style>
