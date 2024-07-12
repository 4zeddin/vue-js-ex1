const app = Vue.createApp({
  data() {
    return {
      product: "Pizza",
      type: "Orientale",
      price: 12,
      image: "assets/images/pizza1-tomate.jpg",
      sale: true,
      notAvailable: true,
      ingrediants: [
        "Olives",
        "Poulet roti",
        "Bacon",
        "Poivrons",
        "Champignons",
        "Mozzarella",
        "Oeuf",
      ],
      sauces: [
        {
          id: 1001,
          type: "Sauce Tomate",
          color: "#db4006",
          image: "assets/images/pizza1-tomate.jpg",
        },
        {
          id: 1002,
          type: "Crème Fraiche",
          color: "#e9cb8f",
          image: "assets/images/pizza1-creme.jpg",
        },
      ],
      energy: {
        Kcal: 242,
        Glucides: 27.99,
        Fibres: 1.75,
        Proteines: 9.62,
        Sel: 11,
      },
      totalePrice: 0,
      nbrProduct: 0,
      promo: "",
    };
  },
  computed: {
    titre() {
      return this.product + " " + this.type;
    },
  },
  methods: {
    addProduct() {
      this.nbrProduct++;
      this.totalPrice = this.nbrProduct * this.price;
      if (this.promo === "royale") {
        this.totalPrice -= 3;
      }
    },
    updateImage(newImage) {
      this.image = newImage;
    },
  },
});
app.mount("#app");
