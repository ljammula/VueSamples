import { createApp } from 'vue';
import { createStore } from 'vuex';

import router from './router.js';
import App from './App.vue';
import BaseBadge from './components/ui/BaseBadge.vue';
import ProductModule from './modules/product/index.js';
import CartModule from './modules/cart/index.js';

const store = createStore({
  modules: {
    productModule: ProductModule,
    cartModule: CartModule,
  },
  state() {
    return {
      isLoggedIn: false,
    };
  },
  mutations: {
    setAuth(state, payload) {
      state.isLoggedIn = payload.isAuth;
    },
  },
  actions: {
    userLogin(context) {
      context.commit('setAuth', { isAuth: true });
    },
    userLogout(context) {
      context.commit('setAuth', { isAuth: false });
    },
  },
  getters: {
    userIsAuthenticated(state) {
      return state.isLoggedIn;
    },
  },
});

const app = createApp(App);

app.use(router);
app.use(store);

app.component('base-badge', BaseBadge);

app.mount('#app');
