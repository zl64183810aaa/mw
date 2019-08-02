<template>
<div>
    <div class=" header-theme">
        <div class="header-box">
        <div class="header-one">
            <img src="img/header/logo.png" alt="">
        </div>
        <div class="header-two">
            <ul class="header-two-one">
            <li>
                <router-link :class="{headerA:true,'header-two-a-one':true}" to="/" >音乐馆</router-link>
            </li>
                <li>
               <router-link :class="{headerA:true}" to="/Login" >我的音乐</router-link>
                </li>
               <li>
                <router-link :class="{headerA:true}" to="#" >客户端</router-link>
                </li>
                <li>
                <router-link :class="{headerA:true}" to="#" >音乐号</router-link>
                </li>
                <li>
                <router-link :class="{headerA:true}" to="#" >VIP</router-link>
                </li>
            </ul>
        </div>
        <div class="header-three">
            <div>
            <input type="text" placeholder="歌曲/歌手/电台"  v-model="kwords" @keyup.13="search">
            <div @click="search">
                <i class="find"></i>
            </div>
            </div>
              <ul class="lab">
                  <li>
                      <a class="header-three-login headerA" href="javascript:;" @click="login">登录</a>
                      <ul>
                          <li><a class="headerA" href="javascript:;" @click="login">微信登陆</a></li>
                          <li><a class="headerA" href="javascript:;" @click="login">QQ登录</a></li>
                          <li><router-link class="headerA" to="/reg">注册账户</router-link> </li>
                      </ul>
                    </li>
              </ul> 
              <a class="header-three-push headerA" href="javascript:;">投稿专区</a>
          
        </div> 
      </div>      
    </div>
    <div class="header-nav">
        <div class="header-box">
        <ul class="header-nav-ul">
            <li><a class="headerA a1" href="javascript:;">首页</a></li>
            <li><a class="headerA" href="javascript:;">歌手</a></li>
            <li><a class="headerA" href="javascript:;">新碟</a></li>
            <li><a class="headerA" href="javascript:;">排行榜</a></li>
            <li><a class="headerA" href="javascript:;">分类歌单</a></li>
            <li><a class="headerA" href="javascript:;">电台</a></li>
            <li><a class="headerA" href="javascript:;">MV</a></li>
            <li><a class="headerA" href="javascript:;">数字专辑</a></li>
            <li><a class="headerA" href="javascript:;">票务</a></li>  
        </ul>
    </div>
    </div>
    <div class="popup_mask" v-show="1<pro">
    </div>
    <div class="element" v-show="1<pro">
      <div class="popup_hd">
          <h2 class="popup_tit">
              <a class="popup__tit_item" href="javascript:;">QQ登陆</a>
              <a class="popup__tit_item" href="javascript:;">微信登陆</a>
          </h2>
      </div>
      <a class="popup_close" href="javascript:;" @click="loginx">x</a>
      <div class="popup_by">
          <div class="popup_by_tit"> 
          <p>账号密码登陆</p>
          <p>推荐使用<span>快速安全登陆</span>，防止盗号</p>
          </div>
          <div class="popup_inp">
          <input type="text" placeholder="账号">
          <input type="password" placeholder="密码">
          <button>登陆</button>
          </div>
          </div>
          <div class="popup-fo">
              <label><input type="checkbox" checked>  下次自动登陆</label>
              <div>
              <a href="javascript:;">忘记密码？</a> | <router-link  to="/reg"> 注册账号</router-link> |<a href="javascript:;">意见反馈</a>
          </div></div>
    </div>
    </div>
</template>
<script>

export default {
    data() {
        return {
            pro:1,
            kwords:""
        }
    },
    watch: {
        
    },
    methods: {
       login(){          
           this.pro++
       },
       loginx(){
           this.pro--
       },
       search(){
           console.log(`查找${this.kwords}商品`)
       }
        
    },
    
}
</script>
<style scoped>

.header-three>div>div{
    position: absolute;
    top: 24px;
    right: 420px;
    border: 0 none;
    width: 38px;
    height: 35px;
    overflow: visible;
    background: 0 0;
  
}
div>.header-theme>.header-box>.header-three>div>div>.find{
    position: absolute;
    top: 35%;
    right: 3px;
    margin-top: -8px;
    width: 16px;
    height: 16px;
    display: block;
    width: 30px;
    height: 30px;
    background: url(../../public/img/sprite/icon_sprite@2x.png);
    background-position: 0 -58px;
    background-size:300px  
}
div>.header-theme>.header-box>.header-three>div>div>.find:hover{
     background-position: 0 -88px;
}


.popup-fo{
    width:550px ;
  position: absolute;
  margin: 0 5px;
  bottom: 10px;
  display: flex;
  justify-content: space-between
}
.popup-fo>div>a{
    text-decoration: none;
    color: #000;
}
.popup_inp{
    width: 300px;
    margin:0 auto;
    display: flex;
    flex-wrap: wrap
}
.popup_inp>input{
    
    width: 300px;
    height: 30px;
    margin-bottom: 30px;
    
    padding:10px 0 10px 10px;
}
.popup_inp>button{
    font-size: 17px;
    width: 300px;
    height: 40px;
    background: #31c27c;
    border: 0;
    outline:none;
    border-radius: 3px;
}

