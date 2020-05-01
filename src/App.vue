<template>
  <div id="app">
    <h1>Tooltip example</h1>
    <withcss />
    <hr />
    <span v-tip="'Hello There'">Hello</span>

    <span v-tippd="'asd'">Tipped</span>
  </div>
</template>

<script>
import withcss from '@/components/withcss';
export default {
  components: {
    withcss,
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.hide {
  display: none;
}

.tooltip {
  padding: 4px 8px;
  background: #000;
  color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 4px;
  font-size: 14px;
  font-family: inherit;
  transform: translateX(-50%);
  z-index: 9999;
  -webkit-box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2);
}
</style>
