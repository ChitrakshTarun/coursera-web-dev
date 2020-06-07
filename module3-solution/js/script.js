// Code to allow Collapsed Navbar to auto-hide whenever someone clicks on any of the items inside it.
$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
}); 