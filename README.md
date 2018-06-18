# laravel 广播例子

这里使用了`私有频道`和`Presence 频道`做了不同的例子:

`Presence 频道`当用户加入或发送消息该频道时,通知其它加入该频道的用户：

![file](https://lccdn.phphub.org/uploads/images/201805/18/10797/TJdYD1aX2m.gif?imageView2/2/w/1240/h/0)

![file](https://lccdn.phphub.org/uploads/images/201805/18/10797/TalVOx9dFQ.gif?imageView2/2/w/1240/h/0)

`私有频道`我这里定义了一个`artisan`命令发送消息给指定的用户:
```
php artisan command:push-message {user} {message}
```
第一个参数是发送哪个用户，第二个参数是需要发送的消息,如图:

![file](https://lccdn.phphub.org/uploads/images/201805/18/10797/C6oxLVsXZ5.gif?imageView2/2/w/1240/h/0)

可以帮助大家在看广播系统时结合例子起来看更深刻:relaxed:

下载项目

```angular2html
git clone git@github.com:ningge123/laravel-echo-demo.git
```

执行:
```angular2html
composer install 
```
下载前端资源
```
npm install
```
配置数据库:
```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=pusher
DB_USERNAME=homestead
DB_PASSWORD=secret
```

配置`redis`:
```
REDIS_HOST=127.0.0.1
REDIS_PASSWORD=null
REDIS_PORT=6379
```

然后还需安装`laravel-echo-server`
```
npm install -g laravel-echo-server  # 这里是全局安装
```

#### 初始化服务端

```shell
$ laravel-echo-server init 
? Do you want to run this server in development mode? Yes
? Which port would you like to serve from? 6001
? Which database would you like to use to store presence channel members? redis
? Enter the host of your Laravel authentication server. archerwong.cn
? Will you be serving on http or https? http
? Do you want to generate a client ID/Key for HTTP API? Yes
? Do you want to setup cross domain access to the API? No
appId: c953434932b06864
key: 551440289d2d41c81e87d55c1d0217e5
Configuration file saved. Run laravel-echo-server start to run server.
```
#### 运行服务端
```shell
$ laravel-echo-server start

L A R A V E L  E C H O  S E R V E R

version 1.3.6

⚠ Starting server in DEV mode...

✔  Running at localhost on port 6001
✔  Channels are ready.
✔  Listening for http events...
✔  Listening for redis events...

Server ready!
```

最后附上`GitHub`地址:[https://github.com/ningge123/laravel-echo-demo](https://github.com/ningge123/laravel-echo-demo)

#### 备注

之前使用的是`pusher`发现太慢了，然后改成`redis`

感谢!:laughing: