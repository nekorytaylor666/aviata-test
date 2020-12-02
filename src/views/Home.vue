<template>
  <div class="container mx-auto p-2 md:p-4">
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
          <input
            class="search-bar-text-input p-2 px-4"
            type="text"
            name="origin"
            id="origin"
          />
          <button
            class="bg-green-500  text-white font-bold text-xl lg:text-2xl py-2 rounded w-2/3 lg:w-full"
          >
            Найти
          </button>
        </div>
      </div>
    </div>
    <div class="flex flex-col lg:flex-row lg:space-x-8">
      <div class="lg:w-2/12 space-y-4">
        <div class="rounded bg-white shadow p-4 pb-8">
          <h3 class="font-bold text-left mb-4">Опции тарифа</h3>
          <ul class="space-y-4">
            <li class="flex items-center space-x-4 text-left">
              <input type="checkbox" name="direct" id="direct" />
              <label for="direct">Только прямые</label>
            </li>
            <li class="flex items-center space-x-4 text-left">
              <input type="checkbox" name="luggage" id="luggage" />
              <label for="luggage">Только с багажом</label>
            </li>
            <li class="flex items-center space-x-4 text-left">
              <input type="checkbox" name="return" id="return" />
              <label for="return">Только возвратные</label>
            </li>
          </ul>
        </div>
        <div class="rounded bg-white shadow p-4 pb-8">
          <h3 class="font-bold text-left mb-4">Авиакомпании</h3>
          <ul class="space-y-4">
            <li class="flex items-center space-x-4 text-left">
              <input type="checkbox" name="all" id="all" />
              <label for="direct">Только прямые</label>
            </li>
            <li class="flex items-center space-x-4 text-left">
              <input type="checkbox" name="air-astana" id="air-astana" />
              <label for="luggage">Air Astana</label>
            </li>
            <li class="flex items-center space-x-4 text-left">
              <input type="checkbox" name="bek-air" id="bek-air" />
              <label for="return">Bek Air</label>
            </li>
            <li class="flex items-center space-x-4 text-left">
              <input type="checkbox" name="fly-arystan" id="fly-arystan" />
              <label for="direct">Fly Arystan</label>
            </li>
            <li class="flex items-center space-x-4 text-left">
              <input type="checkbox" name="scat" id="scat" />
              <label for="luggage">SCAT Airlines</label>
            </li>
            <li class="flex items-center space-x-4 text-left">
              <input type="checkbox" name="lufthans" id="lufthans" />
              <label for="return">Lufthansa</label>
            </li>
            <li class="flex items-center space-x-4 text-left">
              <input type="checkbox" name="turkish-air" id="turkish-air" />
              <label for="luggage">Turkish Airlines</label>
            </li>
            <li class="flex items-center space-x-4 text-left">
              <input type="checkbox" name="china-air" id="china-air" />
              <label for="return">China Southern Air</label>
            </li>
          </ul>
        </div>
      </div>
      <div class="lg:w-10/12 space-y-4">
        <TicketCard />
        <TicketCard />
        <TicketCard />
        <TicketCard />
        <TicketCard />
        <TicketCard />
        <TicketCard />
        <TicketCard />
        <TicketCard />
        <TicketCard />
        <TicketCard />
        <TicketCard />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import TicketCard from '@/components/TicketCard.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: { TicketCard }
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
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
  box-sizing: border-box;
  border-radius: 4px;
  outline: none;
}
</style>
