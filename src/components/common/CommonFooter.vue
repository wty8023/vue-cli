<template>
  <div class="footer" :style="{background: bgColor}">
      <ul>
          <li><router-link to="/movie">电影</router-link></li>
          <li><router-link to="/music">音乐</router-link></li>
          <li><router-link to="/book">书籍</router-link></li>
          <li><router-link to="/photo">图片</router-link></li>
      </ul>
  </div>
</template>
<script>
export default {
  props:['bgColor']
}
</script>
<style>
    .footer{
        height: 1rem;
        background: rgb(33,150,243);
        display: flex;
        color: #ffffff;
        position: fixed;
        bottom: 0;
        width: 100%;
    }
    .footer ul{
        flex: 1;
    }
    .footer li{
        width: 25%;
        line-height: 1rem;
        float: left;
        text-align: center;
        font-size: 1em;
    }
    .footer li a{
        color: #ccc;
      }
      .footer li a.router-link-active{
        color: #fff;
      }

</style>
