<template>
  <div class="rounded bg-white shadow p-4 mb-8">
    <div class="flex flex-col ">
      <div class="search-bar-ticket-option flex h-8 mb-4">
        <div class="flex">
          <input
            class="hidden"
            type="radio"
            name="ticket-option"
            id="in-n-out"
            value="in-n-out"
            checked
          />
          <label for="in-n-out">Туда и обратно</label>
        </div>
        <div class="divider"></div>
        <div class="flex">
          <input
            class="hidden"
            type="radio"
            name="ticket-option"
            id="one-way"
            value="one-way"
          />
          <label for="one-way" class="">В одну сторону</label>
        </div>
      </div>
      <div
        class="grid grid-cols-1 lg:flex  space-y-4 lg:space-y-0 lg:space-x-2"
      >
        <div class="flex space-x-2  justify-center">
          <input
            class="search-bar-text-input p-2 px-4 w-full"
            type="text"
            name="origin"
            id="origin"
          />
          <div class="flex items-center">
            <img
              width="40"
              src="@/assets/icons/ui/exchange.png"
              alt="exchange"
            />
          </div>
          <input
            class="search-bar-text-input p-2 px-4 w-full"
            type="text"
            name="destination"
            id="destination"
          />
        </div>
        <div class="flex space-x-2">
          <input
            class="search-bar-text-input p-2 px-4 w-full"
            type="text"
            name="origin"
            id="origin"
          />
          <input
            class="search-bar-text-input p-2 px-4 w-full"
            type="text"
            name="origin"
            id="origin"
          />
        </div>
        <div class="flex ">
          <input
            class="search-bar-text-input p-2 px-4 w-full"
            type="text"
            name="origin"
            id="origin"
          />
        </div>
        <div class="flex flex-1">
          <button
            class="bg-aviataGreen w-full text-white font-bold text-xl lg:text-2xl py-2 rounded"
          >
            Найти
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class SearchBar extends Vue {}
</script>

<style scoped>
.search-bar-ticket-option input[type='radio'] {
  display: none;
}

.search-bar-ticket-option label {
  display: inline-block;
  width: 150px;
  font-weight: bold;
  color: #ccc;
  text-align: left;
  font-family: Arial;
  font-size: 16px;
  cursor: pointer;
  transition: all ease-in-out 0.2s;
}

.search-bar-ticket-option input[type='radio']:checked + label {
  border-bottom: 2px solid green;
  color: #000;
}

.divider {
  height: 100%;
  border: 1px solid #ccc;
  margin: 0 1rem;
}

.search-bar-text-input {
  background: #e5e5e5;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  outline: none;
}
</style>
