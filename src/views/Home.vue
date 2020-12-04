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
              @check="onCheckTicketOption"
            />
          </ul>
        </div>
        <div class="rounded bg-white shadow p-4 pb-8">
          <h3 class="font-bold text-left mb-4">Авиакомпании</h3>
          <ul class="space-y-4">
            <aviata-check-box
              v-for="airlineBox in airlinesCheckboxes"
              :key="airlineBox.code"
              :name="airlineBox.code"
              :label="airlineBox.title"
              :checked="airlineBox.checked"
              @check="onCheckAirline"
            />
          </ul>
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
@Component({
  components: { TicketCard, AviataCheckBox, SearchBar }
})
export default class Home extends Vue {
  ticketOptionsBoxes = [
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

  airlinesCheckboxes = [
    { code: 'KC', title: 'Air Astana', checked: false },
    { code: 'HY', title: 'Uzbekistan Airways', checked: false },
    { code: 'EK', title: 'Emirates', checked: false },
    { code: 'HR', title: 'HR', checked: false },
    { code: 'FZ', title: 'Flydubai', checked: false },
    { code: 'S7', title: 'S7 Airlines', checked: false },
    { code: 'LH', title: 'Lufthansa', checked: false },
    { code: 'BT', title: 'Air Baltic', checked: false },
    { code: 'CZ', title: 'China Southern Airlines', checked: false },
    { code: 'SU', title: 'Aeroflot', checked: false },
    { code: 'B2', title: 'Belavia', checked: false },
    { code: 'DV', title: 'SCAT Airlines', checked: false },
    { code: 'TK', title: 'Turkish Airlines', checked: false }
  ];

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
    console.log(res);
    const directOnly = options.some(option => option === 'direct-only');
    const luggage = options.some(option => option === 'luggage');
    const refundable = options.some(option => option === 'refundable');
    if (directOnly) {
      res = res.filter(
        flight => flight.itineraries[0][0].segments.length === 1
      );
    }
    if (luggage) {
      res = res.filter(flight => !!flight.services['20KG']);
    }
    if (refundable) {
      res = res.filter(flight => flight.itineraries[0][0].refundable);
    }

    return res;
  }

  onCheckAirline(e: any) {
    const airlineCode = e.target.name;
    const isChecked = e.target.checked;
    const indexOfAirline = this.airlinesCheckboxes.findIndex(
      airline => airline.code === airlineCode
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
        codes.push(airlineBox.code);
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
    const res = this.$store.state.flights;
    return res;
  }
}
</script>

<style lang="scss" scoped></style>
