$(window).on("load", function(){

    /* header menu active === start */
    var pagename3 = document.location.pathname;
    var pagename2 = pagename3.split("/");
    var pagename = pagename2[2];
    console.log(pagename3, pagename2, pagename);
    if(pagename == 'index.html' || pagename == '')
    {
        $("#page_home").addClass("activemenu");
    }
    else if(pagename == 'work.html' || pagename == 'work')
    {
        $("#page_work").addClass("activemenu");
    }
    else if(pagename == 'about-us.html'|| pagename == 'about-us')
    {
        $("#page_about").addClass("activemenu");
    }
    else if(pagename == 'contact.html' || pagename == 'contact')
    {
        $("#page_contact").addClass("activemenu");
    }
    else 
    {
        $("#page_container").find("li a").removeClass("activemenu");    
    }
    /* header menu active === start */


});

$(function() {
    $('.lazy').lazy({
        placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAThQTFRF////+/v/7+//2dn/tbX/oKD/mpr/n5//uLj/3t7/9vb/5+f/qKj/bW3/UVH/RUX/RET/Rkb/Vlb/i4v/4eH//v7/qqr/S0v/QkL/SUn/Skr/bm7/4OD/1dX/WVn/TEz/bGz/m5v/r6//srL/mJj/ZGT/lZX//f3/+Pj/xMT/6+v/+fn//Pz/cHD/Z2f/7e3/s7P/R0f/19f/9fX/5eX/1tb/z8//y8v/29v/w8P/UFD/zs7/gYH/YmL/VFT/Tk7/oaH/x8f/T0//ycn/xcX/XV3/Q0P/WFj/fn7/8fH/dXX/Xl7/ubn/2tr/4uL/8PD/zMz/VVX/wsL/8/P/ior/Y2P/jY3/zc3/qan/YGD/6en/pqb/V1f/Zmb/paX/U1P/t7f/2Nj/kpL/jIz/l5f/trb/6Oj/ra3/CmGvHQAAAOpJREFUeJxjZGBghINvDEAeAzeYDRV/zcAoCuJ952L8zs7wnYfxCVCFLEzDaw4GPsabjAwav9lAiv48VHnNIMZ4EahZ/SYDCIhKMz7/pfAVKMBgDDaVkfHZT6W/p4AMKyD3D+t5I8Z/N7UY9zGK6jMyXpK8a8l4UI/5HkjAk/HPJbCeY9avwALOfMd//uZ8DTTK8tlPkEDQHq6frK+A/GDGPRwgARPFwwy8Ynyv/qsc/s/wzfMqI2P48Z8//tnyPb2s9+m5mM5uRgZPIcbN5gwMr3UYDzgyHgc6nUHb7KAD0JZl0YznP91gAADjo0t/GfMLpwAAAABJRU5ErkJggg=="
    });
});
    


$("#page_dropdown").click(function(e) 
{
    e.stopPropagation();
    $(this).toggleClass("workmenuactive");
    $('#page_workmenu').slideToggle(300);
 });
 $('body').click(function(e) // close on click body
 {    
     e.stopPropagation();
    if (e.target != $('#page_workmenu')) 
    {
        $("#page_dropdown").removeClass("workmenuactive");
        $('#page_workmenu').slideUp(300);
    }
 });


/* search bar in header === start */
function showHideSearchBar(val)
{
    if(val == 'show')
    {
        $("#searchpopupheader").fadeIn(300);
        $('body').css('overflow','hidden');  
    }
    else if(val == 'hide')
    {
        $("#searchpopupheader").fadeOut(300);
        $('body').css('overflow','auto');
        $("#searchInput").val('');
    }
    else 
    {
        alert("Condition false");
    }
}
/* search bar in header === end */

/* search validation === start */
function searchvalidation()
{
    if($("#searchInput").val() == '')
    {
        $("#searchError").show().html('Please enter keywords');
        return false;
    }
    else 
    {
       // window.location.href = "search-result.html"; 
        return true;
    }
}
/* search validation === start */