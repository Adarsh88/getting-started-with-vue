const app = Vue.createApp({
  // we can see data,functions
  //template: "<h2> I am the template </h2>",
  data() {
    return {
      url: "https://www.google.com/",
      showBooks: true,
      books: [
        {
          title: "The runtime error",
          author: "Adarsh",
          img: "assets/book1.jpeg",
          isFav: true,
        },
        {
          title: "The soultime",
          author: "Sadarsh",
          img: "assets/book2.jpg",
          isFav: false,
        },
        {
          title: "The freespirit",
          author: "Vadarsh",
          img: "assets/book3.jpg",
          isFav: true,
        },
      ],
      x: 0,
      y: 0,
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
    handleEvent(e, data) {
      console.log(e);
      if (data) {
        console.log(data);
      }
    },
    handleMousemove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
    handleFav(book) {
      book.isFav = !book.isFav;
    },
  },
  computed: {
    filteredBooks() {
      return this.books.filter((book) => book.isFav);
    },
  },
});

app.mount("#app");
