<script>
import CommonAside from "../components/CommonAside.vue";
import CommonHeader from "../components/CommonHeader.vue";

export default {
  data() {
    return {};
  },
  components: {
    CommonAside,
    CommonHeader,
  },
};
</script>

<template>
  <div>
    <el-container>
      <el-aside width="auto">
        <!-- <common-aside /> -->
        <CommonAside />
      </el-aside>
      <el-container>
        <el-header>
          <!-- <common-header />  -->
          <CommonHeader />
        </el-header>
        <el-main>
          <!-- 路由出口 -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="less">
.el-header {
  padding: 0;
}
</style>
