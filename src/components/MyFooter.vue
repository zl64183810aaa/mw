<template>
    <div>
    <div class="bg">
    <div class="footer-bg">
        <div class="footer-one">
         <h3 class="h3">下载QQ音乐客户端</h3>
         <ul class="footer-one-nav">
             <li><div class="pc"></div><a href="#">Pc版</a> </li>
             <li><div class="mac"></div><a href="#">Mac版</a></li>
             <li><div class="and"></div><a href="#">Android版</a></li>
             <li><div class="ip"></div><a href="#">iphone版</a></li>
         </ul>
         <h3 class="h3">开放平台</h3>
         <ul class="footer-onetwo-nav">
             <li><a href="#">腾讯音乐人平台</a></li>
             <li><a href="#">音乐号认证</a></li>
             <li><a href="#">机构入住</a></li>
         </ul>
        </div>
        <div class="footer-two">
            <h3 class="h3">特色产品</h3>
            <ul class="footer-two-nav">
                <li><div class="qm"></div><a href="#">全民K歌</a></li>
                <li><div class="ss"></div><a href="#">Super Sound</a></li>
                <li><div class="Q"></div><a href="#">QPlay</a></li>
            </ul>
            <h3 class="h3">TME集团官网</h3>
            <ul class="footer-onetwo-nav">
                <li><a href="#">腾讯音乐</a></li>
            </ul>
        </div>
        <div class="footer-three">
           <h3 class="h3">合作连接</h3>
           <ul class="footer-three-nav">
               <li><a href="#">CJ ENM</a></li>
               <li><a href="#">腾讯视频</a></li>
               <li><a href="#">手机QQ空间</a></li>
               <li><a href="#">最新版QQ</a></li>
               <li><a href="#">腾讯社交广告</a></li>
               <li><a href="#">电脑管家</a></li>
               <li><a href="#">QQ浏览器</a></li>
               <li><a href="#">腾讯微云</a></li>
               <li><a href="#">腾讯云</a></li>
               <li><a href="#">企鹅FM</a></li>
               <li><a href="#">智能电视网</a></li>
               <li><a href="#">滴滴嗒滴</a></li>
           </ul>
        </div>
    </div>
    <div class="footer-lest">        
        <p><a href="#"> 关于腾讯</a> |<a href="#"> About Tencent</a> |<a href="#">服务条款</a>  |<a href="#">用户服务协议</a>  |<a href="#"> 隐私政策</a> |<a href="#">权利声明</a>  |<a href="#">广告服务</a>  |<a href="#">腾讯招聘</a>  |<a href="#">客服中心</a>  |<a href="#">网站导航</a> </p>
        <p>Copyright © 1998 - 2019 Tencent. <a href="#"> All Rights Reserved.</a></p>
        <p>腾讯公司<a href="#"> 版权所有</a><a href="#"> 腾讯网络文化经营许可证</a></p>
    </div>
    </div>

    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.bg{
    width:100%;
    height: 589.2px;
    background: #333
}
a{
    text-decoration: none; 
    color:#999999;
}
.footer-bg{
    width:1200px;
    height: 457.2px;
    margin:0 auto;
    display: flex;
    color: #999999;
}
.footer-one{
    width: 357px;
    height: 457.2px;
}
.h3{
    color:#999999;
    text-align: left;
    padding:80px 0 46px;
}
.footer-one-nav{
    display: flex;
    margin:0px;
}
.footer-one-nav>li{
    text-align: center;
}
.footer-one-nav>li>div{
    margin:0 29px 12px;
    background: url(../../public/img/sprite/footer@2x.png);
    background-size:550px;
}
.footer-one-nav>li>.pc{
    width: 37px;
    height: 48px;
    background-position: 0px 0px;
}
.footer-one-nav>li>.pc:hover{
   
    background-position: 0px -44.5px;
}
.footer-one-nav>li>.mac{
    width: 46px;
    height: 48px;
    background-position: -78px 0px;
}
.footer-one-nav>li>.mac:hover{
   
    background-position: -78px -44.5px;
}
.footer-one-nav>li>.and{
    width: 37px;
    height: 48px;
    background-position: 381px 1.1px;
}
.footer-one-nav>li>.and:hover{
   
    background-position: 381px -42px;
}
.footer-one-nav>li>.ip{
    width: 34px;
    height: 48px;
    background-position: -251px 0px;
}
.footer-one-nav>li>.ip:hover{
   
    background-position: -251px -43px;
}
.footer-onetwo-nav{
    display: flex;
    
}
.footer-onetwo-nav>li{
    margin-right: 5px;
    margin-bottom: 12px;
    width:123px;
    text-align: center;
}

.footer-two{
   width: 304px;
   height: 457.2px;
   margin-left:140px;
}
.footer-two-nav{
    display: flex;
}
.footer-two-nav>li{
width: 99px;
height :80px;
text-align: center;
}
.footer-two-nav>li>div{
    margin:0 29px 12px;
    background: url(../../public/img/sprite/footer@2x.png);
    background-size:550px;
}
.footer-two-nav>li>.qm{
    width: 41px;
    height: 48px;
    background-position: 217px 0px;
}
.footer-two-nav>li>.qm:hover{
   
    background-position: 217px -43px;
}
.footer-two-nav>li>.ss{
    width: 37px;
    height: 48px;
    background-position: 133px 0px;
}
.footer-two-nav>li>.ss:hover{
   
    background-position: 133px -43.5px;
}
.footer-two-nav>li>.Q{
    width: 40px;
    height: 48px;
    background-position: 43px 0px;
}
.footer-two-nav>li>.Q:hover{
   
    background-position: 43px -43px;
}
.footer-three{
    width: 300px;
    margin-left:90px;
}
.footer-three-nav{
    display: flex;
    flex-wrap:wrap;
}
.footer-three-nav>li{
    width:100px;
    height:20px;
    margin-bottom: 12px;
}
a:hover{
    color:#31c27c;
}
.footer-lest{
    width:1200px;
    height:84px;
    margin:0 auto;
    padding:24px 0;
}
.footer-lest>p{
    text-align: center;
}
.footer-lest{
    font-size:12px;
    color:#999999;
}
.footer-lest>p{
    height: 28px;
}
</style>

