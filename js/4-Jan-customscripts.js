
$('#mysidebar').height($(".nav").height());


$( document ).ready(function() {

    // activate tooltips. although this is a bootstrap js function, it must be activated this way in your theme.
    $('[data-toggle="tooltip"]').tooltip({
        placement : 'top'
    });
    
    /**
     * AnchorJS
     */
    //anchors.add('h2,h3,h4,h5'); 
     
    //window.wiselinks = new Wiselinks($('.ui-layout-west'));
    //window.wiselinks = new Wiselinks($('.ui-layout-center'));
    //window.wiselinks = new Wiselinks($('.ui-layout-east'));
    
    //$("body").layout({ applyDemoStyles: true }); 
    $('#breadcrumbs ul').html('');
    setupBreadCrumbs(); 
    setPictureTags();
    setAnchorAttribute();  
    
});
setPictureTags();
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
  $("picture img").each(function(){  
      var parent = $(this).parent();
      parent.attr('rel', 'prettyPhoto');
      parent.attr('href', parent.children('source').last().attr('srcset'));
    });
    $("picture[rel^='prettyPhoto']").prettyPhoto({theme:'pp_default',social_tools:false,deeplinking:false});
    $("img").each(function(){
        var image = $(this);
        image.wrap('<a href="#"> </a>');
        image.parent().attr('rel', 'prettyPhoto');
        image.parent().attr('href', image.attr('src'));
        image.parent().attr('id', 'prettyImages');
    });
     $("a#prettyImages[rel^='prettyPhoto']").prettyPhoto({theme:'pp_default',social_tools:false,deeplinking:false});
}


// needed for nav tabs on pages. See Formatting > Nav tabs for more details.
// script from http://stackoverflow.com/questions/10523433/how-do-i-keep-the-current-tab-active-with-twitter-bootstrap-after-a-page-reload
$(function() {
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
});

function setNextForParent(node){ /* This is the first link in its list */
    var next_node = $(node).children('ul.nav-list')[0].children[0];        
    next_href = $(next_node).first().children('a.page-link').attr('href');
    //next = "<a class=\"page-link\" href=\"" + next_href + "\" data-push=\"true\">Next &gt;</a>";
	next = '<a href="'+next_href+'" title="Next Page"><img src="images/next-icon.png"></a>';
    $('#next').html(next);
    //$('#next_bottom').prepend(next);

}

function setNextForLeaf(node){ /* This is the next sibling in the list */
    next_href = $(node).next().children('a.page-link').attr('href');
    //next = "<a class=\"page-link\" href=\"" + next_href + "\" data-push=\"true\">Next &gt;</a>";
	next = '<a href="'+next_href+'" title="Next Page"><img src="images/next-icon.png"></a>';
    $('#next').html(next);
    //$('#next_bottom').prepend(next);

}

