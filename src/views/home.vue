<template>
  <div class="home">
    <div class="header">
      <div>
        <img src="" alt="">
        <router-link v-for="item in nav" :key='item.id' :to="item.path">{{item.name}}</router-link>
      </div>
      <p>
        <span>白天</span>
        <i>/</i>
        <span>夜晚</span>
      </p>
    </div>
    <div class="main">
      <div class="top">
        <div>
          <h1>Hi!Im</h1>
          <h1>Eric</h1>
          <h1>Wang.</h1>
          <p>xXxxxxxxxxxxxxxxxxxxXxxxXXXXXxxXXXXXxxxxxxxxxxxxxxxxxxxxxxxxxxxXxxXXXXXXxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxXXXXXXXxxxxxxxxxxX</p>
          <span>Welcome to my space!</span>
        </div>
        <img src="" alt="">
      </div>
      <div class="projects">
        <div class="caption">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 45 45">
              <path id="Path_301" data-name="Path 301" d="M59.928,0H31a3.214,3.214,0,0,0-3.215,3.215V32.141A12.858,12.858,0,0,0,40.642,45H69.571a3.214,3.214,0,0,0,3.215-3.215V12.856A12.856,12.856,0,0,0,59.928,0M41.006,33.325a1.576,1.576,0,0,1-2.176-.467l-6.2-9.6a1.575,1.575,0,0,1,0-1.706l6.078-9.411a1.572,1.572,0,0,1,2.174-.467,1.573,1.573,0,0,1,.467,2.174l-5.527,8.558,5.649,8.746a1.576,1.576,0,0,1-.467,2.174m16.04-19.573L46.618,32.762a1.573,1.573,0,1,1-2.757-1.514l10.43-19.01a1.572,1.572,0,0,1,2.755,1.514m10.895,9.507-6.2,9.6A1.572,1.572,0,0,1,59.1,31.152l5.65-8.746-5.527-8.558a1.572,1.572,0,0,1,2.641-1.706l6.078,9.411a1.575,1.575,0,0,1,0,1.706" transform="translate(-27.786)" fill="#3574be"/>
            </svg>
            <h3>Projects</h3>
          </div>
          <router-link to="/Projects">View All</router-link>
        </div>
        <div class="proList">
          <div class="proBox">
            <img src="" alt="" >
            <div class="proText">
              <h4>Traffic Flow Simulation</h4>
              <p>The implementation of IDM in real-lifesituations</p>
              <i>2022.11 - 2022.12</i>
              <div>
                <strong></strong>
                Python
                <del></del>
                <span>Math Modeling</span>
                <span>PyGame</span>
                <span>pit</span>
              </div>
            </div>
            <a href="https://www.baidu.com/" class="proCode">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 25 25">
                <path id="Path_320" data-name="Path 320" d="M45.643,0H29.572a1.786,1.786,0,0,0-1.786,1.786v16.07A7.143,7.143,0,0,0,34.928,25H51a1.786,1.786,0,0,0,1.786-1.786V7.142A7.142,7.142,0,0,0,45.643,0M35.13,18.514a.876.876,0,0,1-1.209-.26l-3.444-5.333a.875.875,0,0,1,0-.948l3.377-5.228a.874.874,0,0,1,1.208-.26.874.874,0,0,1,.26,1.208l-3.071,4.754,3.139,4.859a.876.876,0,0,1-.26,1.208M44.041,7.64,38.248,18.2a.874.874,0,1,1-1.532-.841L42.511,6.8a.873.873,0,0,1,1.531.841m6.053,5.282-3.445,5.333a.873.873,0,0,1-1.467-.948l3.139-4.859L45.25,7.693a.873.873,0,0,1,1.467-.948l3.377,5.228a.875.875,0,0,1,0,.948" transform="translate(-27.786)"/>
              </svg>
              <h5>Code</h5>
            </a>
          </div>
          <div class="proBox">
            <img src="" alt="" >
            <div class="proText">
              <h4>Traffic Flow Simulation</h4>
              <p>The implementation of IDM in real-lifesituations</p>
              <i>2022.11 - 2022.12</i>
              <div>
                <strong></strong>
                Python
                <del></del>
                <span>Math Modeling</span>
                <span>PyGame</span>
                <span>pit</span>
              </div>
            </div>
            <a href="https://www.baidu.com/" class="proCode">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 25 25">
                <path id="Path_320" data-name="Path 320" d="M45.643,0H29.572a1.786,1.786,0,0,0-1.786,1.786v16.07A7.143,7.143,0,0,0,34.928,25H51a1.786,1.786,0,0,0,1.786-1.786V7.142A7.142,7.142,0,0,0,45.643,0M35.13,18.514a.876.876,0,0,1-1.209-.26l-3.444-5.333a.875.875,0,0,1,0-.948l3.377-5.228a.874.874,0,0,1,1.208-.26.874.874,0,0,1,.26,1.208l-3.071,4.754,3.139,4.859a.876.876,0,0,1-.26,1.208M44.041,7.64,38.248,18.2a.874.874,0,1,1-1.532-.841L42.511,6.8a.873.873,0,0,1,1.531.841m6.053,5.282-3.445,5.333a.873.873,0,0,1-1.467-.948l3.139-4.859L45.25,7.693a.873.873,0,0,1,1.467-.948l3.377,5.228a.875.875,0,0,1,0,.948" transform="translate(-27.786)"/>
              </svg>
              <h5>Code</h5>
            </a>
          </div>
          <div class="proBox">
            <img src="" alt="" >
            <div class="proText">
              <h4>Traffic Flow Simulation</h4>
              <p>The implementation of IDM in real-lifesituations</p>
              <i>2022.11 - 2022.12</i>
              <div>
                <strong></strong>
                Python
                <del></del>
                <span>Math Modeling</span>
                <span>PyGame</span>
                <span>pit</span>
              </div>
            </div>
            <a href="https://www.baidu.com/" class="proCode">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 25 25">
                <path id="Path_320" data-name="Path 320" d="M45.643,0H29.572a1.786,1.786,0,0,0-1.786,1.786v16.07A7.143,7.143,0,0,0,34.928,25H51a1.786,1.786,0,0,0,1.786-1.786V7.142A7.142,7.142,0,0,0,45.643,0M35.13,18.514a.876.876,0,0,1-1.209-.26l-3.444-5.333a.875.875,0,0,1,0-.948l3.377-5.228a.874.874,0,0,1,1.208-.26.874.874,0,0,1,.26,1.208l-3.071,4.754,3.139,4.859a.876.876,0,0,1-.26,1.208M44.041,7.64,38.248,18.2a.874.874,0,1,1-1.532-.841L42.511,6.8a.873.873,0,0,1,1.531.841m6.053,5.282-3.445,5.333a.873.873,0,0,1-1.467-.948l3.139-4.859L45.25,7.693a.873.873,0,0,1,1.467-.948l3.377,5.228a.875.875,0,0,1,0,.948" transform="translate(-27.786)"/>
              </svg>
              <h5>Code</h5>
            </a>
          </div>
          <div class="proBox">
            <img src="" alt="" >
            <div class="proText">
              <h4>Traffic Flow Simulation</h4>
              <p>The implementation of IDM in real-lifesituations</p>
              <i>2022.11 - 2022.12</i>
              <div>
                <strong></strong>
                Python
                <del></del>
                <span>Math Modeling</span>
                <span>PyGame</span>
                <span>pit</span>
              </div>
            </div>
            <a href="https://www.baidu.com/" class="proCode">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 25 25">
                <path id="Path_320" data-name="Path 320" d="M45.643,0H29.572a1.786,1.786,0,0,0-1.786,1.786v16.07A7.143,7.143,0,0,0,34.928,25H51a1.786,1.786,0,0,0,1.786-1.786V7.142A7.142,7.142,0,0,0,45.643,0M35.13,18.514a.876.876,0,0,1-1.209-.26l-3.444-5.333a.875.875,0,0,1,0-.948l3.377-5.228a.874.874,0,0,1,1.208-.26.874.874,0,0,1,.26,1.208l-3.071,4.754,3.139,4.859a.876.876,0,0,1-.26,1.208M44.041,7.64,38.248,18.2a.874.874,0,1,1-1.532-.841L42.511,6.8a.873.873,0,0,1,1.531.841m6.053,5.282-3.445,5.333a.873.873,0,0,1-1.467-.948l3.139-4.859L45.25,7.693a.873.873,0,0,1,1.467-.948l3.377,5.228a.875.875,0,0,1,0,.948" transform="translate(-27.786)"/>
              </svg>
              <h5>Code</h5>
            </a>
          </div>
        </div>
      </div>
      <div class="photography">
        <div class="caption">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 45 44.998">
              <path id="Path_302" data-name="Path 302" d="M32.142,0H3.215A3.214,3.214,0,0,0,0,3.213V32.141A12.856,12.856,0,0,0,12.856,45H41.785A3.214,3.214,0,0,0,45,41.783V12.856A12.858,12.858,0,0,0,32.142,0m-.6,14.154-.029.757-.057.129c-.037.084-3.8,8.068-15.34,8.642v7.162a3.328,3.328,0,0,1,2.649,3c0,1.759-1.786,3.19-3.982,3.19S10.8,35.607,10.8,33.848a3.332,3.332,0,0,1,2.651-3V14.154A3.332,3.332,0,0,1,10.8,11.148c0-1.757,1.788-3.19,3.984-3.19s3.982,1.433,3.982,3.19a3.33,3.33,0,0,1-2.649,3.006v7.3c8.848-.494,12.113-5.784,12.76-7.029v-.267a3.33,3.33,0,0,1-2.649-3.006c0-1.757,1.786-3.19,3.982-3.19S34.2,9.391,34.2,11.148a3.332,3.332,0,0,1-2.651,3.006" fill="#5a6757"/>
            </svg>
            <h3>Photography</h3>
          </div>
          <router-link to="/photography">View All</router-link>
        </div>
        <div class="ptyBox">
          <div class="ptyList">
            <img src="" alt="">
            <div>
              <h4>Suzhou,Jiangsu</h4>
              <p>Chine</p>
              <p><strong>123</strong>Photos</p>
            </div>
          </div>
          <div class="ptyList">
            <img src="" alt="">
            <div>
              <h4>Suzhou,Jiangsu</h4>
              <p>Chine</p>
              <p><strong>123</strong>Photos</p>
            </div>
          </div>
          <div class="ptyList">
            <img src="" alt="">
            <div>
              <h4>Suzhou,Jiangsu</h4>
              <p>Chine</p>
              <p><strong>123</strong>Photos</p>
            </div>
          </div>
          <div class="ptyList">
            <img src="" alt="">
            <div>
              <h4>Suzhou,Jiangsu</h4>
              <p>Chine</p>
              <p><strong>123</strong>Photos</p>
            </div>
          </div>
        </div>
      </div>
      <div class="message">
        <textarea name="" id=""></textarea>
        <div>
          <span>Mabe by <strong>Eric Wang</strong></span>
          <span>Email: <strong>yixiaowang2001@gmail.com</strong></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  const nav = [
    {
      id:0,
      path:"/projects",
      name:'Projects'
    },
    {
      id:1,
      path:"/photography",
      name:'Photography'
    },
    {
      id:2,
      path:"/about",
      name:'About'
    },
    {
      id:3,
      path:"/github",
      name:'Github'
    },
  ]

