<template>
  <div id="app">
    <div class="header">
       <img src="/1.jpg" alt="">
       <span>消息</span>
       <span>+</span>
    </div>
    <div class="main">
      <input type="text" placeholder="搜索" v-model="txt" @change="add">
        <router-view/>
    </div>
    <div class="footer">
      <router-link to="/">聊天</router-link>
      <router-link to="/about">联系人</router-link>
      <router-link to="/My">空间</router-link>
    </div>
  
  </div>
</template>
<script>
export default {
  data(){
    return {
      txt:'',
      list:[]
    }
  },
  methods: {
    getlist(){
      this.$axios.get('/data').then(res=>{
        this.list=res.data.arr
      })
    },
    add(){
       if (this.list.filter(item=>item.name===name)){
 
       }
    }
  },
}
</script>
<style lang="scss">
*{
  margin: 0;
  padding: 0;
  list-style: none;
}
html,body{
  width: 100%;
  height: 100%;
}
#app {
   width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  .header{
    justify-content: space-between;
    line-height: 50px;
    width: 100%;
    display: flex;
    height: 50px;background: skyblue;
    span{
      font-size: 25px;
    }
    img{
      width: 50px;
      height: 50px;
      border-radius: 50%;

    }
  }
  .main{
    flex: 1;
    overflow: auto
  }
  .footer{
     width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-around;
    line-height: 50px;
    border-top:1px solid #000;
  }
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
