### 预览[点击](https://tienouc.gitee.io/account-app/)   

----
### mockAPI: [API endpoint] (https://5db85da7177b350014ac796d.mockapi.io/api/v1/records)   
    
### 注意事项：

#### 1. Webpack 4.X打包失败   

```
npm install jquery --save // Bootstrap4.x 依赖JQuery，所以需要先安装JQuery
npm install popper.js --save // Bootstrap4.x 依赖Popper，所以需要先安装Popper
npm install bootstrap --save // 安装Bootstrap4.x

```   
#### 2. 安装 gh-pages
   
   ```
   npm install gh-pages --save-dev  //通过 gh-pages 中间件，可以把 build 文件下的文件推送到 GitHub，并且创建 gh-pages branch
   ```   
      

#### 3. 修改 package.json   
   

```
{
    "name": "react_demo",
    "version": "1.1.0",
    "private": true,
  + "homepage": "./" // 表示你访问的页面
},

```
   

> 注意：homepage 不要设置成 github page上生成的那个链接路径，比如https://username.github.io/react_demo/。
> 如果设置成上面的连接，build打的包会这所有路径前面加上react_demo。
> 比如 index.html 文件中对同等目录下的文件引用应该是 src='./index.css'，结果会变成src='./react_demo/index.css'，这样部署后肯定无法访问，所有资源都找不到。
   
#### 4. 增加npm scripts命令，推送gh-pages   

```
"scripts": {
        ...
  + "predeploy": "npm run build" , // 将你的项目预编译成静态文件放在build文件夹
  + "deploy": "gh-pages -d build"  // 是使用gh-pages 部署你的build文件夹下的内容
},
```
   

#### 5. 打包   

```
npm run build
npm run deploy
```
   
   
----

![](https://github.com/TienOUC/Account/blob/master/Account/accounts-app/readmeImg/0.jpg)

![](https://github.com/TienOUC/Account/blob/master/Account/accounts-app/readmeImg/1.jpg)

![](https://github.com/TienOUC/Account/blob/master/Account/accounts-app/readmeImg/2.jpg)

![](https://github.com/TienOUC/Account/blob/master/Account/accounts-app/readmeImg/3.jpg)

![](https://github.com/TienOUC/Account/blob/master/Account/accounts-app/readmeImg/4.jpg)

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
