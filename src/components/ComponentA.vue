<template>
  <div>
      {{$store.state.count}}
      <hr>
      {{count}}
      <button @click="addAction">add</button>
      <button @click="reduceAction">reduce</button>
  </div>
</template>
<script>
import ComponentB from "./ComponentB"
import ComponentC from "./ComponentC"
import {mapState,mapMutations,mapGetters,mapActions} from 'vuex';
export default {
  data(){
      return{
          c: '1111'
      }
  },
    /* computed:{
        count(){
            return this.$store.state.count;
        }
    }, */
    computed:{
        ...mapState(['count','count1']),
        ...mapGetters(['count2'])
    },
  /* methods:{
      change(arg){
          this.c = arg;
      }
  }, */
  //methods: mapMutations(['reduce']),
  methods: {
        ...mapMutations(['add','reduce']),
        ...mapActions(['addAction','reduceAction'])
    },
  components:{
      ComponentB,
      ComponentC
  }
}
</script>
<style>

</style>
