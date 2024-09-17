$(window).on("load", function(){

    /* header menu active === start */
    var pagename = document.location.pathname;
    if(pagename == '/index.html' || pagename == 'index.html' || pagename == '/' || pagename == '')
    {
        $("#page_home").addClass("activemenu");
    }
    else if(pagename == '/work.html' || pagename == 'work.html' || pagename == 'work')
    {
        $("#page_work").addClass("activemenu");
    }
    else if(pagename == '/about-us.html' || pagename == 'about-us.html' || pagename == 'about-us')
    {
        $("#page_about").addClass("activemenu");
    }
    else if(pagename == '/contact.html' || pagename == 'contact.html'  || pagename == 'contact')
    {
        $("#page_contact").addClass("activemenu");
    }
    else 
    {
        $("#page_container").find("li a").removeClass("activemenu");    
    }
    /* header menu active === start */


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