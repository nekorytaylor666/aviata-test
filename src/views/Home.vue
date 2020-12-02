<template>
  <div class="container mx-auto p-2 md:p-4">
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

<style lang="scss" scoped></style>
