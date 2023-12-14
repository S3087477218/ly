// 初始化，用于判断是否已登录
function init(){
    let key = localStorage.getItem("key")
    if (key !== "yes"){
        alert("未登录！请登录后重试")
        window.location.href = "./login.html"
    }
}

// 登出
function onLogout(){
    localStorage.setItem("key","no")
    window.location.href = "./login.html"
}

// 跳转至指定元素位置
function onJump(el){
    if (el === "0"){
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }else {
        // 获取指定的元素
        let targetElement = document.getElementById(el);

        // 滚动到指定元素位置
        targetElement.scrollIntoView({
            behavior: 'smooth' // 平滑滚动效果
        });
    }
}

// 去作品页
function onGoWorkPage(url){
    window.open(url,'_blank');
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


init()
scrollListener()
