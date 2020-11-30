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