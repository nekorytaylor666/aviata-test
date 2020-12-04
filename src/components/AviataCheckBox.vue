<template>
  <li class="flex items-center space-x-4 text-left">
    <!-- <input type="checkbox" />
    <label :for="name"> </label> -->
    <label class="checkbox">
      <span class="checkbox__input">
        <input
          type="checkbox"
          :name="name"
          :id="name"
          :checked="checked"
          @change="onChange($event)"
        />
        <span class="checkbox__control">
          <svg viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.95452 2.1527L3.24992 7.44537L0 4.19545L1.41421 2.78123L3.16429 4.53131L6.4597 0.823975L7.95452 2.1527Z"
            />
          </svg>
        </span>
      </span>
      <span class="radio__label">{{ label }}</span>
    </label>
  </li>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class AviataCheckBox extends Vue {
  @Prop(String) readonly name!: string;
  @Prop(String) readonly label!: string;
  @Prop(Boolean) readonly checked!: boolean;

  onChange(e: any) {
    this.$emit('check', e);
  }
}
</script>

<style lang="scss" scoped>
.checkbox {
  display: grid;
  grid-template-columns: min-content auto;
  align-items: center;
  grid-gap: 0.5em;
  color: black;
}

.checkbox__control {
  display: inline-grid;
  padding: 2px;
  width: 1em;
  height: 1em;
  border-radius: 0.25em;
  border: 1px solid #b9b9b9;

  svg {
    transition: transform 0.05s ease-in 25ms;
    transform: scale(0);
    transform-origin: center;
    color: black;
    fill: white;
  }
}

.checkbox__input {
  display: grid;
  grid-template-areas: 'checkbox';

  > * {
    grid-area: checkbox;
  }

  input {
    opacity: 0;
    width: 1em;
    height: 1em;

    &:focus + .checkbox__control {
      border-color: #55bb06;
      border-width: 2px;
    }

    &:checked + .checkbox__control svg {
      transform: scale(1);
    }
    &:checked + .checkbox__control {
      background-color: #55bb06;
      border: none;
    }

    &:disabled + .checkbox__control {
      border-color: gray;
    }
  }
}
</style>
