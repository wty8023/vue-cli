<template>
  <div class="photo-list">
      <ul class="albums">
          <li v-for="(obj,index) in photoData" :key="index">
              <router-link :to="'/photo/photo_show/'+ index ">
                <img :src="obj.src" alt="">
              </router-link>
          </li>
      </ul>
  </div>
</template>
<script>
import Axios from 'axios'
import {mapState,mapActions} from 'vuex'
export default {
  data(){
      return {
          photoList:[]
      }
  },
    computed  : {
        ...mapState(["photoData"]),
    },
    methods: {
        ...mapActions(['setPhotoData'])
    },
  mounted (){
      Axios.get('/static/photo-data.json')
      .then((res)=>{
        //   this.photoList = res.data.photoData;
        //   console.log(res.data.photoData);
        this.setPhotoData(res.data.photoData);
      })
  }
}
</script>
<style>
.albums{
    margin: 1rem 0;
    overflow: hidden;
}
.albums li{
    width : 50%;
    /* height: 33.33%; */
    float : left;
}
.albums li img{
    width : 100%;
    height: 100%;
}
</style>
