
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
   var getwwww = $('.right-side .post-content').width();
   //alert(getwwww);
   $('.post-content figure pre').css({'width':getwwww});
   $(".post-content figure pre").mCustomScrollbar({
		theme:"dark",
		axis:"x"
	});
   //.post-content figure pre
   //return;
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
        $('#breadcrumbs ul').html('<li><a href="#">Welcome</a></li>');
        return;
    }
	$('#breadcrumbs ul').html('');
	//breadcrumbs = '';
	var linkArray = [];
	linkArray.length  = 0;
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
	var glen = $('.post-content').find('h2').length;
	
	if (glen > 0 ) {
		$('.post-content h2').each(function( index ) {
			//console.log( index + ": " + $( this ).text() );
			//alert(1);
			gt += '<li><a href="#">'+$( this ).text()+'</a></li>';
		});
	}else{
		//alert(2);
		gt = 'none';
	}
	//alert(gt);
	
	//////
	//return;
	var getname = $( "#breadcrumbs ul li:last-child a" ).text();
	//alert(getname);
	$( "#breadcrumbs ul li:last-child" ).remove();
	//var thispage = '<li><a href="#">'+getname+'</a> <i class="fa fa-caret-down" aria-hidden="true"></i>';
    var thispage = '<li><a href="#">On This Page</a> <i class="fa fa-caret-down" aria-hidden="true"></i>';
	thispage += '<div class="arrow_box">';
	thispage += '<ul>';
	thispage += gt;
	thispage += '</ul>';
	thispage += '</div>';
	thispage += '</li>';
	//alert(getname);
	if(gt == 'none'){
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
		$('#breadcrumbs ul').append('<li><a href="#"  title="'+mm+'">'+mm+'</li>');
	}else{
		$('#breadcrumbs ul').append(thispage);
	}
	var maxW = 500;
	var breadW = $('#breadcrumbs > ul').width();
	var breadS = $('.breadcrumbs > ul > li').size();
	//alert(maxW+', '+breadW+', '+breadS)
	//alert(glen);
	if(breadW > maxW){
		var newW = maxW/breadS;
		$('.breadcrumbs > ul > li > a').css({'max-width':newW}).addClass('makehide');
	}
	///////////////
      
}
$(document).on('click', '.breadcrumbs .arrow_box ul > li > a', function(event){
	event.preventDefault();
	var gettext = $(this).text();
	var gc = '';
	$('.post-content h2').each(function( index ) {
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


