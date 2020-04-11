<template>
  <div class="links-list">
    <transition-group
      tag="div"
      class="links-list__inner"
      name="links-list-insert-item"
      enter-class="links-list__item_hidden"
      enter-active-class="links-list__item_active"
      move-class="links-list__item_move"
    >
      <div
        class="links-list__item"
        v-for="(link, index) in links"
        :key="+index"
      >
        <div class="links-list__original-link">{{ link.url }}</div>
        <Link
          :text="link.shortenedUrl"
          :href="link.shortenedUrl"
          target="_blank"
          class="links-list__shortened-link"
          ref="links"
        />
        <Button
          class="links-list__button"
          text="Copy"
          ref="buttons"
          @click.native="handleButtonClick($event, index)"
        />
      </div>
    </transition-group>
  </div>
</template>

<script>
import Link from './Link';
import Button from './Button';

export default {
  name: 'LinksList',
  components: {
    Link,
    Button,
  },
  props: {
    links: {
      type: Array,
      required: true,
    },
  },
  methods: {
    handleButtonClick(event, index) {
      event.preventDefault();

      const link = this.$refs.links[index].$el;

      this.copyShortenedUrl(link);
      this.toggleButtonActiveClass(index);
    },

    toggleButtonActiveClass(linkIndex) {
      const { buttons } = this.$refs;

      const activeClass = 'links-list__button_active';

      buttons.forEach((button, buttonIndex) => {
        const buttonText = button.$el.firstElementChild;

        if (buttonIndex === linkIndex) {
          button.$el.classList.add(activeClass);
          buttonText.innerHTML = 'Copied!';
        } else {
          const hasActiveClass = button.$el.classList.contains(activeClass);

          if (hasActiveClass) {
            button.$el.classList.remove(activeClass);
            buttonText.innerHTML = 'Copy';
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
.links-list {
  &__inner {
    display: flex;
    flex-direction: column-reverse;
  }

  &__item {
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

    &_hidden {
      opacity: 0;
    }

    &_active {
      transition: opacity 0.5s 0.5s;
    }

    &_move {
      transition: all 0.5s;
    }
  }

  &__original-link {
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

  &__shortened-link {
    color: $cyan;
    margin: 1rem 0;

    @include tablet {
      min-width: 22rem;
      text-align: right;
      margin: 0 2.4rem;
    }

    @include screen-sm {
      min-width: 25rem;
    }

    &:hover {
      color: $grayish-violet;
    }
  }

  &__button {
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
