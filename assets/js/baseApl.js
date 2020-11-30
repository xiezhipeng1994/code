//这是jQuery基于xhr封装的一个函数
//无论你是发送$.get()还是$.post()或者$.ajax()请求 
//在发送这些请求之前都会先调用ajaxPrefilter函数
//ajaxPrefilter函数的作用就是拦截每一次给ajax的配置项
//即包括URL在内的信息  这样就可以减少每次都需要输入URL的根路径
$.ajaxPrefilter(function (options) {
    //只有这个函数调用完才会发起ajax请求
    options.url = 'http://ajax.frontend.itheima.net' + options.url
    console.log(options.url);

});
//相当于ajax（）就是调用了该函数 将里面对象当参数  options为形参 接收这个对象实参
// options.url = 'http://ajax.frontend.itheima.net' + options.url拼接处一个完整的URL地址
// $.ajaxPrefilter(function (options) {
//     //只有这个函数调用完才会发起ajax请求
//     options.url = 'http://ajax.frontend.itheima.net' + options.url
//     console.log(options.url);

// });
// $.ajax({
//     type: 'POST',
//     url: '/api/login',
//     //一次性获取表单内的数据
//     data: $(this).serialize(),
//     success: function (res) {
//         if (res.status !== 0) {
//             return layer.msg(res.message)
//         }
//         layer.msg('注册成功，请登录');
//         //将res.toke存于本地（请求成功相当于进入了大门 res.toke相当于进入卧室的钥匙 即权限）
//         //将登录成功的得到的token字符串保存到localStorage中  等到进入页面之后
//         //需要权限的时候取出来用
//         localStorage.setItem('token', res.token)
//         //成功之后跳转页面
//         location.href = '/index.html'
//     }