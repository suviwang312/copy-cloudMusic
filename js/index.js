var data=[
    {"img":"images/pic-1.JPG",
        "p":"[VIP专享]一周新歌推荐}"
    },
    {"img":"images/pic-2.JPG",
        "p":"会讲故事的男声 歌词唱的太像自己"
    },
    {"img":"images/pic-3.JPG",
        "p":"攒了一堆好听的歌想和你一起听"
    },
    {"img":"images/pic-4.JPG",
        "p":"听说你也在找好听的华语歌"
    },
    {"img":"images/pic-5.JPG",
        "p":"测试耳机的解析度"
    },
    {"img":"images/pic-6.JPG",
        "p":"希望你过得好，但不要让我知道"
    }
];

//
//
// // <script>
// var xmlhttp;
// if (window.XMLHttpRequest)
// {
//     //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
//     xmlhttp=new XMLHttpRequest();
// }
// else
// {
//     // IE6, IE5 浏览器执行代码
//     xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
// }
// xmlhttp.onreadystatechange=function()
// {
//     if (xmlhttp.readyState==4 && xmlhttp.status==200)//成功的效果
//     {
        // console.log(xmlhttp.responseText);//读ajax成功之后把ajax.txt放的位置。
        // document.getElementById("box").innerHTML=xmlhttp.responseText;//读ajax成功之后把ajax.txt放的位置。

        // var data=JSON.parse(xmlhttp.responseText);//字符串变json对象

        var mlist=document.querySelector(".mlist");

        for (var i=0;i<data.length;i++){
            var hang=` <img src="${data[i].img}" alt="">
                        <p>${data[i].p}</p>`;
            var newli=document.createElement("li");
            newli.innerHTML=hang;
            mlist.appendChild(newli);
        }
//     }
// };
// xmlhttp.open("GET","ajax.txt",true);
// txt?t="+Math.random()清除缓存,随机数是get请求可以，post不可以
// xmlhttp.open("GET","js/index.json?t="+Math.random(),true);

// xmlhttp.open("POST","ajax.txt",true);
// xmlhttp.send();//向服务器发送请求
// </script>
