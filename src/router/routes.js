export default [
    {
        path:'/',
        redirect:{name:'home'}
    },
    {
        path:'/home',
        name:'home',
        components:{
            default:()=>import('../views/Home.vue'),
            name:()=>import('../views/Name.vue'),
            version:()=>import('../views/Version.vue'),
        }
    },
    {
        path:'/profile',
        name:'profile',
        meta:{
            needLogin:true
        },
        component:()=>import('../views/Profile.vue')
    },
    {
        path:'/login',
        name:'login',
        component:()=>import('../views/Login.vue')
    },
    {
        path:'/user',
        name:'user',
        children:[
            {path:'',redirect:{name:'userAdd'}},
            {path:'add',name:'userAdd',component:()=>import('../views/UserAdd.vue')} ,
            {path:'list',name:'userList',component:()=>import('../views/UserList.vue')} ,
            {
                path:'detail/:id',
                name:'userDetail',
                component:()=>import('../views/UserDetail.vue'),
                beforeEnter(to,from,next){
                    console.log('enter');
                    next();
                }
            } 
        ],
        component:()=>import('../views/User.vue')
    }
]