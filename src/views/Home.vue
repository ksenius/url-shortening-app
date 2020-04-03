<template>
  <div>
    <Header
      :navItems="primaryNav.items"
      :loginLink="primaryNav.loginLink"
      :signupButton="primaryNav.signupButton"
    ></Header>
  </div>
</template>

<script>
import Header from '@components/Header';

export default {
  name: 'Home',
  components: {
    Header,
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
    };
  },
};
</script>
