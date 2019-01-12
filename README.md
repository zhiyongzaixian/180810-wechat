## 小程序
### 1. 小程序的特点
  1. 没有DOM对象，一切基于组件化
  2. 体积特别小，刚发布的是1M， 后来提升到2M
  3. 下载安装特别快，用户感觉不到安装额过程
### 2. 重要的文件
  1. .wxml ---- 结构
  2. .wxss ---- 样式
  3. .js   ---- 行为(数据)
  4. .json ---- 配置文件
### 3. 小程序的适配方案
  1. 底层已经做了viewport适配 布局视口 === 视觉视口
  2. 适配单位(rpx -- 物理像素单位)： iphone6: 1rpx = 1物理像素 = 0.5px
### 4. 小程序绑定事件
  1. 冒泡事件： bind + 事件名
  2. 非冒泡事件: catch + 事件名
### 4. 注册小程序
  1. 创建app.json ---- 全局的配置文件
  2. 创建app.js   ---- 注册小程序应用 App({})
  3. 页面中创建index.js ---- Page({}) ---- 注册页面
  4. 初始化数据： data选项中
  
  
### 5. 数据遍历
  1. wx:for='目标' 默认的下标:index, 默认的个体：item
  2. 像模板导入数据： data='{{...item}}'
  
  
### 6. 数据传递
  1. 绑定事件向当前事件的event对象传递数据： data-key=value
    1. 获取： event.target || event.currentTarget
  2. 路由跳转传递数据： 路由地址?key=value
    1. 获取：跳转目标页面onload中的实参
    
### 7. 获取用户登录信息
  1. api: wx.getUserInfo() ---> 不能自动弹出授权窗口 ---> 初始化会失败
  
  
### 8. 本地数据缓存
  1. wx.setStorage(异步) || wx.setStorageSync(同步) 
  2. wx.getStorage(异步) || wx.getStorageSync(同步) 
  3. 所有数据存储上限为 10MB
  
### 9. 前后台交互
  1. 发送请求的方式： wx.request()
  2. 处于安全起见只能发送https请求
  3. 一个接口配置20个域名
  4. 并发量最大10个