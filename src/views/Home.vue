<template>
  <div>
    <Header
      :navItems="primaryNav.items"
      :loginLink="primaryNav.loginLink"
      :signupButton="primaryNav.signupButton"
    />
    <Intro
      :headingText="intro.heading"
      :text="intro.text"
      :buttonText="intro.buttonText"
    />
  </div>
</template>

<script>
import Header from '@components/Header';
import Intro from '@components/Intro';

export default {
  name: 'Home',
  components: {
    Header,
    Intro,
  },
  data() {
    return {
      primaryNav: {
        items: [
          {
            text: 'Features',
          },
          {
            text: 'Pricing',
          },
          {
            text: 'Resources',
          },
        ],
        loginLink: {
          text: 'Login',
        },
        signupButton: {
          text: 'Sign Up',
        },
      },
      intro: {
        heading: 'More than just shorter links',
        text:
          'Build your brand’s recognition and get detailed insights on how your links are performing.',
        buttonText: 'Get Started',
      },
    };
  },
};
</script>
