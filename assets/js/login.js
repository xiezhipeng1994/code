$(function () {
    //设置注册与登录
    //点击'去注册账号'链接  隐藏登录页面  
    $('#reg_a').on('click', function () {
        $('.register').hide()
        $('.enroll').show()
    })
    //点击'去登录'链接   隐藏注册页面
    $('#enr_a').on('click', function () {
        $('.enroll').hide()
        $('.register').show()
    })

    // 自定义规则   为登录表单的密码框设置
    // 从layui中获取from   相当于引入jQuery有一个$
    // 引入layui有一个from
    var form = layui.form
    // 从layui中获取layer   相当于引入jQuery有一个$
    var layer = layui.layer
    //通过from.verify()函数自定义校验规则
    form.verify({
        //自定义与一个叫做pwd的校验规则
        pwd: [/^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'],
        //校验密码两次相同的规则
        repwd: function (value) {//value为确认密码框的值
            //核心为拿到密码框的值 和确认密码框的值对比即可
            //.enroll 与[name=password]中间必须有空格
            var user = $('.enroll [name=password]').val()
            if (user !== value) {
                return '两次密码不一致'
            }

        }

    })

    // 监听注册表单的提交事件
    //监听表单的注册提交事件
    $('#form_reg ').on('submit', function (e) {
        //阻止表单的默认提交事件
        e.preventDefault();
        //发起请求
        var data = {
            username: $('#form_reg [name=username]').val(),
            password: $('#form_reg [name=password]').val()
        }
        $.post('http://ajax.frontend.itheima.net/api/reguser', data, function (res) {
            //判断提交事件是否成功
            if (res.status !== 0) {
                return layer.msg(res.message)
            }
            //使用layui提示消息
            layer.msg('注册成功，请登录');
            //模拟点击事件   点击注册按钮跳转到登录页面
            $('#enr_a').click()
        })

    })

    //监听表单的提交的事件
    $('#form_login').on('submit', function (e) {
        //阻止表单的默认提交事件
        e.preventDefault();
        $.ajax({
            type: 'POST',
            url: 'http://ajax.frontend.itheima.net/api/login',
            //一次性获取表单内的数据
            data: $(this).serialize(),
            success: function (res) {
                if (res.status !== 0) {
                    return layer.msg(res.message)
                }
                layer.msg('注册成功，请登录');
                //将res.toke存于本地（请求成功相当于进入了大门 res.toke相当于进入卧室的钥匙 即权限）
                //将登录成功的得到的token字符串保存到localStorage中  等到进入页面之后
                //需要权限的时候取出来用
                localStorage.setItem('token', res.token)
                //成功之后跳转页面
                location.href = '/index.html'
            }



        })

    })




})
