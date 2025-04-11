<template>
  <section class="faq-section">
    <div class="section-wrapper">
      <h2>
        {{ $t('faq_heading') }}
      </h2>

      <div v-for="faq, index in 8" :key="index" class="faq closed" @click="(e) => handleClick(e)">
        <h3 class="faq-question">
          {{ $t(`faq_${faq}`) }}

          <img src="/images/arrow-faq.png" alt="arrow pointing faq article">
        </h3>
        <p class="faq-answer">
          {{ $t(`faq_${faq}_`) }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
const handleClick = ({ target: { parentNode } }) => {
  Array.from(document.querySelectorAll('.faq')).forEach(faq => {
    if (faq != parentNode) {
      faq.classList.add('closed')
    }
  })
  parentNode.classList.toggle('closed')
}
</script>

<style lang="scss">
.faq-section {
  position: relative;

  &::before {
    position: absolute;
    z-index: -1;
    top: -2px;
    left: 0;
    content: '';
    width: 100%;
    height: calc(100% + 4px);
    background: var(--color-dimmed);
  }

  @media (orientation: landscape) {
    padding-inline: 1.5rem;
  }

  @media (orientation: portrait) {
    padding-inline: 1rem;
  }

  .section-wrapper {
    background: var(--color-red-gray50);
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    padding-top: 3rem;

    @media (orientation: landscape) {
      padding-inline: 1.5rem;
      border-radius: 3.5rem;
      padding-bottom: 5rem;
    }

    @media (orientation: portrait) {
      padding-inline: 1rem;
      border-radius: 2.5rem;
      padding-bottom: 3rem;
    }

    h2 {
      font-size: 4rem;
      font-family: 'Unbounded';
    }

    .faq {
      text-align: left;
      line-height: 2;
      overflow: hidden;
      padding-inline: 3rem;

      position: relative;

      &:not(:last-child) {
        border-bottom: 1px solid transparent;
      }

      &:not(:last-child)::after {
        position: absolute;
        content: '';
        width: calc(100% - 7rem);
        bottom: 0;
        border-bottom: 1px solid var(--color-grey);
      }

      @media (orientation: landscape) {
        max-width: 80ch;
      }

      @media (orientation: portrait) {}

      &.closed .faq-answer {
        height: 0;
        padding: 0;
      }
    }

    .faq:not(.closed) {
      .faq-answer {
        height: auto;
        padding-bottom: 2rem;
      }

      img {
        transform: rotate(-90deg);
      }
    }

    .faq-question {
      font-weight: bolder;
      font-size: 1.75rem;
      cursor: pointer;
      display: flex;
      gap: 2rem;
      width: 100%;
      justify-content: space-between;

      padding-block: 2rem;

      img {
        width: 1.5rem;
        height: 1.5rem;
        position: relative;
        top: 1rem;
        right: 1rem;
        transition: transform 333ms;
      }
    }

    .faq-answer {
      font-size: 1.5rem;
      transition: height 333ms, padding 333ms;
    }

    .faq-question,
    .faq-answer {
      text-wrap: balance;
    }
  }
}
</style>