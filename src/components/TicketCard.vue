<template>
  <div class="shadow-custom rounded bg-white">
    <div class="flex flex-col lg:flex-row ">
      <div class="flex flex-col lg:flex-grow justify-center lg:px-12 py-4">
        <div class="flex flex-grow flex-col lg:flex-row items-center">
          <div class="flex items-center space-x-2 mb-4 lg:mb-0 lg:w-1/5">
            <img
              class="w-8 object-contain"
              :src="airlineProviderLogo"
              alt="helllo"
            />
            <p class="font-semibold text-xl text-left">{{ carrierName }}</p>
          </div>
          <div class="flex flex-grow items-center justify-center space-x-8">
            <div class="flex-col">
              <p class="text-sm">{{ departureDate }}</p>
              <p class="font-semibold text-2xl lg:text-3xl">
                {{ departureTime }}
              </p>
            </div>
            <div class="w-40 lg:w-72">
              <div class="flex justify-between items-center">
                <div class="text-xs text-gray-500">{{ originCityCode }}</div>
                <div class="text-sm">{{ flightTime }}</div>
                <div class="text-xs text-right text-gray-500">
                  {{ departureCityCode }}
                </div>
              </div>
              <div class="flex justify-between items-center relative">
                <div
                  v-for="(layover, index) in numberOfLayovers"
                  :key="index"
                  class="graph-circle"
                ></div>
                <div class="graph-circle"></div>
                <div class="graph-circle"></div>
                <div class="absolute graph-line w-full "></div>
              </div>
              <div class="flex justify-center flex-col">
                <p
                  v-for="layover in layoverArray"
                  :key="layover"
                  class="text-sm text-red-400"
                >
                  {{ layover }}
                </p>
              </div>
            </div>
            <div class="flex-col">
              <p class="text-sm">{{ arrivalDate }}</p>
              <p class="font-semibold text-2xl lg:text-3xl">
                {{ arrivalTime }}
              </p>
            </div>
          </div>
        </div>
        <div class="flex flex-col-reverse lg:flex-row  mt-4 ">
          <div class="flex  p-2 lg:space-x-4">
            <a
              class="border-b-2 border-aviataDarkBlue border-dashed px-2 text-aviataDarkBlue text-sm"
              href="#"
              >Детали перелета</a
            >
            <a
              class="border-b-2 border-aviataDarkBlue border-dashed px-2 text-aviataDarkBlue text-sm"
              href="#"
              >Условия тарифа</a
            >
          </div>
          <div
            v-if="!flight.refundable"
            class="flex :flex-grow items-center text-gray-500 space-x-1 p-2"
          >
            <img
              src="@/assets/icons/ui/no-refundable.svg"
              alt="no-refundable"
            />
            <p class="text-sm">Невозвратный</p>
          </div>
        </div>
      </div>
      <div class="gray-bg  space-y-3 p-4">
        <p class="text-2xl lg:text-3xl">
          {{ flight.price }} <span class="text-xl">₸</span>
        </p>
        <button
          class="bg-aviataGreen  text-white font-bold text-xl lg:text-2xl py-2 rounded w-2/3 lg:w-full"
        >
          Выбрать
        </button>
        <p class="text-xs lg:text-sm text-gray-500">Цена за всех пассажиров</p>
        <div class="flex space-x-2 items-center justify-center">
          <p class="text-xs lg:text-sm ">Нет багажа</p>
          <button
            class="bg-aviataLightBlue text-aviataDarkBlue font-bold text-xs lg:text-sm  px-2 py-1 rounded"
          >
            + Добавить багаж
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Flight } from '../interface/Data/DataInterfaces';
import {
  addZero,
  getDayWeekTitle,
  getMonthTitle,
  parseDate,
  secondsToTime
} from '../utils/dateUtils';

@Component
export default class TicketCard extends Vue {
  @Prop() readonly flight!: Flight;
  itineraries = this.flight.itineraries[0][0];
  segments = this.itineraries.segments;

  get departureDate() {
    const date = parseDate(this.itineraries.dep_date);
    const day = date.getDate();
    const month = getMonthTitle(date.getMonth());
    const weekDay = getDayWeekTitle(date.getDay());
    return `${day} ${month.short}, ${weekDay.short}`.toLowerCase();
  }
  get departureTime() {
    const date = parseDate(this.itineraries.dep_date);
    const hour = addZero(date.getHours());
    const minutes = addZero(date.getMinutes());
    return `${hour}:${minutes}`;
  }
  get flightTime() {
    const bestTime = this.flight.best_time;
    const timeObj = secondsToTime(bestTime);
    const { hours, minutes } = timeObj;
    const timeString = `${hours} ч ${minutes} м`;
    return timeString;
  }
  get carrierName() {
    return this.itineraries.carrier_name;
  }
  get arrivalDate() {
    const date = parseDate(this.itineraries.arr_date);
    const day = date.getUTCDate();
    const month = getMonthTitle(date.getMonth());
    const weekDay = getDayWeekTitle(date.getDay());
    return `${day} ${month.short}, ${weekDay.short}`.toLowerCase();
  }
  get arrivalTime() {
    const date = parseDate(this.itineraries.arr_date);
    const hour = addZero(date.getHours());
    const minutes = addZero(date.getMinutes());
    return `${hour}:${minutes}`;
  }
  get numberOfLayovers() {
    const flights = this.itineraries.segments;
    return flights.length - 1;
  }
  get originCityCode() {
    //first segment and get its dest code
    return this.segments[0].origin_code;
  }
  get departureCityCode() {
    //take last segment and get its dest code
    return this.itineraries.segments[this.itineraries.segments.length - 1]
      .dest_code;
  }
  get airlineProviderLogo() {
    const airlineAssetsUrl = 'https://aviata.kz/static/airline-logos/80x80';
    return `${airlineAssetsUrl}/${this.itineraries.carrier}.png`;
  }
  get layoverArray() {
    //direct flight has only one segment with origin and destination
    //flight with layover has more than one segment;
    const numberOfLayovers = this.itineraries.segments.length - 1;
    //if we see that there is only one segment we assume that this is direct flight
    if (numberOfLayovers === 0) {
      return ['Прямой рейс'];
    }
    //in case there are more than one layover we create array of layovers to iterate and push create layover string to this array
    const layovers: string[] = [];
    for (let index = 0; index < numberOfLayovers; index++) {
      const segment = this.segments[index];
      const destName = segment.dest;
      //layovers is an array with amount of seconds which it takes for layover
      //we conver it to time string with method secondToTime
      const layoverTime = secondsToTime(this.itineraries.layovers[index]);
      const { hours, minutes } = layoverTime;
      const timeString = `${hours} ч ${minutes} м`;
      const layoverString = `через ${destName}, ${timeString}`;
      layovers.push(layoverString);
    }
    return layovers;
  }
}
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

.gray-bg {
  background-color: #f5f5f5;
}
</style>
