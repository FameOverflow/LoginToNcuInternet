# LoginToNcuInternet
自动登录至南昌大学宽带的脚本
## 使用指南：
### 环境配置
```
nvm use v20
npm install puppeteer
```
### 启动
重命名configExample.json为config.json,在其中将username、password、domain修改为自己的值
```
node login.js
```
### 设置为开机自启:
将login.bat中的node "Path\To\Login.js"替换为你实际的路径，\n
Win+R输入
```
shell:startup
```
然后将login.bat放入其中