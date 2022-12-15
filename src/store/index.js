import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    supplier_list:localStorage.getItem("supplier_list")?JSON.parse(localStorage.getItem("supplier_list")):[],
    account_id: localStorage.getItem("account_id")?localStorage.getItem("account_id"):'',
    login_token: localStorage.getItem("login_token")?localStorage.getItem("login_token"):'',
    secret_key: localStorage.getItem("secret_key")?localStorage.getItem("secret_key"):'',
  },
  mutations: {
    //设置用户信息
    setToken(state, user_info){
      state.supplier_list = user_info.supplier_list;
      state.account_id = user_info.account_id;
      state.login_token = user_info.login_token;
      state.secret_key = user_info.secret_key;
    }
  },
  actions: {
    
  }
});
export default store;
