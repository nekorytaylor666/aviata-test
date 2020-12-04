<template>
  <div class="container mx-auto p-2 md:p-4">
    <search-bar />
    <div class="flex flex-col lg:flex-row lg:space-x-8">
      <div class="lg:w-2/12 space-y-4  mb-8">
        <div class="rounded bg-white shadow p-4 pb-8">
          <h3 class="font-bold text-left mb-4">Опции тарифа</h3>
          <ul class="space-y-4">
            <aviata-check-box
              v-for="ticketOption in ticketOptionsBoxes"
              :key="ticketOption.name"
              :name="ticketOption.name"
              :label="ticketOption.label"
              :checked="ticketOption.checked"
              @check="onCheckTicketOption"
            />
          </ul>
        </div>
        <div class="rounded bg-white shadow p-4 pb-8">
          <h3 class="font-bold text-left mb-4">Авиакомпании</h3>
          <ul class="space-y-4">
            <aviata-check-box
              v-for="airlineBox in airlinesCheckboxes"
              :key="airlineBox.name"
              :name="airlineBox.name"
              :label="airlineBox.label"
              :checked="airlineBox.checked"
              @check="onCheckAirline"
            />
          </ul>
        </div>
        <div class="flex justify-start outline-none">
          <button
            class="border-b-2 border-aviataDarkBlue border-dashed px-2 text-aviataDarkBlue "
            @click="removeFilters"
          >
            Сбросить фильтры
          </button>
        </div>
      </div>
      <div class="lg:w-10/12 space-y-4">
        <ticket-card
          v-for="ticket in filterByOptions(
            filterByAirline(tickets, checkedCodes),
            checkedOptions
          )"
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
import { Airlines, Flight } from '../interface/Data/DataInterfaces';

interface CheckBox {
  name: string;
  label: string;
  checked: boolean;
}

@Component({
  components: { TicketCard, AviataCheckBox, SearchBar }
})
export default class Home extends Vue {
  ticketOptionsBoxes: CheckBox[] = [];
  airlinesCheckboxes: CheckBox[] = [];

  created() {
    this.initCheckboxes();
  }
  initCheckboxes() {
    this.ticketOptionsBoxes = [
      {
        name: 'direct-only',
        label: 'Только прямые',
        checked: false
      },
      {
        name: 'luggage',
        label: 'Только с багажом',
        checked: false
      },
      {
        name: 'refundable',
        label: 'Только возвратные',
        checked: false
      }
    ];

    this.airlinesCheckboxes = [
      { name: 'KC', label: 'Air Astana', checked: false },
      { name: 'HY', label: 'Uzbekistan Airways', checked: false },
      { name: 'EK', label: 'Emirates', checked: false },
      { name: 'HR', label: 'HR', checked: false },
      { name: 'FZ', label: 'Flydubai', checked: false },
      { name: 'S7', label: 'S7 Airlines', checked: false },
      { name: 'LH', label: 'Lufthansa', checked: false },
      { name: 'BT', label: 'Air Baltic', checked: false },
      { name: 'CZ', label: 'China Southern Airlines', checked: false },
      { name: 'SU', label: 'Aeroflot', checked: false },
      { name: 'B2', label: 'Belavia', checked: false },
      { name: 'DV', label: 'SCAT Airlines', checked: false },
      { name: 'TK', label: 'Turkish Airlines', checked: false }
    ];
  }

  removeFilters() {
    this.initCheckboxes();
  }

  filterByAirline(arr: Flight[], airlineCodes: (keyof Airlines)[]) {
    return arr.filter(el =>
      airlineCodes.some(code => el.itineraries[0][0].carrier === code)
    );
  }

  filterByOptions(
    arr: Flight[],
    options: ('direct-only' | 'luggage' | 'refundable')[]
  ) {
    let res: Flight[] = arr;
    //find checked options
    const directOnly = options.some(option => option === 'direct-only');
    const luggage = options.some(option => option === 'luggage');
    const refundable = options.some(option => option === 'refundable');
    //if direct we check for flights with only one segment
    if (directOnly) {
      res = res.filter(
        flight => flight.itineraries[0][0].segments.length === 1
      );
    }
    //if luggage we check for flights with service 20kg only
    if (luggage) {
      res = res.filter(flight => !!flight.services['20KG']);
    }
    //if refundable we check for flights with refundable set true
    if (refundable) {
      res = res.filter(flight => flight.itineraries[0][0].refundable);
    }

    return res;
  }

  onCheckAirline(e: any) {
    const airlineCode = e.target.name;
    const isChecked = e.target.checked;
    const indexOfAirline = this.airlinesCheckboxes.findIndex(
      airline => airline.name === airlineCode
    );

    this.airlinesCheckboxes[indexOfAirline].checked = isChecked;
  }

  onCheckTicketOption(e: any) {
    const optionName = e.target.name;
    const isChecked = e.target.checked;
    const optionIndex = this.ticketOptionsBoxes.findIndex(
      option => option.name === optionName
    );

    this.ticketOptionsBoxes[optionIndex].checked = isChecked;
  }

  get checkedCodes(): string[] {
    const codes: string[] = [];
    this.airlinesCheckboxes.map(airlineBox => {
      if (airlineBox.checked) {
        codes.push(airlineBox.name);
      }
    });
    return codes;
  }
  get checkedOptions(): string[] {
    const options: string[] = [];
    this.ticketOptionsBoxes.map(option => {
      if (option.checked) {
        options.push(option.name);
      }
    });
    return options;
  }

  get tickets() {
    //get all tickets from store
    const res = this.$store.state.flights;
    return res;
  }
}
</script>

<style lang="scss" scoped></style>
