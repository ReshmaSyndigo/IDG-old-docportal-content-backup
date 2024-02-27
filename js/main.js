var changedPage = false;
$(document).ready(function(){
  	function loadPage(url){
		
		$.ajax({
		   url: url,
		   type: 'GET',
		   dataType: 'html',
		   success: function(res) {
			   $('.full-box').html($(res).find('.full-box').html()); 
         $("html, body").animate({ scrollTop: 0 }, "fast");
			   setupBreadCrumbs(); 
		   }
		 });
	}
	
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
      //if (changedPage) loadPage(url);
      return false;
    }

  });
  
  $(document).on('click', '#mysidebar li a', function(event) {
    event.preventDefault();
	//alert(1);
    var url = $(this).attr("href"),
      title = $(this).text();
	  ///
	  //if (changedPage) loadPage(url);
      //loadPage(url);
      //return false;
	  $('#mysidebar li').find('.active').removeClass('active')
	$(this).parent().closest('li').addClass('active');
  ////////
  //alert(changedPage)
  $(this)
        .blur()
        .parent().addClass('expanded')
        .children('ul.nav-list').slideDown(200);
    if (url.indexOf(document.domain) > -1 || url.indexOf(':') === -1) {

      history.pushState({
        url: url,
        title: title
      }, title, url);
      //if (changedPage) loadPage(url);
      loadPage(url);
      return false;
    }

  });
});