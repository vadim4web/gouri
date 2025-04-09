<template>
  <form class="email-form">
    <label for="email" class="email">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 5V4C2.73478 4 2.48043 4.10536 2.29289 4.29289C2.10536 4.48043 2 4.73478 2 5H3ZM21 5H22C22 4.73478 21.8946 4.48043 21.7071 4.29289C21.5196 4.10536 21.2652 4 21 4V5ZM3 6H21V4H3V6ZM20 5V17H22V5H20ZM19 18H5V20H19V18ZM4 17V5H2V17H4ZM5 18C4.73478 18 4.48043 17.8946 4.29289 17.7071C4.10536 17.5196 4 17.2652 4 17H2C2 17.7956 2.31607 18.5587 2.87868 19.1213C3.44129 19.6839 4.20435 20 5 20V18ZM20 17C20 17.2652 19.8946 17.5196 19.7071 17.7071C19.5196 17.8946 19.2652 18 19 18V20C19.7956 20 20.5587 19.6839 21.1213 19.1213C21.6839 18.5587 22 17.7956 22 17H20Z" fill="#64748B" />
        <path d="M3 5L12 14L21 5" stroke="#64748B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      <input id="email" type="email" required :placeholder="$t('emailPlaceholder')">
    </label>
    <label for="submit" class="submit">
      <button id="submit" type="submit">
        {{ $t('submitText') }}

        <span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_3038_37)">
            <path d="M15.6529 13.3579L15.0084 4.57427M15.0084 4.57427L6.22479 3.92978M15.0084 4.57427L4.99103 14.5916" stroke="#0F172A" stroke-width="2" />
            </g>
            <defs>
            <clipPath id="clip0_3038_37">
            <rect width="20" height="20" fill="white" />
            </clipPath>
            </defs>
          </svg>
        </span>
      </button>
    </label>
  </form>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.email-form {
  font-family: 'Montserrat';
  display: flex;
  gap: 0.5rem;

  .email,
  #submit {
    border-radius: 2.5rem;

    padding-left: 1.5rem;
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .email {
    background: white;
    padding-right: 1.5rem;
    padding-block: 1rem;
    width: 23.5rem;
  }

  .email>input {
    border: none;
    width: 100%;

    &:focus,
    &:focus-visible {
      outline: none;
    }
  }

  @media (orientation: portrait) {
    flex-direction: column;
    gap: 1rem;
    width: 23.5rem;

    .email, .email>input {
      width: 100%;
    }
  }

  .submit>button {
    color: white;
    border: none;
    text-transform: uppercase;
    background: var(--color);
    padding-block: 0.375rem;
    cursor: pointer;

    span {
      padding: 0.75rem;
      border-radius: 50%;
      background: white;
      position: relative;
    }
  }
}
</style>