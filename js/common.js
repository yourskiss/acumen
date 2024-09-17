// $(window).on("load", function(){
$(document).on("load", function() {
 
    
    /* header menu active === start */
    var pagename = document.location.pathname;
    console.log(pagename);
    switch (pagename) { 
        case '/index.html': 
            $("#page_home").addClass("activemenu");
            break;
        case '/work.html': 
            $("#page_work").addClass("activemenu");
            break;
        case '/about-us.html': 
            $("#page_about").addClass("activemenu");
            break;		
        case '/contact.html': 
            $("#page_contact").addClass("activemenu");
            break;
        default:
            $("#page_container").find("li a").removeClass("activemenu");     
    }
    /* header menu active === start */


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