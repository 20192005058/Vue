<template>
 <div id="root">
   <MyTest/>
   <br>
   <hr/>
   <MyTest2/>
   <br>
   <hr/>
   <MyTest3/>
</div>
</template>

<script>
import MyTest from './components/MyTest.vue'
import MyTest2 from './components/MyTest2.vue'
import MyTest3 from './components/MyTest3.vue'
export default {
    name:'App',
   components:{MyTest,MyTest2,MyTest3},
}
</script>

<style>
</style>