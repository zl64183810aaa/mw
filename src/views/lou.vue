<template>
  <div>
    	<div id="toTop">
		<a href="javascript:;" @click="come">返回顶部</a>
	</div>
  </div>
</template>
<script>
export default {
    data() {
      return {
        
      }
    },
    mounted() {
      window['onscroll']=()=>{
        this.back()
      }
    },
    methods: {
       come(e){
        e.preventDefault();
         window.scrollTo(100,100)
       },
       back(){
         var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
         if(scrollTop>=500){
        toTop.className="show"
        }else{
         toTop.className=""
        }
       }


    //     toTop.children[0].onclick=function(e){
    //   e.preventDefault();
    //   window.scrollTo(0,0);
    // }
    // window.onscroll=function(){
    //   var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;

    //   if(scrollTop>=500){
    //     toTop.className="show"
    //   }else{
    //     toTop.className=""
    //   }
     },
}
</script>
<style>
  body{height:2000px;}
    #toTop{
      position:fixed;
      bottom:100px;
      right:-100px;
      /* display:none; */
      width:100px;
      opacity:0;
      overflow:hidden;
      transition:all .5s linear;
    }
    #toTop.show{
      right:0px;
      opacity:1;
    }
</style>