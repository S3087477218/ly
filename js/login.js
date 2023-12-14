// 帮助按钮点击事件
function onHelp(){
    alert("账号：luoyue\n密码：123456")
}

// 登录按钮点击事件
function onLogin(){
    let usernameEl = document.getElementById("username")
    let passwordEl = document.getElementById("password")
    let username = usernameEl.value
    let password = passwordEl.value
    if (username !== "luoyue" || password !== "123456"){
        alert("用户名或密码错误")
        usernameEl.value = ""
        passwordEl.value = ""
        return false
    }
    localStorage.setItem("key","yes")
    alert("登录成功")
    window.location.href = "./index.html"
}

// 使用第三方JS库，实现3D卡片效果
VanillaTilt.init(document.getElementById("login_box"),{
    max: 15, // 最大倾斜度数
    speed: 400,  // 倾斜转换的速度
    glare: true,  // 是否开启炫光效果
    "max-glare": 1  // 最大炫光的不透明度
})
