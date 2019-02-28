import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
import router from './router';
import 'bootstrap/dist/css/bootstrap.css';
router.beforeEach((to,from,next)=>{
  let matched = to.matched.some((match)=>match.meta.needLogin);
  if(matched){ // 需要登录
     let isLogin = localStorage.getItem('login');
     if(isLogin){
        next();
     }else{
       next({name:'login'})
     }
  }else{
    if(to.name === 'login'){
      next({name:'home'})
    }else{  
      next();
    }
    
  }
});

router.beforeResolve((to,from,next)=>{
  console.log('resolve');
  next();
});
router.afterEach((to,from)=>{
  console.log('after Each')
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
