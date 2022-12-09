import Vue from "vue";
import Router from "vue-router";

const login = (resolve) => require(["@/pages/login"], resolve);
const index = (resolve) => require(["@/pages/index"], resolve);

Vue.use(Router);

const router = new Router({
  routes: [{
    path: "/login",
    name: "登录",
    component: login
  },{
    path: "/index",
    name: "首页",
    component: index
  }]
});

router.beforeEach((to, from, next) => {
  next();
});

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};
export default router;
