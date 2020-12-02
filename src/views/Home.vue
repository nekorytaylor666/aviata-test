<template>
  <div class="shadow-custom">
    <div class="ticket-info">
      <div class="itinerary">
        <div class="itinerary-info">
          <div class="itinerary__logo">
            <img src="@/assets/icons/avia-providers/air-astana.svg" />
            <p>Air astana</p>
          </div>
          <div class="itinerary__graphic"></div>
          <div class="itinerary-options"></div>
          <div class="buy-ticket">
            <div class="price"></div>
            <div class="buy__cta"></div>
          </div>
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
</style>
