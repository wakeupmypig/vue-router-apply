<template>
    <div>
        当前用户是: {{this.$route.query.id}}
         {{this.$route.params.id}}
    </div>
</template>

<script>
export default {
    // watch:{
    //     '$route'(){
    //         alert('参数变了');
    //     }
    // },
    beforeRouteEnter(to,from,next){ //  路由进入前
        console.log('component enter')
        next(vm=>{
            console.log(vm)
        });
    },
    beforeRouteUpdate(){
        console.log('路由属性更新了，但是组件是复用的')
    },
}
</script>