function setPrevious(prev_node){ /* This sees if the previous node is a leaf or tree-parent to set the node */
    if($(prev_node).hasClass('tree-parent')){
        var prev_children = $(prev_node).children('ul.nav-list')[0];
        var length = $(prev_children)[0].children.length;
        var prev_link_node = $(prev_children)[0].children[length-1];
        if($(prev_link_node).hasClass('tree-parent')){
            setPrevious(prev_link_node);            
        }
        else{
            prev_href = $(prev_link_node).children('a.page-link').attr('href');
            //previous = "<a class=\"page-link\" href=\"" + prev_href + "\" data-push=\"true\">&lt; Previous</a>";
			previous = '<a href="'+prev_href+'" class="prev-next" title="Previous Page"><img src="images/prev-icon.png"></a>';
            $('#prev').html(previous);     
            //$('#prev_bottom').prepend(previous);     

        }       
    }

    else{
        prev_href = $(prev_node).children('a.page-link').attr('href');
        //previous = "<a class=\"page-link\" href=\"" + prev_href + "\" data-push=\"true\">&lt; Previous</a>";
		previous = '<a href="'+prev_href+'" class="prev-next" title="Previous Page"><img src="images/prev-icon.png"></a>';
        $('#prev').html(previous); 
        //$('#prev_bottom').prepend(previous);     
           
    }
}
/* setting up bread crumbs */
setupBreadCrumbs = function(){
  //alert(1);
   var getwin = $(window).width();
   $('table').each(function( index ) {
        //$('<div class="sp-table">').insertBefore(this);
        //$('</div>').insertAfter(this);
        $(this).wrap( '<div class="sp-table"></div>' );
        //console.log( index + ": " + $( this ).text() );
        //$( this ).prepend('<div class="code-heading"><a class="copy-code" href="#">Copy</a></div>');
    });
   //////
//    $('figure, div.highlighter-rouge').each(function( index ) {
//         if ($(this).find('.code-heading').length > 0 ) {
//             //alert('Found with Length bigger then Zero');
//         }else{
//             //$('<div class="code-heading"><a class="copy-code" href="#">Copy</a></div>').insertBefore(this);
//             $(this).find('pre').prepend('<div class="code-heading"><a class="copy-code" href="#">Copy</a></div>')
//             //console.log( index + ": " + $( this ).text() );
//             //$( this ).prepend('<div class="code-heading"><a class="copy-code" href="#">Copy</a></div>');
//         }
//     });
     $('figure, div.highlighter-rouge').each(function( index ) {
        $(this).find('pre').prepend('<div class="code-heading"><a class="copy-code" href="#">Copy</a></div>');
    });
    var getwwww = $('.right-side .post-content').innerWidth();
    if(getwin < 768){
    getwwww = $('.right-side').innerWidth()-50;
    }
   //alert(getwwww);
   $('.post-content pre, .post-content .sp-table').css({'width':getwwww});
   $(".post-content pre").mCustomScrollbar({
		theme:"dark",
		axis:"x"
	});
    $(".post-content .sp-table").mCustomScrollbar({
		theme:"dark",
		axis:"x"
	});
   //.post-content figure pre
   //return;
   var gettt = $('.post-header .post-title-main').text();
   var pgurl = window.location.href.substr(window.location.href.lastIndexOf("/")+1);
   $( '.side-nav #mysidebar li').find('.sp-active').removeClass('sp-active');
   //alert(pgurl);
   $( '.side-nav #mysidebar li').each(function() {
        var getlink = $( this ).find('a').attr('href');

        if(pgurl == getlink){
            //alert('ok: '+getlink);
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
        /*var prev_node = $(node).parents(".tree-parent").first();
        setPrevious(prev_node); */
        prev_href = $(node).parents(".tree-parent").first().children('a.page-link').attr('href');
        //previous = "<a class=\"page-link\" href=\"" + prev_href + "\" data-push=\"true\">&lt; Previous</a>";
		previous = '<a href="'+prev_href+'" class="prev-next" title="Previous Page"><img src="images/prev-icon.png"></a>';
		//alert(previous)
        $('#prev').html(previous); 
        //$('#prev_bottom').prepend(previous);     

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
            //next = "<a class=\"page-link\" href=\"" + next_href + "\" data-push=\"true\">Next &gt;</a>";
			next = '<a href="'+next_href+'" title="Next Page"><img src="images/next-icon.png"></a>';
			//alert(next)
            $('#next').html(next);
            //$('#next_bottom').prepend(next);

        }
    }    
        
    if (($(node).parents(".tree-parent").length) == 0){
        //$('#breadcrumbs ul').html('<li><a href="#">Welcome</a></li>');
        //return;
    }
	$('#breadcrumbs ul').html('');
	//breadcrumbs = '';
	var linkArray = [];
	linkArray.length  = 0;
    ////////////
    //function for code
    
    // Get all the parents          
    $(node).parents(".tree-parent").each(function () {
        href = $(this).children('a.page-link').attr('href');
        title = $(this).children('a.page-link').text();
		var id = $(this).attr('id');
		//alert(title+', '+breadcrumbs);
		if(title != ''){
        //breadcrumbs = "<li><a class=\"pages-link\" href=\"" + href + "\" data-push=\"true\">" + title + "</a></li><li>" + breadcrumbs+"</li>";
		}
		//alert(title);
		linkArray.push({'link':href, 'title':title, 'id':id});
		//breadcrumbs += '<li><a title="'+title+'" class="pages-link" href="' + href + '" data-push="true" data-id="'+id+'">' + title + '</a></li>';
    });
	//alert(linkArray[1].title);
	linkArray.reverse();
    //alert(linkArray[1].title);
	var gf = breadcrumbs;
	breadcrumbs = '';
	for (i = 0; i < linkArray.length; i++) { 
		//alert(linkArray[i].title);
		breadcrumbs += '<li><a title="'+linkArray[i].title+'" class="pages-link" href="' + linkArray[i].link + '" data-push="true" data-id="'+linkArray[i].id+'">' + linkArray[i].title + '</a></li>';
	}
	//alert(gf)
	breadcrumbs +='<li><a href="#">'+gf+ '</a></li>';
    //breadcrumbs = "<ul class= \"crumbs\">" + breadcrumbs + "</ul>" ; 
	//alert(breadcrumbs);
    $('#breadcrumbs ul').html(breadcrumbs);
	//return;
	///////////////////
	var gt = '';
	var glen = $('.post-content').find('h2, h3, h4').length;
	//alert('count: '+glen)
	if (glen > 0 ) {
		$('.post-content h2, .post-content h3, .post-content h4').each(function( index ) {
			//console.log( index + ": " + $( this ).text() );
			//alert(1);
            var getattr = $(this).attr('id');
            console.log('getattr'+getattr);
            if(getattr != undefined && getattr != 'see-also'){
                //alert(getattr);
			    gt += '<li><a href="#">'+$( this ).text()+'</a></li>';
            }
		});
	}else{
		//alert(2);
        //console.log('none....')
        $('.arrow_box').css({'opacity':0})
		gt = 'none';
	}
	//alert(gt);
	console.log('see: '+gt);
	//////
    
	//return;
	var getname = $( "#breadcrumbs ul li:last-child a" ).text();
	//alert(getname);
     $('.new-site-inner').trigger('detach.ScrollToFixed');
	$('.new-site-inner').html('');
	$( "#breadcrumbs ul li:last-child" ).remove();
	//var thispage = '<li><a href="#">'+getname+'</a> <i class="fa fa-caret-down" aria-hidden="true"></i>';
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
	//alert(gt);
    
	if(gt == 'none' || gt == ''){
        //alert(1);
        $('.arrow_box').css({'opacity':0})
		var url = $(location).attr('pathname');
		url = url.replace('/','');
		//alert(url)
		var mm = '';
		$('#mysidebar li').each(function( index ) {
			
			var geth = $(this).find('a.page-link').attr('href');
			var getn = $(this).find('a.page-link').text();
			//alert(url + ', '+geth);
			if(url == geth){
				mm = $(this).find('a.page-link').attr('title');
				//alert("YES: "+mm);
				return;
			}
		  	
		});
		//alert(url);
		//$('#breadcrumbs ul').append('<li><a href="#"  title="'+mm+'">'+mm+'</li>');
		$('#breadcrumbs ul').append('<li><a href="#"  title="'+mm+'">On This Page</li>');
        $('#sp-left').css({'width':'100%', 'display':'block'});
        $('#sp-right').css({'display':'none'});
		$('.new-site-inner').html('');
	}else{
        //alert(2);
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
	//alert(maxW+', '+breadW+', '+breadS)
	//alert(mar);
	if(breadW > maxW){
		var newW = (maxW-mar)/breadS;
		$('.breadcrumbs > ul > li > a').css({'max-width':newW}).addClass('makehide');
	}
    ///////////

	///////////////
      
}
$(document).on('click', '.breadcrumbs .arrow_box ul > li > a', function(event){
	event.preventDefault();
	var gettext = $(this).text();
	var gc = '';
	$('.post-content h2, .post-content h3, .post-content h4').each(function( index ) {
		//console.log( index + ": " + $( this ).text() );
		var pt = $( this ).text();
		
		//alert(pt+', '+gettext);
		if(pt == gettext){
			gc = $( this ).attr('id');
			//alert(gc);
			return false;
			
		}
	});
	////
	//alert(gc);
	$('html, body').animate({
        scrollTop: $('.post-content #'+gc).offset().top-90
    }, 1000);
});

$(document).on('click', '.new-site-content ul > li > a', function(event){
	event.preventDefault();
	var gettext = $(this).text();
	var gc = '';
	$('.post-content h2, .post-content h3, .post-content h4').each(function( index ) {
		//console.log( index + ": " + $( this ).text() );
		var pt = $( this ).text();
		
		//alert(pt+', '+gettext);
		if(pt == gettext){
			gc = $( this ).attr('id');
			//alert(gc);
			return false;
			
		}
	});
	////
	//alert(gc);
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

      //$(this).off('click');  
      return false;
      // $(this).parent().children('ul.nav-list').toggle(200);
    }));
	/////
	$( '#mysidebar li.tree-parent').each(function( index ) {
	  $(this).attr('id', 'sp_'+index);
	  
	  //alert(gg);
	});
}


