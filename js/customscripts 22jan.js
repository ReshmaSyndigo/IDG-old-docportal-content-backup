$( document ).ready(function() {
    $('#mysidebar').height($(".nav").height());
    // activate tooltips. although this is a bootstrap js function, it must be activated this way in your theme.
    $('[data-toggle="tooltip"]').tooltip({
        placement : 'top'
    });
	///
	$(document).bind("contextmenu",function(e){
		return false;
	});
    ////
    //dropdown-toggle
    $(".sidebarTitle .dropdown-toggle").mouseup(function(e){
        $("body").css({'overflow':'hidden'});
    });
    //close search
    $("body").mouseup(function(e){
  
        var subject = $("#results-ul-container"); 

        if(e.target.id != subject.attr('id') && !subject.has(e.target).length)
        {
            subject.stop(true,true).fadeOut('fast');
            $('input#search-input').val('');
            $("body").css({'overflow':'visible'});
        }
        //////////
        var subject2 = $(".sidebarTitle .dropdown-menu"); 

        if(e.target.id != subject2.attr('class') && !subject.has(e.target).length)
        {
            //subject2.stop(true,true).fadeOut('fast');
            
            $("body").css({'overflow':'visible'});
        }
    });
    //bookmark
    $(document).on('click', '#sp-left .post-content a', function(event){
        
        var gethref = $(this).attr('href');
		//alert(gethref);
		//alert(gethref.charAt(0))
		//return;
		var bp = gethref.charAt(0);
        var trainindIdArray = gethref.split('.');
        var gettype = trainindIdArray[trainindIdArray.length-1];
        if(bp == '#'){
            event.preventDefault();
            $('html, body').animate({
                scrollTop: $('.post-content '+gethref).offset().top-90
            }, 1000);
        }
    }); 
    $('#breadcrumbs ul').html('');
    
    

//setPictureTags();
$(document).off('page:done').on('page:done', function($target, data, status, url) {
    $('a.show-hide').off('click');
    $('#breadcrumbs ul').html('');
    $('#prev').text('');
    $('#next').text('');
    $('#prev_bottom').text('');
    $('#next_bottom').text('');
    setupBreadCrumbs();
    setupSidebarTreeNav(); 
    setPictureTags();
    setAnchorAttribute();        
    $("div.ui-layout-center").scrollTop(0);        
});


function setAnchorAttribute(){
    return;
    $(".post-content a").each(function(i) {
    var url = $(this).attr("href");
    var target = $(this).attr("target");
    if(url.slice(0, 1) != "#" && target != "_blank")
        $(this).attr("data-push", "true");
    });
}
 
function setPictureTags(){
    var getsize = $(window).width();
  $("picture img").each(function(){  
      var parent = $(this).parent();
      parent.attr('rel', 'prettyPhoto');
      parent.attr('href', parent.children('source').last().attr('srcset'));
    });
    if(getsize > 768){
        $("picture[rel^='prettyPhoto']").prettyPhoto({theme:'pp_default',social_tools:false,deeplinking:false});
    }else{
        $("picture[rel^='prettyPhoto']").prettyPhoto({
            theme:'pp_default',
            default_width: getsize-30,
            social_tools:false,
            //allow_resize: false,
            show_title: false,
            deeplinking:false
        });
    }
}


// needed for nav tabs on pages. See Formatting > Nav tabs for more details.
// script from http://stackoverflow.com/questions/10523433/how-do-i-keep-the-current-tab-active-with-twitter-bootstrap-after-a-page-reload

    var json, tabsState;
    $('a[data-toggle="pill"], a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
        var href, json, parentId, tabsState;

        tabsState = localStorage.getItem("tabs-state");
        json = JSON.parse(tabsState || "{}");
        parentId = $(e.target).parents("ul.nav.nav-pills, ul.nav.nav-tabs").attr("id");
        href = $(e.target).attr('href');
        json[parentId] = href;

        return localStorage.setItem("tabs-state", JSON.stringify(json));
    });

    tabsState = localStorage.getItem("tabs-state");
    json = JSON.parse(tabsState || "{}");

    $.each(json, function(containerId, href) {
        return $("#" + containerId + " a[href=" + href + "]").tab('show');
    });

    $("ul.nav.nav-pills, ul.nav.nav-tabs").each(function() {
        var $this = $(this);
        if (!json[$this.attr("id")]) {
            return $this.find("a[data-toggle=tab]:first, a[data-toggle=pill]:first").tab("show");
        }
    });

    setupSidebarTreeNav(); 


function setNextForParent(node){ /* This is the first link in its list */
    var next_node = $(node).children('ul.nav-list')[0].children[0];        
    next_href = $(next_node).first().children('a.page-link').attr('href');
	next = '<a href="'+next_href+'" title="Next Page"><img src="images/next-icon.png"></a>';
    $('#next').html(next);

}

function setNextForLeaf(node){ 
    /* This is the next sibling in the list */
    next_href = $(node).next().children('a.page-link').attr('href');
	next = '<a href="'+next_href+'" title="Next Page"><img src="images/next-icon.png"></a>';
    $('#next').html(next);

}

function setPrevious(prev_node){ 
    /* This sees if the previous node is a leaf or tree-parent to set the node */
    if($(prev_node).hasClass('tree-parent')){
        var prev_children = $(prev_node).children('ul.nav-list')[0];
        var length = $(prev_children)[0].children.length;
        var prev_link_node = $(prev_children)[0].children[length-1];
        if($(prev_link_node).hasClass('tree-parent')){
            setPrevious(prev_link_node);            
        }
        else{
            prev_href = $(prev_link_node).children('a.page-link').attr('href');
			previous = '<a href="'+prev_href+'" class="prev-next" title="Previous Page"><img src="images/prev-icon.png"></a>';
            $('#prev').html(previous);     

        }       
    }

    else{
        prev_href = $(prev_node).children('a.page-link').attr('href');
		previous = '<a href="'+prev_href+'" class="prev-next" title="Previous Page"><img src="images/prev-icon.png"></a>';
        $('#prev').html(previous); 
           
    }
}
/* setting up bread crumbs */
setupBreadCrumbs = function(){
  setPictureTags();
   var getwin = $(window).width();
   $('table').each(function( index ) {
        
         $(this).wrap( '<div class="sp-table"></div>' );
    });
   //////
    $('figure, div.highlighter-rouge').each(function( index ) {
         if ($(this).find('.code-heading').length > 0 ) {
             //alert('Found with Length bigger then Zero');
         }else{
             $(this).find('pre').prepend('<div class="code-heading"><a class="copy-code" href="#">Copy</a></div>')
         }
     });
    var getwwww = $('.right-side .post-content').width();
    if(getwin < 768){
        getwwww = $('.right-side').width()-50;
    }
   //$('.post-content pre, .post-content .sp-table').css({'width':getwwww});
   $(".post-content pre").mCustomScrollbar({
		theme:"dark",
		axis:"x",
        setWidth:'100%'
	});
    $(".post-content .sp-table").mCustomScrollbar({
		theme:"dark",
		axis:"x",
        setWidth:'100%'
	});
   var gettt = $('.post-header .post-title-main').text();
   var pgurl = window.location.href.substr(window.location.href.lastIndexOf("/")+1);
   $( '.side-nav #mysidebar li').find('.sp-active').removeClass('sp-active');
   $( '.side-nav #mysidebar li').each(function() {
        var getlink = $( this ).find('a').attr('href');

        if(pgurl == getlink){
            $( this ).addClass('sp-active');
        }
    });
    // Get the current active link
    var node = $('#mysidebar li.active');
    var current = $(node).children('a.page-link').first().text();
    var breadcrumbs = current;
    var href = "";
    var title = "";
    var previous = "";
    var next = "";
    var prev_href = "";
    var next_href = "";

    if(($(node).prev().length) == 1){
        var prev_node = $(node).prev();
        setPrevious(prev_node); 
    }
    else if(($(node).parents(".tree-parent").length) != 0){
        prev_href = $(node).parents(".tree-parent").first().children('a.page-link').attr('href');
		previous = '<a href="'+prev_href+'" class="prev-next" title="Previous Page"><img src="images/prev-icon.png"></a>';
        $('#prev').html(previous); 
    }       

    if($(node).hasClass('tree-parent')){
        setNextForParent(node); 
    }
    else{
        if(($(node).next().length) == 1){
           setNextForLeaf(node);
        }
        else if(($(node).parents(".tree-parent").next().first().length) == 1){
            next_href = $(node).parents(".tree-parent").next().first().children('a.page-link').attr('href');
			next = '<a href="'+next_href+'" title="Next Page"><img src="images/next-icon.png"></a>';
            $('#next').html(next);

        }
    }    
        
    
	$('#breadcrumbs ul').html('');
	var linkArray = [];
	linkArray.length  = 0;
    ////////////
    //function for code
    
    // Get all the parents          
    $(node).parents(".tree-parent").each(function () {
        href = $(this).children('a.page-link').attr('href');
        title = $(this).children('a.page-link').text();
		var id = $(this).attr('id');
		if(title != ''){
		}
		linkArray.push({'link':href, 'title':title, 'id':id});
    });
	linkArray.reverse();
	var gf = breadcrumbs;
	breadcrumbs = '';
	for (i = 0; i < linkArray.length; i++) { 
		breadcrumbs += '<li><a title="'+linkArray[i].title+'" class="pages-link" href="' + linkArray[i].link + '" data-push="true" data-id="'+linkArray[i].id+'">' + linkArray[i].title + '</a></li>';
	}
	breadcrumbs +='<li><a href="#">'+gf+ '</a></li>';
    $('#breadcrumbs ul').html(breadcrumbs);
	///////////////////
	var gt = '';
	var glen = $('.post-content').find('h2, h3, h4').length;
	if (glen > 0 ) {
		$('.post-content h2, .post-content h3, .post-content h4').each(function( index ) {
            var getattr = $(this).attr('id');
            console.log('getattr'+getattr);
            if(getattr != undefined && getattr != 'see-also'){
			    gt += '<li><a href="#">'+$( this ).text()+'</a></li>';
            }
		});
	}else{
        $('.arrow_box').css({'opacity':0})
		gt = 'none';
	}
	console.log('see: '+gt);
	//////
	var getname = $( "#breadcrumbs ul li:last-child a" ).text();
     $('.new-site-inner').trigger('detach.ScrollToFixed');
	$('.new-site-inner').html('');
	$( "#breadcrumbs ul li:last-child" ).remove();
    var thispage = '<li><a href="#">On This Page</a> <i class="fa fa-caret-down" aria-hidden="true"></i>';
	var sidepage = '';
    if(gt != ''){
	thispage += '<div class="arrow_box">';
	thispage += '<ul>';
	thispage += gt;
	thispage += '</ul>';
	thispage += '</div>';
	//
	sidepage += '<h2>On This Page</h2>';
	sidepage += '<div class="new-site-content">';
	sidepage += '<ul>';
	sidepage += gt;
	sidepage += '</ul>';
	sidepage += '</div>';
    }
	thispage += '</li>';
    
	if(gt == 'none' || gt == ''){
        $('.arrow_box').css({'opacity':0})
		var url = $(location).attr('pathname');
		url = url.replace('/','');
		var mm = '';
		$('#mysidebar li').each(function( index ) {
			
			var geth = $(this).find('a.page-link').attr('href');
			var getn = $(this).find('a.page-link').text();
			if(url == geth){
				mm = $(this).find('a.page-link').attr('title');
				return;
			}
		  	
		});
		$('#breadcrumbs ul').append('<li><a href="#"  title="'+mm+'">On This Page</li>');
        $('#sp-left').css({'width':'100%', 'display':'block'});
        $('#sp-right').css({'display':'none'});
		$('.new-site-inner').html('');
	}else{
        if(getwin > 767){
            $('#sp-left').css({'width':'75%', 'display':'block'});
            $('#sp-right').css({'width':'25%', 'display':'block'});
        }else{
            $('#sp-left').css({'width':'100%', 'display':'block'});
            $('#sp-right').css({'display':'none'});
        }
		$('#breadcrumbs ul').append(thispage);
		$('#sp-right .new-site-inner').html(sidepage);
        ////
        $('.new-site-bar').scrollToFixed({ 
            top: 0,
		    limit: $('#new-footer').offset().top-$('.new-site-bar').height()
        });
	}
	var maxW = 500;
	var breadW = $('#breadcrumbs > ul').width();
    var mar = ($('.breadcrumbs > ul > li').size()-1)*9;
	var breadS = $('.breadcrumbs > ul > li').size();
	if(breadW > maxW){
		var newW = (maxW-mar)/breadS;
		$('.breadcrumbs > ul > li > a').css({'max-width':newW}).addClass('makehide');
	}
    ///////////
      
}
$(document).on('click', '.breadcrumbs .arrow_box ul > li > a', function(event){
	event.preventDefault();
	var gettext = $(this).text();
	var gc = '';
	$('.post-content h2, .post-content h3, .post-content h4').each(function( index ) {
		var pt = $( this ).text();
		if(pt == gettext){
			gc = $( this ).attr('id');
			return false;
			
		}
	});
	////
	$('html, body').animate({
        scrollTop: $('.post-content #'+gc).offset().top-90
    }, 1000);
});

$(document).on('click', '.new-site-content ul > li > a', function(event){
	event.preventDefault();
	var gettext = $(this).text();
	var gc = '';
	$('.post-content h2, .post-content h3, .post-content h4').each(function( index ) {
		var pt = $( this ).text();
		if(pt == gettext){
			gc = $( this ).attr('id');
			return false;
		}
	});
	////
	$('html, body').animate({
        scrollTop: $('.post-content #'+gc).offset().top-90
    }, 1000);
});
/* source from loopback.io */
function setupSidebarTreeNav(){
    //hide all non-active nav-lists:
    $('.nav-list').not('#mysidebar').each(function(i, list){
      if(!$(list).parent().is('.active')){
        $(list).hide();
      }
    });

    //add active class to parents of active nav elems
    $("li.active").parentsUntil('#mysidebar', '.tree-parent')
      .addClass('expanded')
      .children('ul.nav-list').show();

    //add expanded class to active tree parents
    $('.tree-parent.active').addClass('expanded');

    $('a.show-hide').on('click',(function (e) {
      console.log('clicked', this);
      $(this)
        .blur()
        .parent().toggleClass('expanded')
        .children('ul.nav-list').toggle(200);

      return false;
    }));
	/////
	$( '#mysidebar li.tree-parent').each(function( index ) {
	  $(this).attr('id', 'sp_'+index);
	  
	  //alert(gg);
	});
}
setupBreadCrumbs(); 
setPictureTags();
setAnchorAttribute();  

});