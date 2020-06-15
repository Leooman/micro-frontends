<template>
  <div :id="micro.microContainer">
    <div :class="micro.header">
      <el-menu
        :default-active="active"
        :class="micro.menu"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="/">HOME</el-menu-item>
        <el-menu-item index="/vue">VISUAL</el-menu-item>
        <el-menu-item index="/nuxt">WORKBENCH</el-menu-item>
      </el-menu>
    </div>
    <div id="sub-app" :class="micro.body">
      <nuxt/>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      active: '/'
    }
  },
  methods:{
    handleSelect(key, keyPath) {
      this.$router.push(key)
    }
  }
}
</script>>
<style module="micro">
#microContainer{
  display: flex;
  flex-direction: column;
  height: 100%;
}
.header{
  flex: 0 0 40px;
  display: flex;
  align-items: center;
  font-size: 20px;
  overflow: hidden;
}
.menu{
  width: 100%;
}
.body{
  flex: 1;
}
.body>div{
  height: 100%;
}
</style>
