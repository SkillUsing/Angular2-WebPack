## 数据展示


#### 使用方法


> 1. npm i     
> 1. tsconfig.json 配置新加的非Angular模块和需要排除的模块
> 1. 删除 node_modules > Echarts-ng2  > src > component > echarts-ng2.component.ngfactory.ts  文件
> 1. node_modules 修改 Webpack-configs 配置(具体在末尾)    
> 1. npm run build
> 1. dist 文件夹下的3个Js和一个Css 文件复制到 后勤项目即可



#### tsconfig.json 配置

> angular 包的配置由之前的js 文件管理变成了tsconfig.json 来管理     
> 这导致了虽然把之前冗杂配置的坑填好了之后,现在出现了适配性的坑.     
> 需要在tsconfig.json 中配置:


> 1. 导入第三方包(模块)到 tsconfig.json 的 include 数组中
> 2. 排除build不过的非必要模块 tsconfig.josn 的 exclude 数组中


##### 配置如下图所示
```
{
  "compileOnSave": false,
  "compilerOptions": {
    "outDir": "./dist/out-tsc",
    "sourceMap": true,
    "declaration": false,
    "moduleResolution": "node",
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "target": "es5",
    "typeRoots": [
      "node_modules/@types"
    ],
    "lib": [
      "es2017",
      "dom"
    ]
  },
  "include": [
    "src/**/*",
    "node_modules/echarts-ng2/src/component/echarts-ng2.module.ts"
  ]
}
```



#### Webpack-configs 配置修改

> 修改原因是因为在原本的配置中Build 出来的文件名称带有Hash这个不利于项目修改,所以我更改了Angular中的默认Webpack-configs配置,最终生成的文件名称不带Hash字符串.       



> 1. 路径 ：node_modules > @angular > cli > models > webpack-configs
> 2. 找到 common.js 和 style.js 两个文件夹
> 3. 将生成文件的命名方式删掉Hash代码的拼接部分.
> 4. 重新Build即可



