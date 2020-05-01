import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.directive('tip', {
  bind: function (el, binding) {
    el.addEventListener('mouseenter', function () {
      var $tooltip = document.createElement('div')
      var $tooltipDimension = el.getBoundingClientRect()
      $tooltip.setAttribute('class', 'tooltip')
      $tooltip.setAttribute('id', 'tooltip')
      $tooltip.innerHTML = binding.value
      $tooltip.style.left = $tooltipDimension.left + ($tooltipDimension.width / 2) + 'px'
      $tooltip.style.top = $tooltipDimension.top - 30 + 'px'
      document.body.appendChild($tooltip)
    })
    el.addEventListener('mouseleave', function () {
      var elemToRemove = document.getElementById('tooltip')
      elemToRemove.parentNode.removeChild(elemToRemove)
    })
  }
});

Vue.directive('tippd', {
  bind: function (el, binding) {
    let span = document.createElement('span');
    let text = document.createTextNode('This is tooltip')
    el.style.position = "relative";
    span.style.display = "inline-block";
    span.appendChild(text);
    el.appendChild(span)
    span.classList.add('hide')
    console.log(binding)
  }
});

new Vue({
  render: h => h(App),
}).$mount('#app')
