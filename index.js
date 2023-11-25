'use strict'

const urlFor = require('hexo-util').url_for.bind(hexo)

hexo.extend.filter.register('after_generate', function (locals) {
  // 首先获取整体的配置项名称
  const config = hexo.config.tag_echarts || hexo.theme.config.tag_echarts
  // 如果配置开启
  if (!(config && config.enable)) return
  // 集体声明配置项
  const data = {
    echartsCDN: config.CDN.tag_echarts_js ? urlFor(config.CDN.tag_echarts_js) : 'https://npm.elemecdn.com/echarts@5.4.3/dist/echarts.min.js'
  }
  //cdn资源声明
  //head引入资源
  const echarts_js = `<script src="${data.echartsCDN}"></script>`
  // 注入脚本资源
  if (data.echartsCDN) {
    hexo.extend.injector.register('head_end', echarts_js, "default")
  }

},
  hexo.extend.helper.register('priority', function () {
    // 过滤器优先级，priority 值越低，过滤器会越早执行，默认priority是10
    const pre_priority = hexo.config.tag_echarts.priority ? hexo.config.tag_echarts.priority : hexo.theme.config.tag_echarts.priority
    const priority = pre_priority ? pre_priority : 10
    return priority
  })
)

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
    result += '' + content + '';
  } else {
    result += '<div id="echarts_' + Id + '" style="width: ' + Width + ' ;height: ' + Height + 'px;"></div>';
    result += '<script  async="async">';
    result += '!function () {';
    result += 'var myChart_' + Id + ' = echarts.init(document.getElementById("echarts_' + Id + '"),' + Mode + ', { renderer:\''+ Renderer +'\' });';
    result += 'var option;';
    result += '' + content + '';
    result += 'option && myChart_' + Id + '.setOption(option);';
    result += 'window.addEventListener("resize",function(){myChart_' + Id + '.resize();});';
    result += 'window.removeEventListener("resize",function(){myChart_' + Id + '.resize();});';
    result += '}();';
    result += '</script>';
  }
  return result;
}

hexo.extend.tag.register('图表', echartsMaps, { ends: true })
hexo.extend.tag.register('echarts', echartsMaps, { ends: true })