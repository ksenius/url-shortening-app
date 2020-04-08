<template>
  <div>
    <Header
      :navItems="primaryNav.items"
      :loginLink="primaryNav.loginLink"
      :signupButton="primaryNav.signupButton"
    />
    <Intro
      :heading="intro.heading"
      :text="intro.text"
      :buttonText="intro.buttonText"
    />
    <Shortener />
    <Features
      :heading="features.heading"
      :text="features.text"
      :cards="features.cards"
    />
    <Cta :heading="cta.heading" />
  </div>
</template>

<script>
import Header from '@components/Header';
import Intro from '@components/Intro';
import Shortener from '@components/Shortener';
import Features from '@components/Features';
import Cta from '@components/Cta';

import data from './data.json';

export default {
  name: 'Home',
  components: {
    Header,
    Intro,
    Shortener,
    Features,
    Cta,
  },
  data() {
    return {
      primaryNav: data.primaryNav,
      intro: data.intro,
      features: data.features,
      cta: data.cta,
    };
  },
};
</script>
