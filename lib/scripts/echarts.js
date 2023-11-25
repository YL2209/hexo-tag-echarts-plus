'use strict'

function echartsMaps(args, content) {
  args = args.join(' ').split(',')
  const Id = ((Math.random() * 9999) | 0)
  const Width = args[0] ? args[0] : '85%'
  const Height = args[1] ? args[1] : '400'
  const Mode = args[2] ? args[2] : 'null'
  const Renderer = args[3] ? args[3] : 'svg'
  // 布局
  let result = '';
  result += '<div id="echarts_' + Id + '" style="width: ' + Width + ' ;height: ' + Height + 'px;"></div>';
  result += '<script type="text/javascript">';
  result += 'var echarts_myChart' + Id + ' = echarts.init(document.getElementById("echarts_' + Id + '"), ' + Mode + ', { renderer: \'' + Renderer + '\' });';
  result += '' + content + '';
  result += 'echarts_myChart' + Id + '.setOption(option)';
  result += '</script>';
  return result;
}

hexo.extend.tag.register('图表', echartsMaps, { ends: true })
hexo.extend.tag.register('echarts', echartsMaps, { ends: true })