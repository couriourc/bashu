<template xmlns="http://www.w3.org/1999/html">
  <div class="copyright-container">
    <img width="80em" :src="require('@/assets/images/common/logo.png')"/>
    <p>知识产权声明</p>
    <p>
      巴蜀拾艺人团队遵守中华人民共和国各项知识产权法律、法规和具有约束性的规范性文件，同时也高度重视知识产权保护。
    </p>
    <p>
      巴蜀拾艺人团队坚信知识产权拥有者的合法权益应该得到尊重和保护，坚决反对任何违法中华人民共和国有关知识产权的法律法规的行为。
    </p>
    <p>特此声明。</p>
  </div>
</template>

<script>
export default {
  name: "copyright"
}
</script>

<style scoped>
.copyright-container {
  height: 5em;
  text-align: center;
  color: #8c939d;
}
</style>
