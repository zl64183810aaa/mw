import Vue from 'vue'
import Router from 'vue-router'
import Index from "./views/index"
import Login from "./views/login.vue"
import Reg from "./views/reg.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {path:"/",component:Index},
    {path:"/login",component:Login},
    {path:"/reg",component:Reg}
  ]
})
