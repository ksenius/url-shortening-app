<template>
  <footer class="footer">
    <Container class="footer__container">
      <Logo :isWhite="true" class="footer__logo" />
      <NavList
        class="footer__nav-list"
        v-for="(navList, index) in navLists"
        :key="index"
        :heading="navList.heading"
        :items="navList.items"
        :class="`footer__nav-list_${index + 1}`"
      />
      <div class="footer__socials">
        <a
          class="footer__social-link"
          v-for="(link, index) in socials"
          :key="index"
          :href="link.url"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="footer__social-icon"
            aria-hidden="true"
          >
            <use :xlink:href="`#${link.icon}`"></use>
          </svg>
          <span class="sr-only">{{ link.name }}</span>
        </a>
      </div>
    </Container>
    <Attribution
      class="footer__attribution"
      codedBy="@ksenius"
      url="https://github.com/ksenius"
    />
  </footer>
</template>

<script>
import Container from './Container';
import Logo from './Logo';
import NavList from './NavList';
import Attribution from './Attribution';

export default {
  name: 'Footer',
  components: {
    Container,
    Logo,
    NavList,
    Attribution,
  },
  props: {
    navLists: Array,
    socials: Array,
  },
};
</script>

<style lang="scss">
.footer {
  position: relative;
  background: $very-dark-violet;
  padding: 5.5rem 0;

  @include screen-sm {
    padding: 7.1rem 0;
  }

  &__container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas:
      'logo'
      'nav1'
      'nav2'
      'nav3'
      'socials';
    row-gap: 5rem;

    @include tablet {
      grid-template-columns: 1.5fr repeat(3, 1fr);
      grid-template-areas:
        'logo nav1 nav2 nav3'
        'socials nav1 nav2 nav3';
      gap: 0 3.2rem;
    }

    @include screen-sm {
      grid-template-columns: 2fr repeat(3, 1fr) 18rem;
      grid-template-areas: 'logo nav1 nav2 nav3 socials';
    }
  }

  &__logo {
    grid-area: logo;
    justify-self: center;

    @include tablet {
      justify-self: stretch;
    }
  }

  &__nav-list {
    text-align: center;

    @include tablet {
      text-align: left;
    }

    @include screen-md {
      margin-top: 0.4rem;
      margin-left: 2.5rem;
    }

    &_1 {
      grid-area: nav1;
    }

    &_2 {
      grid-area: nav2;
    }

    &_3 {
      grid-area: nav3;
    }
  }

  &__socials {
    grid-area: socials;
    @include flexbox(false, null, center);

    @include tablet {
      justify-content: flex-start;
      align-self: end;
    }

    @include screen-sm {
      justify-content: flex-end;
      align-self: start;
      margin-top: 0.2rem;
    }
  }

  &__social-link {
    display: block;
    width: 2.4rem;
    height: 2.4rem;
    text-decoration: none;

    &:not(:last-child) {
      margin-right: 2rem;

      @include screen-md {
        margin-right: 2.4rem;
      }
    }
  }

  &__social-icon {
    width: 100%;
    height: 100%;
    fill: #fff;
    transition: 0.5s;
  }

  &__social-link:hover &__social-icon {
    fill: $cyan;
  }

  &__attribution {
    position: absolute;
    bottom: 0.5rem;
    width: 100%;
    text-align: center;
  }
}
</style>
