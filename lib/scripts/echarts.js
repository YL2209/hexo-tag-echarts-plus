'use strict'

const { escapeDiacritic } = require('hexo-util')

function echartsMaps(args, content) {
  args = args.join(' ').split(',')
  const Id = ((Math.random() * 9999) | 0)
  const Width = args[0] ? args[0] : '85%'
  const Height = args[1] ? args[1] : '400'
  const Mode = args[2] ? args[2] : 'null'
  const Renderer = args[3] ? args[3] : 'svg'
  // 布局
  let result = '';
  if (Width == 'diy') {
    result += `${escapeDiacritic(content)}`;
  } else {
    result += `<div id="echarts_${Id}" style="width:${Width};height:${Height}px;"></div>`;
    result += `<script async data-pjax>`;
    result += `!function () {`;
    result += `  "use strict";`;
    result += `  const GetID = document.getElementById("echarts_${Id}");`;
    result += `  function naokuo_lazyLoad() {`;
    result += `    var myChart = echarts.init(GetID,${Mode}, { renderer: '${Renderer}' });`;
    result += `    var option;`;
    result += `    ${escapeDiacritic(content)}`;
    result += `    option && myChart.setOption(option);`;
    result += `    naokuo.resizeObserver(myChart.resize,GetID,2500);`;
    result += `  };`;
    result += `  naokuo.intersectionObserver(naokuo_lazyLoad, GetID);`;
    result += `}();`;
    result += `</script>`;
  }
  return result;
}

hexo.extend.tag.register('图表', echartsMaps, { ends: true })
hexo.extend.tag.register('echarts', echartsMaps, { ends: true })