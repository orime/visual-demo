# DataV-React的测试项目

## 概念
1. 数据可视化作用
   1. 目的：借助图形化手段，清晰有效地传达与沟通信息
   2. 作用：把冰冷的数字转化为图形，揭示蕴含在数据中的规律和道理

## 环境搭建
```bash
yarn create react-app datav-react-test --template typescript
# 下面这样不能创建TS项目
yarn create react-app datav-react-test --template typescript
```

### 设置别名 alias
- 装包
```bash
yarn add react-app-rewired customize-cra -D
```
- 根目录下创建`config-voerrides.js`并写入
```js
const { override, addWebpackAlias } = require('customize-cra')
const path = require('path')
 
module.exports = override(
  // 配置路径别名
  addWebpackAlias({
    "@": path.resolve(__dirname, 'src')
  })
)
```
- 根目录下创建`paths.json`并写入
```json

{
  "compilerOptions": {
    "baseUrl": "src",
    "paths": {
      "@/*": ["*"]
    }
  }
}
```
- tsconfig.json中修改
```json
{
  ...
  "extends": "./paths.json"
}
```
### 支持scss（module）
- 直接新建scss文件即可，记得文件取名为`xxx.module.scss`

### 支持svg icon

## 工具

- [可视化生成 grid 网格布局](https://cssgrid-generator.netlify.app/)