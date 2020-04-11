<template>
  <section class="shortener">
    <Container>
      <form class="shortener__form" @submit.prevent="handleFormSubmit">
        <div class="shortener__form-inner">
          <label for="url" class="sr-only"></label>
          <input
            id="url"
            type="text"
            class="shortener__input"
            placeholder="Shorten a link here..."
            v-model="url"
            @input="error = ''"
            :class="error !== '' ? 'shortener__input_type_error' : ''"
          />
          <div v-if="error !== ''" class="shortener__error">{{ error }}</div>
          <Button class="shortener__button" text="Shorten It!" />
        </div>
      </form>
      <LinksList class="shortener__links-list" :links="links" />
    </Container>
  </section>
</template>

<script>
import Container from './Container';
import Button from './Button';
import LinksList from './LinksList';

export default {
  name: 'Shortener',
  components: {
    Container,
    Button,
    LinksList,
  },
  data() {
    return {
      url: '',
      error: '',
      links: [],
    };
  },
  mounted() {
    const savedLinks = localStorage.getItem('links');

    if (savedLinks) {
      try {
        this.links = JSON.parse(savedLinks);
      } catch (error) {
        localStorage.removeItem('links');
      }
    }
  },
  methods: {
    handleFormSubmit() {
      let url = this.url.trim().toLowerCase();

      const isValidUrl = this.validateUrl(url);
      const hasProtocol = this.checkUrlProtocol(url);

      if (isValidUrl) {
        if (!hasProtocol) url = `http://${url}`;

        this.shortenUrl(url);
      } else if (this.url === '') {
        this.error = 'Please add a link';
      } else {
        this.error = 'Please enter a valid URL';
      }
    },

    validateUrl(url) {
      const urlRegexp = /^(https?:\/\/)?[\w.-]+\.[a-z]{2,}(\/?|(\/[\w.?#$%&=-]+\/?)*)$/;
      return urlRegexp.test(url);
    },

    checkUrlProtocol(url) {
      const protocolRegexp = /^https?:\/\//;
      return protocolRegexp.test(url);
    },

    async shortenUrl(url) {
      try {
        const response = await fetch('https://rel.ink/api/links/', {
          method: 'POST',
          body: JSON.stringify({ url }),
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
          },
        });

        const result = await response.json();

        const shortenedUrl = `https://rel.ink/${result.hashid}`;

        const link = { url, shortenedUrl };

        this.url = '';
        this.addNewLink(link);
      } catch (error) {
        console.error(error);
      }
    },

    addNewLink(link) {
      this.links.push(link);
      this.saveLinks();
    },

    saveLinks() {
      const links = JSON.stringify(this.links);
      localStorage.setItem('links', links);
    },
  },
};
</script>

<style lang="scss">
.shortener {
  padding: 4.5rem 0;
  position: relative;
  overflow: hidden;

  @include tablet {
    padding: 2rem 0;
  }

  @include screen-sm {
    padding: 3.8rem 0;
    font-size: 2rem;
  }

  &::after {
    content: '';
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    top: 12.5rem;
    background-color: $gray-bgr;
    z-index: -1;

    @include screen-sm {
      top: 12.2rem;
    }
  }

  &__form {
    padding: 2.4rem;
    background-color: $dark-violet;
    background-image: url('../assets/images/bg-shorten-mobile.svg');
    background-repeat: no-repeat;
    background-position: top right;
    border-radius: 1rem;

    @include tablet {
      padding: 5.2rem 6.4rem;
      background-image: url('../assets/images/bg-shorten-desktop.svg');
      background-position: center;
    }
  }

  &__form-inner {
    position: relative;

    @include tablet {
      display: flex;
    }
  }

  &__error {
    font-style: italic;
    font-size: 1.4rem;
    color: $red;
    margin-top: 0.2rem;

    @include tablet {
      position: absolute;
      margin-top: 0;
      top: calc(100% + 0.6rem);
      left: 0;
      font-size: 1.6rem;
    }
  }

  &__input {
    width: 100%;
    height: 4.8rem;
    padding: 0 1.7rem;
    border: 0.3rem solid #fff;
    border-radius: 0.5rem;
    box-sizing: border-box;
    font: inherit;
    color: inherit;

    &::placeholder {
      color: $grayish-violet;
    }

    @include tablet {
      width: auto;
      flex-grow: 1;
      margin-right: 2.4rem;
    }

    @include screen-sm {
      height: 6.4rem;
      padding: 0.3rem 3.2rem 0;
      border-radius: 1rem;
    }

    &_type_error {
      border-color: $red;
    }
  }

  &__button {
    width: 100%;
    height: 4.8rem;
    border-radius: 0.5rem;
    margin-top: 1.6rem;
    font-size: 1.8rem;

    @include tablet {
      width: auto;
      margin-top: 0;
    }

    @include screen-sm {
      height: 6.4rem;
      padding: 0 4.1rem;
      border-radius: 1rem;
      font-size: 2rem;
    }
  }

  &__links-list {
    @include tablet {
      margin-top: 0.8rem;
    }
  }
}
</style>
