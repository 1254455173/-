$(function(){
            $('#loginForm').validate({
                  rules: {
                      username: {
                        required: true,
                        minlength: 2
                      },
                      pwd: {
                        required: true,
                        minlength: 5
                      }

                  },
                  messages: {
                      username: {
                        required: "请输入用户名",
                        minlength: "用户名必需由两个字母组成"
                      },
                      pwd: {
                        required: "请输入密码",
                        minlength: "密码长度不能小于 5 个字母"
                      }
                  }

            });
        });