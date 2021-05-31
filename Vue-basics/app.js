const app = Vue.createApp({
  // we can see data,functions
  //template: "<h2> I am the template </h2>",
  data() {
    return {
      showBooks: true,
      title: "The runtime error",
      author: "Adarsh",
      age: 30,
    };
  },
  methods: {
    changeTitle(title) {
      //this.title = "Words of Radiance";
      this.title = title;
    },
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
  },
});

app.mount("#app");
