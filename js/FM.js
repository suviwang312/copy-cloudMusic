function changeImage()
{
    var element=document.getElementById("heart");
    if(element.src.match("FM-2.png"))
        element.src="images/FM-2new.png";
    else
        element.src="images/FM-2.png";
}

function changeImage1()
{
    var element=document.getElementById("playing");
    if(element.src.match("FM-3.png"))
        element.src="images/FM-3change.png";
    else
        element.src="images/FM-3.png";
}

function play(){
    //获取到你所定义的音频标签
    var audios = document.getElementById("music");
    //获取到img标签
    var xixi = document.querySelector(".xixi");
    //判断音频是否停止
    if(audios.paused){
        //如果已停止则播放音频并更换图标
        xixi.src = "images/FM-3.png";
        audios.play();
    }else{
        //如果已停止重新加载音频并关闭音频和更换图标
        xixi.src = "images/FM-3change.png";
        audios.pause();
        audios.load();
    }
}