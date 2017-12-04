<template>
  <div>
        <common-header nav="<" :title="title" :bgColor="bgColor"></common-header>
        <vue-touch class="photo-show" :style="{background:bg}"
        @swipeleft="left" @swiperight="right">

        </vue-touch>
    </div>
</template>
<script>
import CommonHeader from '../common/CommonHeader'
import {mapState} from 'vuex';
import Axios from 'axios'
export default {
  data(){
      return {
            title:"photo",
            bgColor: "rgb(63, 81, 181)",
            aa : this.$route.params.index
      }
  },
  computed:{
      bg(){
          return "url("+ this.$store.state.photoData[this.aa].src +") no-repeat center / contain #000"
      },
      ...mapState(["photoData"])
  },
  methods:{
      left(){          
          if(this.aa==this.$store.state.photoData.length-1){
              this.aa=-1;
          }
          this.aa++;
      },
      right(){
          if(this.aa==0){
              this.aa=this.$store.state.photoData.length;
          }
          this.aa--;          
      }
  },
  components: {
      CommonHeader
  }
}
</script>
<style>
.photo-show{
    position: absolute;
    top: 1rem;
    bottom: 0;
    width: 100%;
}
</style>
