<template>
  <div class="common-layout">
    <el-container>
      <el-header class="header">
        <div><img alt="vue.logo" src="../assets/logo.png" /></div>
        <h2>Backend Management System</h2>
        <div class="logout">Logout</div>
      </el-header>
      <el-container>
        <el-aside class="aside" width="200px">
          <el-menu active-text-color="#ffd04b" background-color="#545c64" class="el-menu-vertical-demo" default-active="2"
            text-color="rgb(247,153,74)" router>
            <el-menu-item v-for="item in routerList" :index="item.path" :key="item.path">
              <span>{{ item.meta.title }}</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main class="main-layout">
          <router-view> </router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
  
  

<script lang="ts">
import { defineComponent } from "vue";
import router from "@/router";
import { useRoute } from "vue-router";

export default defineComponent({
  setup() {

    const route = useRoute();


    const handleOpen = (key: string, keyPath: string[]) => {
      console.log(key, keyPath);
    };
    const handleClose = (key: string, keyPath: string[]) => {
      console.log(key, keyPath);
    };

    const routerList = router
      .getRoutes()
      .filter((el) => el.meta.isShow == true);
    console.log(routerList);

    return { routerList, handleOpen, handleClose };
  },
});
</script>

<style lang="scss" scoped>
.header {
  position: inherit;
  height: 80px;
  background-color: burlywood;
  color: white;
  display: flex;
  justify-content: space-between;

  img {
    width: 80px;
  }

  h2,
  .logout {
    text-align: center;
    height: 80px;
    line-height: 80px;
    color: aliceblue;
  }

  .grid4 {
    background-color: aquamarine;
  }
}

.main-layout {
  padding: 0;
}

.aside {
  .el-menu-vertical-demo {
    background-color: #545c64;
    color: white;
    /** 100vh means the height of screen */
    height: 100vh;
  }
}
</style>