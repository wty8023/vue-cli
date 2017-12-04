<template>
    <div class="photo">
        <common-header nav="<" :title="title" :bgColor="bgColor"></common-header>
        <router-view></router-view>
        <common-footer bgColor="rgb(63, 81, 181)"></common-footer>
    </div>
</template>
<script>
import CommonHeader from "../common/CommonHeader"
import CommonFooter from "../common/CommonFooter"
// import {mapState,mapActions} from 'vuex'
import Axios from 'axios'

export default {
    data(){
        return{
            title:"photo",
            bgColor: "rgb(63, 81, 181)"
        }
    },
    // computed  : {
    //     ...mapState(["photoData"])
    // },
    // methods: {
    //     ...mapActions(['setPhotoData'])
    // },
    mounted (){
        Axios.get('/static/photo-data.json')
        .then((res)=>{
            this.photoList = res.data.photoData
        })
    },
    components:{
      CommonHeader,
      CommonFooter
  }
}
</script>
<style>
    
</style>
