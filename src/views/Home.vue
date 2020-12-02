<template>
  <div class="container mx-auto">
    <TicketCard />
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
