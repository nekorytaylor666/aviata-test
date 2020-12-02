<template>
  <div class="shadow-custom rounded bg-white">
    <div class="flex flex-col">
      <div class="flex flex-col justify-center p-4">
        <div class="flex flex-grow">
          <div class="flex space-x-2 items-center">
            <img src="@/assets/icons/avia-providers/air-astana.svg" />
            <p class="font-semibold ">Air astana</p>
          </div>
          <div class="flex flex-grow items-center justify-evenly">
            <div class="flex-col">
              <p class="text-sm">25 ноя, вс</p>
              <p class="font-semibold text-2xl">23:25</p>
            </div>
            <div>
              graphic
            </div>
            <div class="flex-col">
              <p class="text-sm">25 ноя, вс</p>
              <p class="font-semibold text-2xl">23:25</p>
            </div>
          </div>
        </div>
        <div class="flex flex-col-reverse mt-4">
          <div class="flex justify-around p-2">
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
            class="flex justify-center items-center text-gray-500 space-x-1 p-2"
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
        <p class="text-2xl">590 990 <span class="text-xl">₸</span></p>
        <button
          class="bg-green-500  text-white font-bold text-xl py-2 rounded w-2/3"
        >
          Выбрать
        </button>
        <p class="text-xs text-gray-500">Цена за всех пассажиров</p>
        <div class="flex space-x-2 items-center justify-center">
          <p class="text-xs">Нет багажа</p>
          <button
            class="bg-blue-200 text-blue-500 font-bold text-xs px-2 py-1 rounded"
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

@Component({
  components: {}
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.shadow-custom {
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
}

.ticket-grid {
  display: grid;
  grid-template-columns: 1fr auto;
}
</style>
