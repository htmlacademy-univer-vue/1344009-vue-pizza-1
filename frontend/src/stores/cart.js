import { defineStore } from "@pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    phone: "",
    address: {
      street: "",
      building: "",
      flat: "",
      comment: "",
    },
    pizzas: [],
    misc: [],
  }),
  getters: {
    totalCartPrice: (state) => {
      const pizzasPrice = state.pizzas.reduce(
        (sum, pizza) => sum + pizza.price,
        0
      );
      const miscPrice = state.misc.reduce((sum, m) => sum + m.price, 0);
      return pizzasPrice + miscPrice;
    },
    getPhone: (state) => {
      return state.phone;
    },
    getAddress: (state) => {
      return state.address;
    },
    getPizzas: (state) => {
      return state.pizzas;
    },
    getMisc: (state) => {
      return state.misc;
    },
  },
  actions: {},
});
