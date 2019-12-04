<template>
  <div class="home">
   <ul v-for="(item,index) in list" :key="index">
     <li>
       <img :src="item.img" alt="">
       {{item.name}}
       {{item.title}}
       {{item.time}}
     </li>
   </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data(){
    return {
      list:[]
    }
  },
  created() {
    this.getlist()
  },
  methods: {
    getlist(){
      this.$axios.get('/data').then(res=>{
        this.list=res.data.arr
      })
    }
  },
}
</script>
<style lang="scss">
  .home{
    ul {
      img{
        border-radius: 50%
      }
    }
  }
</style>
