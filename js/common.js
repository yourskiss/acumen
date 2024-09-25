$(function() {
    $('.lazy').lazy({
      //  placeholder: "../images/loader.gif"
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



/* ############### filterwork === start ############### */
function filterwork(val)
{
    $("#pageloader").fadeIn(200);
    $(".workmenu dl dt").removeClass("workactive");
    $(".workboxcontainer").slideUp(500);

    $("#worktab_"+val).addClass("workactive");
    $("#workbox_"+val).slideDown(500);
    setTimeout(function(){ $("#pageloader").fadeOut(300);  },1000);

 }
/* ############### filterwork === end  ############### */
