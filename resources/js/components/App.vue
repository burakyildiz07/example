<template>

   <div>

       <header>
           <Nav />
       </header>

       <div class="d-flex wrapper">
           <Sidebar />
           <div class="main">
               <router-view></router-view>
           </div>
       </div>
   </div>
</template>

<script>
    import Nav from './Nav';
    import Sidebar from './Sidebar';


    export default {
        name: "App",

        components:{Nav,Sidebar}

    }
</script>

<style scoped>
    .wrapper{
        overflow-x: hidden;
        border-top: 2px solid #57ddb6;
    }
</style>
