<template>
  <div class="box">
    <div class="icon-box">
      <div class="icon-img">
        <!-- 一定要用svg、use标签，且#不能丢 -->
        <router-link to="/">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shouye" />
          </svg>
          <!-- to="/"指定根目录home为首显示 -->
          <div class="icon-de">首页</div>
        </router-link>
      </div>

      <div class="icon-img">
        <!-- 一定要用svg、use标签 -->
        <router-link to="/tool">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-fenlei_" />
          </svg>
          <div class="icon-de">工具</div>
        </router-link>
      </div>

      <div class="icon-img">
        <!-- 一定要用svg、use标签 -->
        <router-link to="/userinfo">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-gerenxinxi" />
          </svg>
          <div class="icon-de">个人中心</div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<style>

.icon-box {
  width: 100%;
  position: absolute;
  bottom: 0px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: #fff;
}
</style>
