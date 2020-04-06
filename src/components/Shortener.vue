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
          <Button class="shortener__button" text="Shorten It!" />
          <span v-if="error !== ''" class="shortener__error">{{ error }}</span>
        </div>
      </form>
      <div class="shortener__links" v-if="links.length !== 0">
        <div
          class="shortener__link-info"
          v-for="(link, index) in links"
          :key="index"
        >
          <div class="shortener__original-url">{{ link.url }}</div>
          <Link
            :text="link.shortenedUrl"
            :href="link.shortenedUrl"
            target="_blank"
            class="shortener__shortened-url"
            ref="links"
          />
          <Button
            class="shortener__copy-button"
            text="Copy"
            ref="copyButtons"
            @click.native="handleCopyButtonClick($event, index)"
          />
        </div>
      </div>
    </Container>
  </section>
</template>

<script>
import Container from './Container';
import Link from './Link';
import Button from './Button';

export default {
  name: 'Shortener',
  components: {
    Container,
    Link,
    Button,
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
      } else {
        this.error = 'Please add a link';
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

    handleCopyButtonClick(event, index) {
      event.preventDefault();

      const link = this.$refs.links[index].$el;

      this.copyShortenedUrl(link);
      this.toggleCopyButtonActiveClass(index);
    },

    toggleCopyButtonActiveClass(index) {
      const { copyButtons } = this.$refs;

      const activeClass = 'shortener__copy-button_active';

      copyButtons.forEach((button, buttonIndex) => {
        const copyButton = button.$el;

        const copyButtonText = copyButton.firstElementChild;

        if (buttonIndex === index) {
          copyButton.classList.add(activeClass);
          copyButtonText.innerHTML = 'Copied!';
        } else {
          const hasActiveClass = copyButton.classList.contains(activeClass);

          if (hasActiveClass) {
            copyButton.classList.remove(activeClass);
            copyButtonText.innerHTML = 'Copy';
          }
        }
      });
    },

    copyShortenedUrl(link) {
      const range = document.createRange();
      const selection = document.getSelection();

      range.selectNodeContents(link);

      selection.removeAllRanges();
      selection.addRange(range);

      document.execCommand('copy');

      selection.removeAllRanges();
    },
  },
};
</script>

<style lang="scss">
.shortener {
  padding: 4.5rem 0;
  position: relative;
  overflow: hidden;
  font-size: 1.6rem;

  @include tablet {
    padding: 2rem 0;
    font-size: 1.8rem;
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
    position: absolute;
    top: calc(100% + 0.6rem);
    left: 0;
    font-size: 1.6rem;
    font-style: italic;
    color: $red;
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

  &__links {
    display: flex;
    flex-direction: column-reverse;

    @include tablet {
      margin-top: 0.8rem;
    }
  }

  &__link-info {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 0.5rem;
    margin-top: 2.4rem;
    padding: 1.2rem 2rem 2rem;

    @include tablet {
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
      padding: 1.6rem 2.4rem 1.6rem 3.2rem;
      margin-top: 1.6rem;
    }
  }

  &__original-url {
    color: $very-dark-blue;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    padding: 0 2rem 1rem;
    margin-left: -2rem;
    width: 100%;
    border-bottom: 1px solid mix($gray, #fff, 40%);

    @include tablet {
      margin: 0;
      padding: 0;
      border: 0;
    }
  }

  &__shortened-url {
    color: $cyan;
    margin: 1rem 0;

    @include tablet {
      margin: 0 2.4rem 0 4rem;
    }

    &:hover {
      color: $grayish-violet;
    }
  }

  &__copy-button {
    font-size: 1.6rem;
    border-radius: 0.5rem;

    @include tablet {
      flex-shrink: 0;
      width: 10.3rem;
    }

    &_active {
      background-color: $dark-violet;

      &:hover {
        background-color: mix($dark-violet, #fff, 50%);
      }
    }
  }
}
</style>