</script>

<style scoped lang="scss">
  .home{
    width: 100%;
  }
  .header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    border: 1px solid #ddd;
    padding: 0 5%;
    box-sizing: border-box;
    height: 80px;
    font-size: 14px;
    color: #999;
    div{
      display: flex;
      align-items: center;
    }
    img{
      display: block;
      width: 40px;
      height: 40px;
      border: 1px solid #ddd;
      border-radius: 50%;
    }
    a{
      color: #999;
      margin-left: 50px;
      font-size: 18px;
    }
    i{
      margin: 0 3px;
    }
    p{
      cursor: pointer;
    }
    span:nth-of-type(1){
      font-size: 16px;
      color:#000 ;
    }
  }
  .main{
    width: 100%;
    background: #fafafa;
    padding: 100px 10%;
    box-sizing: border-box;
  }
  .top{
    display:flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
    div{
      width: 50%;
    }
    h1{
      margin-bottom: 15px;
      color: #000;
      font-size: 64px;
    }
    p{
      word-break:break-all;
      width: 100%;
      white-space: pre-wrap;
      margin: 60px 0;
      font-size: 22px;
    }
    span{
      font-size: 22px;
    }
    img{
      width: 500px;
      height: 500px;
      border-radius: 50%;
      border: 1px solid #0079ba;
    }
  }
  .projects{
    margin-top: 100px;
  }
  .caption{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    div{
      display: flex;
      align-items: center;
    }
    h3{
      font-size: 26px;
      margin-left: 10px;
    }
    a{
      display: block;
      padding: 5px 15px;
      border: 1px solid #ddd;
      border-radius: 20px;
      color: #000;
      background: #fff;
      font-size: 14px;
      font-weight: 700;
    }
  }
  .proList{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .proBox{
    margin-top: 40px;
    width: 49%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    border: 1px solid #ddd;
    box-shadow: 2px 2px 5px 1px #999;
    border-radius: 10px;
    padding: 20px;
    box-sizing: border-box;
    img{
      display: block;
      width: 120px;
      height: 120px;
      border-radius: 10px;
      border: 1px solid #ddd;
      flex-shrink: 0;
    }
    h4{
      line-height: 1;
      margin: 0;
      font-size: 18px;
    }
  }
  .proText{
    width: 0;
    flex-grow: 1;
    margin: 0 20px;
    p{
      margin: 10px 0;
      color: #999;
      min-height: 25px;
      line-height: 25px;
    }
    i{
      display: block;
      font-size: 13px;
      margin:0 0 5px;
    }
    div{
      display: flex;
      align-items: center;
      font-size: 12px;
      width: 100%;
      overflow: hidden;
    }
    strong{
      display: block;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: #3474bf;
      flex-shrink: 0;
      margin-right: 5px;
    }
    del{
      display: block;
      height: 15px;
      width: 1px;
      margin: 0 5px;
      background: #000;
      flex-shrink: 0;
    }
    span{
      display: block;
      height: 15px;
      line-height: 15px;
      background: #fff;
      display: block;
      border: 1px solid #666;
      margin-right: 10px;
      padding: 0 5px;
      border-radius: 5px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      flex-shrink: 0;
    }
  }
  .proCode{
    width: 80px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    border: 1px solid #ddd;
    padding: 3px 10px;
    box-sizing: border-box;
    border-radius: 5px;
    h5{
      margin-left: 10px;
    }
  }
  .photography{
    margin-top: 80px;
  }
  .ptyBox{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .ptyList{
    margin-top: 20px;
    width: 24%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    background: #fff;
    border: 1px solid #ddd;
    box-shadow: 2px 2px 5px 1px #999;
    border-radius: 10px;
    padding: 20px;
    box-sizing: border-box;
    img{
      display: block;
      width: 120px;
      height: 120px;
      border-radius: 10px;
      border: 1px solid #ddd;
      flex-shrink: 0;
    }
    div{
      margin-left: 20px;
      flex-grow: 1;
    }
    h4{
      font-size: 18px;
      min-height: 60px;
    }
    p{
      color: #999;
      font-size: 14px;
    }
    strong{
      margin-right: 5px;
    }
  }
  .message{
    margin-top: 80px;
    textarea{
     display: block;
     width: 100%; 
     height: 400px;
     border: 1px solid #ddd;
    }
    div{
      margin-top: 60px;
      padding-top: 40px;
      border-top: 1px solid #ddd;
      display: flex;
      justify-content: space-between;
    }
  }
</style>
