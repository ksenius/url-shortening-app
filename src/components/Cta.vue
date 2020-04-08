<template>
  <section class="cta">
    <Container>
      <Heading type="h2" class="cta__heading" :text="heading" />
      <Button type="cta" :isLink="true" :text="buttonText" :href="buttonUrl" />
    </Container>
  </section>
</template>

<script>
import Container from './Container';
import Heading from './Heading';
import Button from './Button';

export default {
  name: 'Cta',
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
    buttonText: {
      type: String,
      default: 'Get Started',
    },
    buttonUrl: String,
  },
};
</script>

<style lang="scss">
.cta {
  padding: 9rem 0;
  text-align: center;
  background-color: $dark-violet;
  background-image: url('../assets/images/bg-boost-mobile.svg');
  background-repeat: no-repeat;
  background-size: cover;

  @include tablet {
    padding: 6.3rem 0 5.7rem;
    background-image: url('../assets/images/bg-boost-desktop.svg');
  }

  &__heading {
    color: #fff;
    margin-bottom: 2.5rem;

    @include screen-sm {
      margin-bottom: 2.9rem;
    }
  }
}
</style>
