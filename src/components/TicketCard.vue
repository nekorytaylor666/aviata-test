<template>
  <div class="shadow-custom rounded bg-white">
    <div class="flex flex-col lg:flex-row ">
      <div class="flex flex-col lg:flex-grow justify-center lg:px-16 py-4">
        <div class="flex flex-grow flex-col lg:flex-row items-center">
          <div class="flex items-center space-x-1 mb-4 lg:mb-0">
            <img
              src="@/assets/icons/avia-providers/air-astana.svg"
              alt="helllo"
            />
            <p class="font-semibold text-xl">Air astana</p>
          </div>
          <div class="flex flex-grow items-center justify-center space-x-8">
            <div class="flex-col">
              <p class="text-sm">25 ноя, вс</p>
              <p class="font-semibold text-2xl lg:text-3xl">23:25</p>
            </div>
            <div class="w-48">
              <div class="flex justify-between items-center">
                <div class="text-xs text-gray-500">TSC</div>
                <div class="text-sm">4ч 20мин</div>
                <div class="text-xs text-right text-gray-500">TQL</div>
              </div>
              <div class="flex justify-between items-center relative">
                <div class="graph-circle"></div>
                <div class="graph-circle"></div>
                <div class="graph-circle"></div>
                <div class="absolute graph-line w-full "></div>
              </div>
              <div class="flex justify-center">
                <p class="text-sm text-red-400">через Шымкент, 1 ч 50 м</p>
              </div>
            </div>
            <div class="flex-col">
              <p class="text-sm">25 ноя, вс</p>
              <p class="font-semibold text-2xl lg:text-3xl">23:25</p>
            </div>
          </div>
        </div>
        <div class="flex flex-col-reverse lg:flex-row  mt-4 relative">
          <div class="flex justify-around p-2 lg:space-x-4 lg:absolute">
            <a
              class="border-b-4 border-blue-200 border-dotted px-2 text-blue-600 text-sm"
              href="#"
              >Детали перелета</a
            >
            <a
              class="border-b-4 border-blue-200 border-dotted px-2 text-blue-600 text-sm"
              href="#"
              >Условия тарифа</a
            >
          </div>
          <div
            class="flex justify-center lg:flex-grow items-center text-gray-500 space-x-1 p-2"
          >
            <img
              src="@/assets/icons/ui/no-refundable.svg"
              alt="no-refundable"
            />
            <p class="text-sm">Невозвратный</p>
          </div>
        </div>
      </div>
      <div class="bg-gray-200  space-y-3 p-4">
        <p class="text-2xl lg:text-3xl">
          590 990 <span class="text-xl">₸</span>
        </p>
        <button
          class="bg-green-500  text-white font-bold text-xl lg:text-2xl py-2 rounded w-2/3 lg:w-full"
        >
          Выбрать
        </button>
        <p class="text-xs lg:text-sm text-gray-500">Цена за всех пассажиров</p>
        <div class="flex space-x-2 items-center justify-center">
          <p class="text-xs lg:text-sm ">Нет багажа</p>
          <button
            class="bg-blue-200 text-blue-500 font-bold text-xs lg:text-sm  px-2 py-1 rounded"
          >
            + Добавить багаж
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class TicketCard extends Vue {}
</script>

<style scoped>
.shadow-custom {
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
}

.ticket-grid {
  display: grid;
  grid-template-columns: 1fr auto;
}

.graph-circle {
  background: #ffffff;
  /* Gray */

  border: 1px solid #b9b9b9;
  box-sizing: border-box;
  z-index: 10;
  height: 5px;
  width: 5px;
  border-radius: 100%;
}

.graph-line {
  border: 1px solid #b9b9b9;
}
</style>