.header-theme{
width: 1200px;
height: 90px;
margin:0 auto;
display:flex;
}
.header-box{
    margin:0 auto;
    display: flex;
}
.headerA{
    text-decoration:none;
    color:#333;
    font-size:18px;
}
a:hover{
    color: #31c27c;
}

.header-one{
    display: flex;
}
.header-one>img{
   height:46px; 
   margin: 23px;
   
}

.header-two-one{
    display: flex;
}
.header-two-one>li>a{
    display: block;
    padding:13px 10px;    
    height:90px;
    padding:0 20px;
    line-height:90px;   
}
.header-two-a-one{
    color:#fff;
    background: #31c27c;
}
.header-two-a-one:hover{
    color:#fff;
}
/* .header-two-one>li>a:hover{
    color:#fff;
    background: #31c27c;
} */
.header-three{
    padding-left: 30px;
    display: flex;
}
.header-three>div>input{
    box-sizing: border-box;
    outline:none;
    height:36px;
    width:174px;
    margin-top:25px; 
    padding:5px;
    background:transparent;
    border:1px solid #8a8787;
    
}


.header-three-push{
    height: 25px;
    line-height: 25px;
    font-size: 16px;
    background: #31c27c;
    margin:21px 15px  0;
    padding :7px;
    color: #fff;
}
.header-three-push:hover{
    background: #1e8654;
    color: #fff;
}
.header-nav{
    width: 1200px;
    display: flex;
    padding: 10px 0;
    margin:0 auto;
    border-top: 1px solid #f2f2f2
}
.header-nav-ul{
    display: flex;
    
}
.header-nav-ul>li>a{
    padding:8px 20px;
    font-size: 18px;
    font-weight: lighter;
}
.header-nav-ul>li>.a1{
    color: #31c27c;
}
.header-nav>li>a:hover{
    color: #31c27c;
}
.header-three>ul.lab{
font-size: 22px;
width:50px;height: 25px;
margin:0px;
margin-top: 30px;
margin-left: 30px;
padding:0px;
padding-right: 10px;
}
.header-three>ul.lab>li{
    width:50px;
    margin:0px;
    position: relative;

}
.header-three>ul.lab>li:hover{
    border-bottom-width:1px;
    border-bottom-color: #fff;
    height:25px; 
    cursor:pointer;
  }
  .header-three>ul.lab>li>ul{
    clear:both;
    background-color:#fff;
    width:120px;
    border:1px solid rgb(239,239,239); 
    border-top:0;
    position:absolute;
    left:0;
  }
  .header-three>ul.lab>li>ul>li{
    display:block;
    background-color:#fff;
  
    text-align:left;
    margin-top:10px;
    padding-left:20px;
    width:98px;
    height:25px; line-height:25px;
  }
  .header-three>ul.lab>li>ul>li li{
    font-weight:normal;
  }
  .header-three>ul.lab>li>ul{
    top:35px;
    left:-35px;
    height:0px;
    opacity:0;
    overflow:hidden;
    z-index: 2;
    transition:all .5s linear;
  }
  .header-three>ul.lab>li:hover>ul{
    opacity:1;
    border:1px solid #31c27c;
    height:150px;
    opacity:1;
    z-index: 2;
    border-radius:3px; 
  }
  .popup_mask{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.2);
    z-index: 999;
  }
  .element{
      position: relative;
      width: 560px;
      height: 480px;
      background: #fff;
    position: fixed;
    z-index: 100000;
    top: 98.5px;
    margin: 10px;
    left: 450px;
    box-shadow: 0 0 10px rgba(0,0,0,.3);
  }
  .element>.popup_hd{
    position: relative;
    line-height: 55px;
    text-align: center;
    border-bottom: 1px solid #f2f2f2
  }
   .element>.popup_hd>.popup_tit{
    font-size: 16px;
    font-weight: 400;
   }
   .element>.popup_hd>.popup_tit>.popup__tit_item{
       text-decoration: none;
       color: #000;
       margin:0 55px;
   }
   .element>.popup_close{
    position: absolute;
    top: 6px;
    right: 6px;
    width: 24px;
    height: 24px;
    padding: 5px;
    overflow: hidden;
    z-index: 2;
    text-decoration: none;
    color: #333;
   }
   .popup_by{
    position: relative;
    margin: 0 auto 36px;
    z-index: 11;
    font-size: 16px;
    color: #666;
    text-align: center;
   }
   .popup_by>.popup_by_tit{
    font-size: 22px;
    color: #333;
    margin-top:20px;
    margin-bottom: 30px;
   }
   .popup_by>.popup_by_tit>p{
       margin-bottom: 10px;
   }
    .popup_by>.popup_by_tit>p>span{
        color: rgb(23, 86, 202)
    }
</style>

