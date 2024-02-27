$(function() {
  var changedPage = false,

    /* ----- Do this when a page loads ----- */
    init = function() {
      /* ----- This is where I would run any page specific functions ----- */
      setupBreadCrumbs();
      //alert('loaded')
       $("html, body").animate({ scrollTop: 0 }, "fast");
    },

    /* ----- Do this for ajax page loads ----- */
    ajaxLoad = function(html) {
      init();
      //alert(1)
      /* ----- Here you could maybe add logic to set the HTML title to the new page title ----- */

      /* ----- Used for popState event (back/forward browser buttons) ----- */
      changedPage = true;
    },

    loadPage = function(url) {
      $(".full-box").load(url + " .full-box", ajaxLoad);
        console.log("Ajax Loaded");
        console.log("Initializing scripts");
	     
    };

  /* ----- This runs on the first page load with no ajax ----- */
  init();

  $(window).on("popstate", function(e) {
    // if (changedPage) loadPage(location.href);
    // console.log("Popstate happened");
  });
	$(document).on('click', '.breadcrumbs > ul > li > a', function() {
    var url = $(this).attr("href"),
      title = $(this).text();
	  //alert(url);
	  if(url == '#'){
		  return false;
	  }
	  var id = $(this).attr('data-id');
	  $('#mysidebar li').find('.active').removeClass('active');
	  //alert(id);
		$('#mysidebar li').find('#'+id).addClass('active');
    if (url.indexOf(document.domain) > -1 || url.indexOf(':') === -1) {

      history.pushState({
        url: url,
        title: title
      }, title, url);

      loadPage(url);
      return false;
    }

  });
  // $(document).on('click', '#mysidebar li a', function(event) {
  //   event.preventDefault();
  // })
  $(document).on('click', '#mysidebar li a', function() {

    var url = $(this).attr("href"),
      title = $(this).text();
	  $('#mysidebar li').find('.active').removeClass('active')
	$(this).parent().closest('li').addClass('active');
  ////////
  //alert(1)
  $(this)
        .blur()
        .parent().addClass('expanded')
        .children('ul.nav-list').slideDown(200);
    if (url.indexOf(document.domain) > -1 || url.indexOf(':') === -1) {

      history.pushState({
        url: url,
        title: title
      }, title, url);

      loadPage(url);
      return false;
    }

  });
});