<template>
  <div style="height: 100%; margin: 0; padding: 0">
    <el-container class="home-container">
      <el-header>电商模拟demo</el-header>
      <el-container>
        <el-aside :width="isCollapse ? '64px' : '300px'" style="height:895px">
          <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
            <!-- <i class="el-icon-arrow-right" :label="false" style="width:40px;height:40px" ></i>
            <i class="el-icon-arrow-left" :label="true" style="width:40px;height:40px"></i>-->
            <el-radio-button :label="false">展开</el-radio-button>
            <el-radio-button :label="true">收起</el-radio-button>
          </el-radio-group>
          <el-menu
            default-active="1-4-1"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            :collapse="isCollapse"
          >
            <el-submenu index="1">
              <template slot="title">
                <div>
                  <el-avatar
                    src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                  ></el-avatar>
                </div>
                <span slot="title"></span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1" @click="shopping">水果购物车</el-menu-item>
                <el-menu-item index="1-2" @click="eaches">水果价格表</el-menu-item>
                <el-menu-item index="1-3" @click="time">倒计时</el-menu-item>
                <el-menu-item index="1-4" @click="timer">拖拽</el-menu-item>
                <el-menu-item index="1-5" @click="father">父子测试</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isCollapse: false
    }
  },
  methods: {
    // 侧边栏菜单的折叠与展开
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
    // 购物车页面的页面跳转
    shopping() {
      this.$router.push('/demo')
    },
    eaches() {
      this.$router.push('/echarts')
    },
    time() {
      this.$router.push('/time')
    },
    timer() {
      this.$router.push('/shoppingTime')
    },
    father() {
      this.$router.push('/fatherSon')
    }
  }
}
</script>
<style  scoped>
html,
body {
  height: 100%;
  padding: 0;
  margin: 0;
}
.el-header {
  background-color: #2f9680;
  margin-top: -60px;
  line-height: 60px;
  display: flex;
  color: #fff;
  justify-content: space-between;
}
.el-aside {
  height: 100%;
  background-color: #2f9688;
}
.home-container {
  height: 100%;
  margin: 0px;
  padding: 0px;
}
</style>
