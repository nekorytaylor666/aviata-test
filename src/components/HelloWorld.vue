<template>
  <div class="hello">
    <h1>{{ fullName }}</h1>
    <h1>{{ counter }}</h1>
    <button @click="incrementCounter()">Press me</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  erik = "hello world";
  counter = 0;
  zip = "fuck";
  mounted() {
    console.log("mounted");
  }
  get fullName() {
    return this.erik + "!!!";
  }

  incrementCounter() {
    this.counter++;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
