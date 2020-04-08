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
  </div>
</template>

<script>
import Header from '@components/Header';
import Intro from '@components/Intro';
import Shortener from '@components/Shortener';

import data from './data.json';

export default {
  name: 'Home',
  components: {
    Header,
    Intro,
    Shortener,
  },
  data() {
    return {
      primaryNav: data.primaryNav,
      intro: data.intro,
      features: data.features,
    };
  },
};
</script>
