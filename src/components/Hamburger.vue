<template>
  <button class="hamburger" @click.prevent="handleClick">
    <span
      class="hamburger__bars"
      :class="{ hamburger__bars_active: state === 'cross' }"
    ></span>
    <span class="sr-only">{{ text }}</span>
  </button>
</template>

<script>
export default {
  name: 'Hamburger',
  data() {
    return {
      state: 'menu',
    };
  },
  methods: {
    handleClick() {
      this.toggleState();
      this.$emit('hamburger-click');
    },

    toggleState() {
      if (this.state === 'menu') {
        this.state = 'cross';
      } else {
        this.state = 'menu';
      }
    },

    reset() {
      this.state = 'menu';
    },
  },
  computed: {
    text() {
      if (this.state === 'menu') {
        return 'Menu';
      }
      return 'Close';
    },
  },
};
</script>

<style lang="scss">
.hamburger {
  position: relative;
  width: 2.4rem;
  height: 2.5rem;
  border: 0;
  padding: 0;
  background: transparent;

  &__bars {
    position: absolute;
    left: 0;
    top: 1.1rem;
    transition: background-color 0.2s 0.2s;

    &,
    &::before,
    &::after {
      display: block;
      width: 2.4rem;
      height: 0.3rem;
      background-color: $grayish-violet;
    }

    &::before,
    &::after {
      content: '';
      position: absolute;
      transition: top 0.2s 0.2s, transform 0.4s;
    }

    &::before {
      top: -0.9rem;
    }

    &::after {
      top: 0.9rem;
    }

    &_active {
      background-color: transparent;
      transition: background-color 0.2s 0.2s;

      &::before,
      &::after {
        top: 0;
        transition: top 0.2s, transform 0.4s 0.2s;
      }

      &::before {
        transform: rotate(45deg);
      }

      &::after {
        transform: rotate(-45deg);
      }
    }
  }
}
</style>
