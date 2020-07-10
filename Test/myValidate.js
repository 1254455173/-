$(function(){
            $('#form1').validate({
                  rules: {
                      username: {
                        required: true,
                        minlength: 2
                      },
                      pwd: {
                        required: true,
                        minlength: 5
                      },
                      repwd: {
                        required: true,
                        minlength: 5,
                        equalTo: "#pwd"
                      },
                      email: {
                        required: true,
                        email: true
                      },
                      question: {
                        required: true
                      },
                      answer:{
                        required: true
                      },
                      agree:{
                        required: true
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
                      },
                      repwd: {
                        required: "请输入密码",
                        minlength: "密码长度不能小于 5 个字母",
                        equalTo: "两次密码输入不一致"
                      },
                      email: "请输入一个正确的邮箱",
                      question:"请输入密保问题",
                      answer: "请输入密保答案",
                      agree: "请确认阅读并同意"
                  }

            });
        });