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
      <div class="flex space-x-2">
        <div class="flex space-x-2">
          <input
            class="search-bar-text-input p-2 px-4"
            type="text"
            name="origin"
            id="origin"
          />
          <div class="flex items-center w-6">
            <img src="@/assets/icons/ui/exchange.png" alt="exchange" />
          </div>
          <input
            class="search-bar-text-input p-2 px-4"
            type="text"
            name="destination"
            id="destination"
          />
        </div>
        <div>
          <input
            class="search-bar-text-input p-2 px-4"
            type="text"
            name="origin"
            id="origin"
          />
          <input
            class="search-bar-text-input p-2 px-4"
            type="text"
            name="origin"
            id="origin"
          />
        </div>
        <div>
          <input
            class="search-bar-text-input p-2 px-4"
            type="text"
            name="origin"
            id="origin"
          />
        </div>
        <div>
          <button
            class="bg-green-500  text-white font-bold text-xl lg:text-2xl py-2 rounded w-2/3 lg:w-full"
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

<style scoped></style>
