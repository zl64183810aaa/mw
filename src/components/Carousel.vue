<template>
    <div class="body-bg">
      <div class="left"></div>
        <div id="banner" @mouseover="stop" @mouseleave="play">
            <ul id="ul-imgs" :style="containerStyle">       
                <li><a href="javascript:;">
                    <img :src="imgs[imgs.length-1].img"></a></li> 
              <li v-for="(item,i) of imgs" :key="i">
                  <a href="javascript:;">
                    <img :src="item.img">
                    </a>
              </li>
              <!--注意！最后li个数要比实际图片张数多1，最后一个li里的img是重复第一张li的图片-->
              <li><a href="javascript:;"><img :src="imgs[0].img"></a></li>
            </ul>
            <ul id="ul-idxs">
              <!--虽然li个数比实际图片张数多1，但小圆点的个数不必多1-->
              <li :class="{active: i===(currentIndex-1)}" 
              v-for="(dot,i) of imgs" :key="i"
              @click="jump(i+1)"></li>
              
            </ul>
          </div>
          <div class="right"></div>
          <div class="body-btn">
                <button id="btn-left"  class="prev" @click="move(1200, 1,speed),stop()">
                    <i class="prev-pic"></i>
                </button>
                <button class="next" @click="move(1200,-1,speed),stop()">
                    <i id="btn-right" class="next-pic"></i>
                </button>
            </div>
        </div>
</template>
<script>
export default {
    data(){
        return {
            imgs:[
                {
                  img:require('../../public/img/pre-nav/1580541.jpg' ) 
                },
                {
                  img:require('../../public/img/pre-nav/1584348.jpg')  
                },
                {
                  img:require('../../public/img/pre-nav/1583601.jpg')  
                },
                {
                  img:require('../../public/img/pre-nav/1582597.jpg')  
                },
            ],
            currentIndex:1,
            distance:-1200,
            transitionEnd:true,
            speed: this.initialSpeed,
        }
    },
    props: {
        initialSpeed: {
         type: Number,
        default: 30
        },
        initialInterval: {
        type: Number,
        default: 3
        }
    },
    mounted() {
        this.init()
        },
    methods:{
        init() {
      this.play()
      window.onblur = function() { this.stop() }.bind(this)
      window.onfocus = function() { this.play() }.bind(this)
    },
        play(){
            if (this.timer) {
        window.clearInterval(this.timer)
        this.timer = null
    }
    this.timer = window.setInterval(() => {
        this.move(1200, -1, this.speed)
    }, this.interval)
        },
        stop(){
             window.clearInterval(this.timer)
            this.timer = null
        },
        jump(index){
            const direction= index-this.currentIndex >=0? -1 :1//滑动方向
            const offset=Math.abs(index-this.currentIndex)*1200//滑动距离
            const jumpSpeed=Math.abs(index-this.currentIndex)===0?this.speed:Math.abs(index-this.currentIndex)*this.speed
            this.move(offset,direction,jumpSpeed)
        },
      move(offset,direction,speed){
          if(!this.transitionEnd) return 
          this.transitionEnd=false;
        direction === -1 ? this.currentIndex+=offset/1200 : this.currentIndex-=offset/1200
         if (this.currentIndex > 4) this.currentIndex = 1
          if (this.currentIndex < 1) this.currentIndex = 4
          const destination = this.distance + offset * direction
        this.animate(destination, direction,speed)},
        animate(des, direc,speed){
            if(this.temp){
                window.clearInterval(this.temp)
                this.temp=null
            }
            this.temp=window.setInterval(()=>{
                if ((direc === -1 && des < this.distance) || (direc === 1 && des > this.distance)) {
                  this.distance += speed * direc        
                }else{
                  this.transitionEnd=true
                  window.clearInterval(this.temp)
                  this.distance=des
                  if (this.distance < -4800) this.distance = -1200
                      if (this.distance > -1200) this.distance = -4800
            }},10)
      
      }
    },
    computed:{
      containerStyle() {  //这里用了计算属性，用transform来移动整个图片列表
      return {
        transform:`translate3d(${this.distance}px, 0, 0)`
      }
    },
    interval() {
        return this.initialInterval * 1000
    }
    }
}
</script>
<style scoped>
.left,.right{
  position: absolute;
  width: 169px;
  height:480px;
  z-index: 2;
  background: rgba(0, 0, 0, .7)
}
.right{
  top:0;
  right: 0;
}
 .body-bg{
    height:100%;
    background: url(../../public/img/pre-nav/bg_detail.jpg) 50% 0 repeat-x;
    position: relative;
    overflow: hidden;
}
#banner{
    width:1200px;
    margin: 0 auto;
  
    position:relative;
  }
  #ul-imgs{
    display: flex;
    padding:0;
    list-style:none;
  }
  #ul-imgs.transition{
    transition:all .5s linear;
  }
  #ul-imgs>li{
    width:1200px;
    float:left;
  }
  #ul-imgs img{
    width:1200px;
  }
  #ul-idxs{
    width:100px;
    margin:0 auto;
    list-style:none;
    display: flex;
    
    justify-content: space-between;
    position:absolute;
    bottom:25px;
    left:50%;
    margin-left:-50px;
  }
  #ul-idxs>li{
    float:left;
    width:10px; height:10px;
    border: 5px solid rgba(0, 0, 0, 0.1) ;
    border-radius:5px;
    cursor:pointer;
  }
  #ul-idxs>li.active{
    background-color: rgba(49, 194, 124, 0.5) ;
  }
 

.body-bg:hover{

}
.body-bg>.body-btn>.prev,.body-bg>.body-btn>.next{
    position: absolute;
    top: 35%;
    margin-top: 10px;
    width: 79px;
    height: 108px;
    background: rgba(255,255,255,.4);
    opacity: 1;
    z-index: 2;
    cursor: pointer;
    border: none;
    outline: none;
    transition: left 0.5s ease-in-out 0.2s , right 0.5s ease-in-out 0.2s;
}
.body-bg>.body-btn>.prev{
left:-79px;
}
.body-bg>.body-btn>.next{
    right: -79px;
}
.body-bg:hover>.body-btn>.prev{
    left: 0px;
}
.body-bg:hover>.body-btn>.next{
    right: 0px;
}
.prev-pic,.next-pic{
    display: inline-block;
    background-image: url(../../public/img/sprite/icon_sprite@2x.png);
    background-size:200px; 
    height: 39px;
    width: 20px;
}
.prev-pic{
    background-position: -20px -120px;
}
.next-pic{
    background-position: 0px -120px;
}
</style>

