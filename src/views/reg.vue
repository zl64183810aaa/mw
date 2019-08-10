<template>
    <div>
        <div class="reg-bg">
        <div class="reg-nav">
            <img src="img/login/logo.png" alt="">
           <h1>让我成为你的全世界</h1>
        </div>
            <h1 class="title">听你想听，做你想做</h1>
            <h2 class="welcome">欢迎注册</h2>
            <div class="info">
                <input type="text" placeholder="手机" v-model="phone" @blur="ph">
                <input type="password" placeholder="密码" v-model="mima" @blur="mi"> 
                <input class="yes" type="checkbox" v-model="isAgree" ><span>我已阅读并同意相关服务条款</span>
                <button >注册</button> 
                <div v-show="yes">
                <img class="ver" src="../../public/img/login/zhengque.png">
                 </div>   
                 <div v-show="no">
                <img class="ver" src="../../public/img/login/cuowu.png">
                 </div>
                  <div v-show="myes">
                 <img class="vermi" src="../../public/img/login/zhengque.png">
                 </div>   
                 <div v-show="mno">
                <img class="vermi" src="../../public/img/login/cuowu.png">
                 </div> 
                <img class="mima" src="../../public/img/login/mima.png" >
            </div>
            <h4 class="cop">Copyright © 1998-2019Tencent All Rights Reserved</h4>
        <div class="star star-1"><img src="img/login/star.png" alt=""></div>
        <div class="star star-2"><img src="img/login/star.png" alt=""></div>
        <div class="star star-3"><img src="img/login/star.png" alt=""></div>
        <div class="star star-4"><img src="img/login/star.png" alt=""></div>
        <div class="star star-5"><img src="img/login/star.png" alt=""></div>
        <div class="star star-6"><img src="img/login/star.png" alt=""></div>
    </div> 
    </div>
</template>
<script>
export default {
    data(){
        return {
           isAgree:true,
           phone:"",
           mima:"",
           yes:false,
           no:false,
           myes:false,
           mno:false,
        }
    },
    methods:{
        ph(){
            var reg=/^1[3-9]\d{9}$/;
            if(reg.test(this.phone)){
                   this.yes=true 
                   this.no=false  
            }else{
                this.yes=false 
                this.no=true 
            }
        },
         mi(){
            var reg=/^[a-z0-9]{3,9}$/i;
            if(reg.test(this.mima)){
                   this.myes=true 
                   this.mno=false  
            }else{
                this.myes=false 
                this.mno=true 
            }
        }
    }
}
</script>
<style scoped>
.vermi{
    width: 40px;
    position: absolute;
    top:23%;
    left: 85%;
    z-index: 1;
}
.ver{
     width: 40px;
    position: absolute;
    top:6%;
    left: 85%;
}
.mima{
    width: 23px;
    position: absolute;
    top:25%;
    left: 88%;
}
.reg-bg{
   width:1535px;
   height:740px;
    background: url(../../public/img/login/banner_pc.jpg);
    overflow: hidden;
    background-size:1450px;
    position: relative;
}
.reg-bg::before{
    content: "";
    display: table;
}
.reg-nav{
    width:996px;
    height:46px;
    margin: 17px auto;
    display: flex;
}
.reg-nav>h1{
    padding-top:8px;
    margin-left: 50px;
    color: #ffffff;
    font-size: 30px;
}
.title{
    display: block;
    widows: 400px;
    height:400px;
    position:absolute;
    top:200px;
    left:140px; 
    color: #ffffff;
    font-size: 70px;
    z-index: 1;
   
}
.welcome{
    position:absolute;
    top:200px;
    left:940px; 
    color: #ffffff;
    font-size: 40px;
}
.info{
    z-index: 1;
    top:240px;
    left:900px;
    width: 300px;
    height: 400px;
    position: relative;
    position: absolute;
}

.info>input{
    box-sizing: border-box;
    outline:none;
    height:40px;
    width:300px;
    margin-top:25px; 
    padding:10px;
    background:transparent;
    border:1.5px solid #333;
    border-radius: 3px;
    color: #ffffff;
}
.info>span{
    color: #ffffff
}
.info>input.yes{
    width: 15px;
    height:20px;
    justify-content: flex-start
}
.info>button{
    box-sizing: border-box;
    outline:none;
    height:40px;
    width:300px;
    margin-top:25px; 
    padding:5px;
    background:#31c27c;
    border:0.5px solid #333;
    border-radius: 3px;
    cursor: pointer;
    color: #ffffff;
}
.info>button:hover{
    background: #1e8654;
    color: #fff;
}
.cop{
    width: 600px;
    height: 20px;
    color: #333;
    position: absolute;
    top:600px;
    left:750px;
}
@keyframes star{
    0%{opacity:0;transform:translate(0px,0px)}
     25%{opacity:0.75;}
    50%{opacity:1;}
    75%{opacity:0.75;} 
    100%{opacity:0.2;transform:translate(-270px,400px)}
  }
  .star{
      position: absolute;
    animation:star 1.5s both infinite linear;
   
  }
  .star-1{
    top: 330px;
    left: 120px;
      animation-delay:1s;
  }
  .star-2{
    top: 70px;
    right: 100px;
    animation-delay: 1.4s;
  }
  .star-3{
    top: 10px;
    left: 50%;
    animation-delay: 3s;
  }
  .star-4{
    top: 200px;
    left: 50%;
    animation-delay: 2.6s;
  }
  .star-5{
    top: 50px;
    left: 200px;
    animation-delay: 2s;
  }
  .star-6{
    top: 100px;
    left: 1400px;
    animation-delay: 3.4s;
  }
</style>
