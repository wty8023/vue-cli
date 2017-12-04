<template>
  <div class="nav">
      <ul>
          <li><router-link to="/movie/top250">top250</router-link></li>
          <li><router-link to="/movie/hot">正在热映</router-link></li>
          <li><router-link to="/movie/coming">即将上映</router-link></li>
      </ul>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
    .nav{
        height: 1rem;
        background: rgb(33,150,243);
        color: #ffffff;
        position: fixed;
        top: 1rem;
        width: 100%;
    }
    .nav ul{
        display: flex;
        flex: 1;
    }
    .nav li{
        flex: 1;
        line-height: 1rem;
        float: left;
        text-align: center;
        font-size: 1em;
    }
    .nav li a{
        color: #ccc;
      }
    .nav li a.router-link-active{
        color: #fff;
      }

</style>
