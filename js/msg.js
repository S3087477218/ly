// 初始化，用于判断是否已登录
function init(){
    let key = localStorage.getItem("key")
    if (key !== "yes"){
        alert("未登录！请登录后重试")
        window.location.href = "./login.html"
    }
}

// 滚动条监听
function scrollListener(){
    // 导航栏元素
    let navEl = document.getElementById("nav")
    // tag元素
    let tagEl = document.getElementsByClassName("tag")
    let prevScrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0

    window.addEventListener('scroll', function() {
        // 获取滚动距离
        let currentScrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0

        if (currentScrollPos > prevScrollPos) {
            // 向下滚动，隐藏导航栏
            navEl.style.transform = 'translateY(-100%)'
        } else {
            // 向上滚动，显示导航栏
            navEl.style.transform = 'translateY(0)'
            // 为导航栏显示背景色
            navEl.classList.add("nav_bg_white")
            // 为tag元素添加文字黑色效果
            for (let i = 0; i < tagEl.length; i++) {
                tagEl[i].classList.add("text_color_blank")
                console.log(tagEl[i]);
            }

            // 向上滚动至顶时
            if (currentScrollPos === 0){
                // 移除导航栏背景色
                navEl.classList.remove("nav_bg_white")
                // 为tag元素移除文字黑色效果
                for (let i = 0; i < tagEl.length; i++) {
                    tagEl[i].classList.remove("text_color_blank")
                }
            }
        }

        prevScrollPos = currentScrollPos
    })
}

// 留言提交监听
function submitListener(){
    let fEl = document.getElementById("f")
    fEl.addEventListener('submit',function (event){
        event.preventDefault()
        let msgEl = document.getElementById("msg")
        if (msgEl.value !== ""){
            alert("留言成功")
            window.location.href = "./index.html"
            return false
        }else {
            alert("请输入留言信息")
        }
    })
}

init()
scrollListener()
submitListener()