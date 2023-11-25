# hexo-tag-echarts-plus

[![npm](https://unpkg.com/hexo-tag-echarts-plus/lib/assets/hexo-tag-echarts-plus.svg)]() 

本插件基于[Konwbase](https://github.com/knowiki)的[hexo-tag-echarts4](https://github.com/knowiki/hexo-tag-echarts4)修改。

Insert [Echarts](https://echarts.apache.org/handbook/zh/get-started/) in Hexo by using tags.

## 安装

1. 安装插件,在博客根目录`[Blogroot]`下打开终端，运行以下指令：

```bash
npm install hexo-tag-echarts-plus --save
```

2. 添加配置信息，以下为写法示例
  在站点配置文件`_config.yml`或者主题配置文件`_config.butterfly.yml`中添加

```yaml
# tag_echarts-plus
# see https://naokuo.top/posts/336fb21e/
tag_echarts:
  enable: true # 开关
  priority: 10 #过滤器优先权
  CDN:
    tag_echarts_js: https://npm.elemecdn.com/echarts@5.4.3/dist/echarts.min.js
```

3. 参数释义

  |参数|备选值/类型|释义|
  |:--|:--|:--|
  |enable|true/false|【必选】控制开关|
  |priority|number|【可选】过滤器优先级，数值越小，执行越早，默认为10，选填|
  |CDN.tag_echarts_js|URL|【可选】echarts标签的JS依赖，为避免CDN缓存延迟，建议将@latest改为具体版本号|

## Echarts外挂标签文档
1. [Tag Echarts Dome](https://naokuo.top/posts/336fb21e/)

2. Echarts [官方实例](https://echarts.apache.org/handbook/zh/get-started/)

## 更新记录
- 2023-11-25(v3.0.0):
  增加页面宽度自适应[参考文档](https://juejin.cn/post/6976483868689825805)
  增加完全自定义参数内容

## 已知问题
1. pjax存在兼容问题
2. 一些存在图表兼容问题