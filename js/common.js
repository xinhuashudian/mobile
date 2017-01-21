/**
 * Created by maikuraki on 2017/1/19.
 */
$(function(){
    var ua = navigator.userAgent;
    var ipad = ua.match(/(iPad).*OS\s([\d_]+)/),
        isIphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),
        isAndroid = ua.match(/(Android)\s+([\d.]+)/),
        isMobile = isIphone || isAndroid;
    iniDocSize = function(){
        if(isMobile) {
            var deviceWidth = $(window).width();
            var deviceHeight = window.screen.height;
            if(deviceHeight > deviceWidth){
                if(deviceWidth < 960){
                    var rem = (deviceWidth/10);
                }else{
                    var rem = 36;
                }
            }else{
                var rem = (deviceWidth/10);
            }
            $("html").css("font-size",rem + "px");
        }else{
            $("html").css("font-size","56px");
        }
    };
    iniDocSize();
    $(window).resize(function(){
        iniDocSize();
    });



    $('.my-check-box .icon').click(function () {
        var input = $(this).siblings('.hide-input');
        input.click();
        if(input[0].checked){
            $(this).addClass('checked');
        }else{
            $(this).removeClass('checked');
        }
    })
});