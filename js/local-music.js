// <script>

var data=[
    {"h3":"侧脸",
        "p":"3.3M 于果 - 侧脸",
        "span":"···"
    },
    {"h3":"爱太痛",
        "p":"3.8M 吴克群 - Magik Great Hits 新歌+精选",
        "span":"···"
    },
    {"h3":"天亮以前说再见",
        "p":"3.8M 何野 - 天亮以前说再见",
        "span":"···"
    },
    {"h3":"Better Me",
        "p":"3.0M AGA - AGA",
        "span":"···"
    },
    {"h3":"Wake",
        "p":"[VIP专享]一周新歌推荐}",
        "span":"···"
    },
    {"h3":"和我在一起",
        "p":"2.9M 很美味 - 跟我在一起",
        "span":"···"
    }
];

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
//         // console.log(xmlhttp.responseText);//读ajax成功之后把ajax.txt放的位置。
//         // document.getElementById("box").innerHTML=xmlhttp.responseText;//读ajax成功之后把ajax.txt放的位置。
//
//         var data=JSON.parse(xmlhttp.responseText);//字符串变json对象

        var mlist=document.querySelector(".ulist");

        for (var i=0;i<data.length;i++){
            var hang=`<div><h3>${data[i].h3}</h3><p>${data[i].p}</p></div><span>${data[i].span}</span>`;
            // var hang=` <images src="${data[i].images}" alt="">
            //             <p>${data[i].p}</p>`;
            var newli=document.createElement("li");
            newli.innerHTML=hang;
            mlist.appendChild(newli);
        }
//     }
// };
// xmlhttp.open("GET","ajax.txt",true);
// txt?t="+Math.random()清除缓存,随机数是get请求可以，post不可以
// xmlhttp.open("GET","js/local-music.json?t="+Math.random(),true);
//
// // xmlhttp.open("POST","ajax.txt",true);
// xmlhttp.send();//向服务器发送请求
// </script>
