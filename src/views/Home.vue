<template>
  <div class="container mx-auto p-2 md:p-4">
    <search-bar />
    <div class="flex flex-col lg:flex-row lg:space-x-8">
      <div class="lg:w-2/12 space-y-4  mb-8">
        <div class="rounded bg-white shadow p-4 pb-8">
          <h3 class="font-bold text-left mb-4">Опции тарифа</h3>
          <ul class="space-y-4">
            <aviata-check-box
              v-for="ticketOption in ticketOptions"
              :key="ticketOption.name"
              :name="ticketOption.name"
              :label="ticketOption.label"
            />
          </ul>
        </div>
        <div class="rounded bg-white shadow p-4 pb-8">
          <h3 class="font-bold text-left mb-4">Авиакомпании</h3>
          <ul class="space-y-4">
            <aviata-check-box
              v-for="airline in airlines"
              :key="airline.code"
              :name="airline.code"
              :label="airline.title"
            />
          </ul>
        </div>
      </div>
      <div class="lg:w-10/12 space-y-4">
        <ticket-card
          v-for="ticket in tickets"
          :key="ticket.id"
          :flight="ticket"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import AviataCheckBox from '@/components/AviataCheckBox.vue';
import SearchBar from '@/components/SearchBar.vue';
import TicketCard from '@/components/TicketCard.vue';
import { Component, Vue } from 'vue-property-decorator';
import { Airlines } from '../interface/Data/DataInterfaces';
import { getKeyValue } from '../utils/index';
@Component({
  components: { TicketCard, AviataCheckBox, SearchBar }
})
export default class Home extends Vue {
  ticketOptions = [
    {
      name: 'direct-only',
      label: 'Только прямые'
    },
    {
      name: 'luggage',
      label: 'Только с багажом'
    },
    {
      name: 'return',
      label: 'Только возвратные'
    }
  ];

  airlinesObject: Airlines = {
    KC: 'Air Astana',
    HY: 'Uzbekistan Airways',
    EK: 'Emirates',
    HR: 'HR',
    FZ: 'Flydubai',
    S7: 'S7 Airlines',
    LH: 'Lufthansa',
    BT: 'Air Baltic',
    CZ: 'China Southern Airlines',
    SU: 'Aeroflot',
    B2: 'Belavia',
    DV: 'SCAT Airlines',
    TK: 'Turkish Airlines'
  };

  get airlines() {
    const airlinesArray = [];
    for (const airlineCode in this.airlinesObject) {
      if (
        Object.prototype.hasOwnProperty.call(this.airlinesObject, airlineCode)
      ) {
        const airlineTitle = getKeyValue<keyof Airlines, Airlines>(
          airlineCode as keyof Airlines
        )(this.airlinesObject);
        const airlineTmpObj = {
          code: airlineCode,
          title: airlineTitle
        };
        airlinesArray.push(airlineTmpObj);
      }
    }
    return airlinesArray;
  }

  get tickets() {
    const res = this.$store.state.flights;
    return res;
  }
}
</script>

<style lang="scss" scoped></style>
