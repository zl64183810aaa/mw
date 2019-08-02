<template>
    <div>
        <my-headerc/>
        <div class="login-bg">
    <div>
        <h2>私人音乐空间，听我想听的歌</h2>
        <div>登陆管理我的音乐，多终端同步</div>
        <a href="javascript:;" @click="login">立刻登陆</a>
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
    
    <my-footer/>
    </div>
</template>
<script>
export default {
     data() {
         return {
             pro:1,
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
        }
  
     }, 
}
</script>
<style scoped>
.login-bg{
    width: 1519.2px;
    height: 622px;
    background: url(../../public/img/login/bg_profile_unlogin.jpg)

}
.login-bg>div{
    width:1200px;
    height:208px;
    margin:0 auto;
    color:#ffffff;
}
.login-bg::before{
    content: "";
    display: table;
}
.login-bg>div>h2{
    width: 788px;
    margin:200px auto 0;
    font-size: 60px;
    font-weight: 500;  
}
.login-bg>div>div{
    width: 420px;
    margin:50px auto;
    font-size: 30px;
    font-weight: 300;
}
.login-bg>div>a{
    text-decoration: none;
    width:80px;
    display: block;
    margin:20px auto;
    background: #31c27c;
    padding:15px 30px;
    color: #ffffff;
    font-size:20px;
    border-radius:3px; 
}
.login-bg>div>h2,.login-bg>div>div,.login-bg>div>a{
    animation:slideInUp 1s;
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


