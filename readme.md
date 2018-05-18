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

配置`pusher`:
```
PUSHER_APP_ID=
PUSHER_APP_KEY=
PUSHER_APP_SECRET=
PUSHER_APP_CLUSTER=
```

然后还需配置`resource/assets/js/bootstrap.js`里的
```
window.Echo = new Echo({
    broadcaster: 'pusher',
    key: 'b086c9ca5cc35ac387b1', //your-pusher-key
    cluster: 'ap1',
    encrypted: true
});
```

最后附上`GitHub`地址:[https://github.com/ningge123/laravel-echo-demo](https://github.com/ningge123/laravel-echo-demo)

感谢!:laughing: