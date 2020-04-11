<template>
  <header class="header">
    <Container class="header__container">
      <Logo class="header__logo"></Logo>

      <div class="header__mobile-nav">
        <Hamburger
          ref="hamburger"
          aria-haspopup="true"
          :aria-expanded="isNavMenuVisible ? 'true' : 'false'"
          aria-controls="nav-menu"
          @hamburger-click="handleHamburgerClick"
        ></Hamburger>

        <transition
          name="nav-menu-fade"
          enter-class="header__nav-menu_hidden"
          leave-to-class="header__nav-menu_hidden"
        >
          <NavMenu
            ref="navMenu"
            id="nav-menu"
            class="header__nav-menu"
            v-show="isNavMenuVisible"
            :items="navItems"
            :loginLink="loginLink"
            :signupButton="signupButton"
          ></NavMenu>
        </transition>
      </div>

      <Navbar
        class="header__navbar"
        :items="navItems"
        :loginLink="loginLink"
        :signupButton="signupButton"
      ></Navbar>
    </Container>
  </header>
</template>

<script>
import Container from './Container';
import Logo from './Logo';
import Hamburger from './Hamburger';
import NavMenu from './NavMenu';
import Navbar from './Navbar';

export default {
  name: 'Header',
  components: {
    Container,
    Logo,
    Hamburger,
    NavMenu,
    Navbar,
  },
  props: {
    navItems: {
      type: Array,
      required: true,
    },
    loginLink: {
      type: Object,
      required: true,
    },
    signupButton: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isNavMenuVisible: false,
    };
  },
  methods: {
    handleHamburgerClick() {
      this.isNavMenuVisible = !this.isNavMenuVisible;

      document.addEventListener('click', this.handleDocumentClick);
    },

    handleDocumentClick(event) {
      const { hamburger, navMenu } = this.$refs;

      const isHamburger = hamburger.$el.contains(event.target);
      const isNavMenu = navMenu.$el.contains(event.target);

      if (isHamburger || isNavMenu) return;

      hamburger.reset();
      this.isNavMenuVisible = false;

      document.removeEventListener('click', this.handleDocumentClick);
    },
  },
};
</script>

<style lang="scss">
.header {
  padding: 3.5rem 0 2rem;
  position: relative;

  @include screen-sm {
    padding: 4rem 0;
  }

  @include screen-md {
    padding: 4.8rem 0;
  }

  &__container {
    @include flexbox(false, center, space-between);
  }

  &__logo {
    width: 11rem;

    @include screen-sm {
      width: auto;
      margin-top: 0.7rem;
    }
  }

  &__mobile-nav {
    @include screen-sm {
      display: none;
    }
  }

  &__nav-menu {
    position: absolute;
    top: 100%;
    right: 2.5rem;
    width: calc(100% - 5rem);
    transition: opacity 0.5s 0.2s;
    z-index: 9;

    @include tablet {
      max-width: 35rem;
    }

    &_hidden {
      opacity: 0;
    }
  }

  &__navbar {
    display: none;

    @include screen-sm {
      display: flex;
      flex-grow: 1;
      margin-left: 4.5rem;
    }
  }
}
</style>
