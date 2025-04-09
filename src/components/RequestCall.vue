<template>
  <form action="" class="request-call">
    <label for="phone">
      <small>{{ $t('services_6__') }}: 123-456-789</small>
    </label>

    <div class="inputs">
      <input
        id="phone"
        type="tel"
        name="phone"
        pattern="[0-9]{3}[0-9]{3}[0-9]{3}"
        required
      />

      <button type="submit">
        {{ $t('services_6___') }}

        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_3038_74)">
          <path d="M18.7838 16.9925L18.0104 6.45221M18.0104 6.45221L7.47013 5.67882M18.0104 6.45221L5.98963 18.473" stroke="#F8FAFC" stroke-width="2"/>
          </g>
          <defs>
          <clipPath id="clip0_3038_74">
          <rect width="24" height="24" fill="white" transform="translate(0 0.962891)"/>
          </clipPath>
          </defs>
        </svg>
      </button>
    </div>

  </form>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.request-call {
  .inputs {
    display: flex;
  }

  input, button {
    padding: 0.25rem;
    width: 50%;
    height: 5rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  input {
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-color: transparent;

    &:focus,
    &:focus-visible {
      outline: none;
      border-color: var(--color-red-light);
    }
  }

  button {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
    border-color: transparent;
    background: var(--color-light);
    color: white;

    &:focus,
    &:focus-visible {
      outline: none;
      border-color: var(--color-light);
    }

    svg {
      align-self: start;
      justify-self: end;
    }

    @media (orientation: portrait) and (min-width: 768px) {
      position: relative;

      svg {
        position: absolute;
        width: 1.5rem;
        height: 1.5rem;
        top: 0.5rem;
        right: 0.5rem;
      }
    }
  }
}
</style>