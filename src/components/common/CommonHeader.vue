<template>
  <div class="header" :style="{background:bgColor}">
      <slot name="title">
        <button :style="{background:bgColor}" @click="back">
          {{nav}}
        </button>
      </slot>
      <h2>{{title}}</h2>
  </div>
</template>
<script>
export default {
    props: ['title','bgColor','nav'],
    data(){
        return{

        }
    },
    methods:{
        back(){
            // history.go(-1);
            this.$router.go(-1);
        }
    }
}
</script>

<style>
    .header{
        position: fixed;
        top:0;
        width: 100%;
        height: 1rem;
        background: rgb(33,150,243);
        display: flex;
        color: #ffffff;
    }
    .header button{
        width: 1rem;
        height: 1rem;
        color: #fff;
        border: 0;
        background: rgb(33,150,243);
    }
    .header h2{
        flex: 1;
        text-align: center;
        text-indent: -1rem;
        }
</style>

