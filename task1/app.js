const app = Vue.createApp({
  data() {
    return {
      redColor: true,
      blueColor: true,
      orangeColor: true,
      greenColor: true,
    };
  },
  methods: {
    changeRed() {
      return (this.redColor.redTrue = !redTrue);
    },
  },
}).mount("#app");
