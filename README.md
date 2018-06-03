# wepy-prop-types [![npm version](https://badge.fury.io/js/wepy-prop-types.svg)](https://badge.fury.io/js/wepy-prop-types)

wepy属性类型检测插件
## 第一步1️⃣
工程目录下运行
<br>` npm install --save wepy-prop-types`

如果你已经安装了yarn，可运行
<br>` yarn add wepy-prop-types`
## 第二部使用2️⃣
在工程中导入：
```js
import {boolType,stringType,numberType,unknownType} from 'wepy-prop-types';

boolType(defaultValue);//用于bool属性类型
stringType(defaultValue);//用于string属性类型
numberType(defaultValue);//用于number属性类型
unknownType(defaultType);//用于其他对象属性类型

//defaultValue代表设置的默认值

//如：boolType(true),stringType('str'),numberType(10),unknownType({})
```
