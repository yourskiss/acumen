$(function() {
    $('.lazy').lazy({
        placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAThQTFRF////+/v/7+//2dn/tbX/oKD/mpr/n5//uLj/3t7/9vb/5+f/qKj/bW3/UVH/RUX/RET/Rkb/Vlb/i4v/4eH//v7/qqr/S0v/QkL/SUn/Skr/bm7/4OD/1dX/WVn/TEz/bGz/m5v/r6//srL/mJj/ZGT/lZX//f3/+Pj/xMT/6+v/+fn//Pz/cHD/Z2f/7e3/s7P/R0f/19f/9fX/5eX/1tb/z8//y8v/29v/w8P/UFD/zs7/gYH/YmL/VFT/Tk7/oaH/x8f/T0//ycn/xcX/XV3/Q0P/WFj/fn7/8fH/dXX/Xl7/ubn/2tr/4uL/8PD/zMz/VVX/wsL/8/P/ior/Y2P/jY3/zc3/qan/YGD/6en/pqb/V1f/Zmb/paX/U1P/t7f/2Nj/kpL/jIz/l5f/trb/6Oj/ra3/CmGvHQAAAOpJREFUeJxjZGBghINvDEAeAzeYDRV/zcAoCuJ952L8zs7wnYfxCVCFLEzDaw4GPsabjAwav9lAiv48VHnNIMZ4EahZ/SYDCIhKMz7/pfAVKMBgDDaVkfHZT6W/p4AMKyD3D+t5I8Z/N7UY9zGK6jMyXpK8a8l4UI/5HkjAk/HPJbCeY9avwALOfMd//uZ8DTTK8tlPkEDQHq6frK+A/GDGPRwgARPFwwy8Ynyv/qsc/s/wzfMqI2P48Z8//tnyPb2s9+m5mM5uRgZPIcbN5gwMr3UYDzgyHgc6nUHb7KAD0JZl0YznP91gAADjo0t/GfMLpwAAAABJRU5ErkJggg=="
    });
});

/* ############### page refresh on orientation change === START ############### */
$(window).on('orientationchange', function () 
{
    location.reload(true);
});
/* ############### page refresh on orientation change === END ############### */



$(window).on("load", function(){
    
    /* ############### header menu active === start ############### */
    var pagename = document.location.pathname;
    if(pagename == '/index.html' || pagename == '/' || pagename == '')
    {
        $("#page_home").addClass("activemenu");
    }
    else if(pagename == '/work.html' || pagename == '/work')
    {
        $("#page_work").addClass("activemenu");
    }
    
    else if(pagename == '/about-us.html'|| pagename == '/about-us')
    {
        $("#page_about").addClass("activemenu");
    }
    else if(pagename == '/contact.html' || pagename == '/contact')
    {
        $("#page_contact").addClass("activemenu");
    }
    else 
    {
        $("#headerNavigation ul").find("li a").removeClass("activemenu");    
    }
    /* ############### header menu active === end ############### */


});


    
/* ############### header Toggle click === start ############### */
$("#headerMenu").click(function(e) 
{
    e.stopPropagation();
    $(this).toggleClass("close");
    $('#headerNavigation').slideToggle(300);

    $("#headerDropdownIcon").removeClass("workmenuactive");
    $('#headerContainer').slideUp(300);
 });

/* ############### header Toggle click === end  ############### */


/* ############### header dropdown click === start ############### */
$("#headerDropdownIcon").click(function(e) 
{
    e.stopPropagation();
    $(this).toggleClass("workmenuactive");
    $('#headerContainer').slideToggle(300);
 });
 /* ############### header dropdown click === end ############### */



/* ############### body click === start ############### */
$('body').click(function (e) { 

    if($(window).width() < 1023)
    { 
        if (!$(e.target).is('#headerNavigation')) 
        {
            $("#headerMenu").removeClass("close");
            $('#headerNavigation').slideUp(300);
        }
    }

    if (!$(e.target).is('#headerContainer')) 
    {
        $("#headerDropdownIcon").removeClass("workmenuactive");
        $('#headerContainer').slideUp(300);
    }
 });
/* ############### body click === end ############### */



/* ############### search bar in header === start ############### */
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
/* ############### search bar in header === end ############### */


/* ############### search form validation === start ############### */
function searchvalidation()
{
    if($("#searchInput").val() == '')
    {
        $("#searchError").show().html('Please enter keywords');
        return false;
    }
    else 
    {
        return true;
    }
}
/* ############### search form validation === end ############### */