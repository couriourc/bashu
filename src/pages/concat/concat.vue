<template>
  <div class="concat-container">
    <el-row>
      <h1 class="concat-title">联系方式</h1>
    </el-row>
    <div class="concat-bar">
      <div class="bar">
        <i class="iconfont icon-lianxidianhua bar-icon animation-scale-up"></i>
        <span class="title" style="display: inline-block">联系电话</span>
        <span class="title" style="display: inline-block">19983795789</span>
      </div>
      <div class="bar">
        <i class="iconfont icon-youxiang bar-icon animation-scale-up"></i>
        <span class="title" style="display: inline-block">邮箱</span>
        <span class="title" style="display: inline-block">bashushiyiren@163.com</span>

      </div>
      <div class="bar">
        <i class="iconfont icon-QQ bar-icon animation-scale-up"></i>
        <span class="title" style="display: inline-block">联系QQ</span>
        <span class="title" style="display: inline-block">399038705</span>
      </div>

    </div>
    <el-row>
      <h1 class="concat-title">所在地址</h1>
    </el-row>
    <div class="address-bar">
      <b-map></b-map>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    "b-map": () => import('../../components/map')
  }
}
</script>

<style lang="less" scoped>
.concat-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;

  .concat-title {
    margin: 0 auto;
    position: relative;
    color: rgb(134, 64, 64);
  }

  .concat-title::after {
    content: "";
    display: block;
    margin: 0 auto;
    width: 3em;
    height: 2px;
    background-color: rgb(134, 64, 64);
    position: absolute;
    text-align: center;
    transform: translateX(0.5em);
  }

  .concat-bar {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    height: 9em;
    margin-top: 4em;
    margin-bottom: 4em;
  }

  .bar {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    text-align: center;

    .title {
      color: #381801;
      margin: 0;
    }

    .bar-icon {
      font-size: 4em;
      color: #971b00;

      &:nth-child(1) {
        font-size: 4.5em;
      }

      &:hover {
        animation: shake 2s;
        border-radius: 50%;
      }

    }

    .address-bar {
      display: inline-block;
      height: 100px;
      width: 100%;
      z-index: 100;

    }
  }
}

</style>
