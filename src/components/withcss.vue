<template>
  <div class="container mx-auto">
    <p>With CSS ::before & data-attributes</p>
    <div class="container">
      <div class="my-8">
        <input type="radio" id="top" value="top" v-model="direction" />
        <label for="top">Top</label>
        <input type="radio" id="bottom" value="bottom" v-model="direction" />
        <label for="bottom">Bottom</label>
        <input type="radio" id="right" value="right" v-model="direction" />
        <label for="right">Right</label>
        <input type="radio" id="left" value="left" v-model="direction" />
        <label for="left">Left</label>
      </div>
      <div class="my-8">
        <label for="message">Tooltip Message</label>
        <br />
        <input class="input" id="message" type="text" v-model="message" />
      </div>
      <div>
        <button :tip="message" class="tooltip" :class="direction">
          Show {{ direction }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      direction: 'top',
      message: 'Hello there!',
    };
  },
};
</script>

<style scoped>
.container {
  max-width: 400px;
}
.mx-auto {
  margin: 0 auto;
}

.my-8 {
  margin: 1.5rem 0;
}

.input {
  border: 1px solid gray;
  box-sizing: border-box;
  padding: 12px 8px;
  margin: 4px 0;;
}

.tooltip {
  display: block;
  background-color: #667eea;
  border-radius: 4px;
  border: none;
  color: white;
  padding: 10px 15px;
  position: relative;
  margin: 15px auto;
  text-align: center;
  text-transform: capitalize;
}

.tooltip::after {
  background-color: #333;
  border-radius: 5px;
  color: #fff;
  display: none;
  padding: 10px 15px;
  position: absolute;
  text-align: center;
  z-index: 999;
}

.tooltip::before {
  background-color: #333;
  content: ' ';
  display: none;
  position: absolute;
  width: 15px;
  height: 15px;
  z-index: 999;
}

.tooltip:hover::after {
  display: block;
}

.tooltip:hover::before {
  display: block;
}

.tooltip.top::after {
  content: attr(tip);
  top: 0;
  left: 50%;
  transform: translate(-50%, calc(-100% - 10px));
}

.tooltip.top::before {
  top: 0;
  left: 50%;
  transform: translate(-50%, calc(-100% - 5px)) rotate(45deg);
}

.tooltip.bottom::after {
  content: attr(tip);
  bottom: 0;
  left: 50%;
  transform: translate(-50%, calc(100% + 10px));
}

.tooltip.bottom::before {
  bottom: 0;
  left: 50%;
  transform: translate(-50%, calc(100% + 5px)) rotate(45deg);
}

.tooltip.right::after {
  content: attr(tip);
  top: 0;
  right: 0;
  transform: translateX(calc(100% + 10px));
}

.tooltip.right::before {
  top: 50%;
  right: 0;
  transform: translate(calc(100% + 5px), -50%) rotate(45deg);
}

.tooltip.left::after {
  content: attr(tip);
  top: 0;
  left: 0;
  transform: translateX(calc(-100% - 10px));
}

.tooltip.left::before {
  top: 50%;
  left: 0;
  transform: translate(calc(-100% - 5px), -50%) rotate(45deg);
}
</style>
