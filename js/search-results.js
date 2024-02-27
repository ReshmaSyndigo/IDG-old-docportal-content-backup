var rows_per_page = 20;
var selPersona = "";
var selVersions = "";
var selTopics = "";
var current_page = 0;

/* Callback function from json response */
function on_data(data) {

    $('#results').empty();
        
    var highlightSet = {};
    var docs = data.response.docs;
    /* Check for any records in the result */
    if (parseInt(docs.length) == 0) {
        $('#results').prepend('<div style="vertical-align:middle;text-align:center;margin:169px;border:1px solid pink;color:red"> No results found for ' + $("#query").val() + '</div>');
    }
    else {
        var total = data.response.numFound;
        var current_start_row = data.responseHeader.params.start;
        var end_row = data.responseHeader.params.rows;        
        var num_displayed = 'Results <strong>' + (parseInt(current_start_row) + 1) + '-' + ((parseInt(end_row) <= parseInt(total)) ? end_row : total) + '</strong> of <strong>' + total + '</strong> found for "' + $("#query").val() + '"';

        $('#results').prepend('<div class="search-box" style="margin-bottom: 20px;">' + num_displayed + '</div>');
        /* Get the persona from the facet */
        display_persona(data.facets["persona"]["buckets"]);
        
        
        /* Get the versions from the facet */
        /* display_versions(data.facets["version"]["buckets"]); */
        /* Get the topic types from the facet */
        display_topics(data.facets["topic"]["buckets"]);

        /* Get the highlight content */
        var highlights = data.highlighting;
        $.each(highlights, function (i, hitem) {
            highlightSet[i] = hitem.content[0];
        });
        /* display the results in the format required */
        $.each(docs, function (i, item) {
            $('#results').append($('<div>' + format_data(item, highlightSet[item["resourcename"]]) + '</div>'));
        });
        /* Display the pagination */
        display_pagination(current_start_row, total);
    }
}
/* Display the topics from the facet */
function display_topics(topics) {

    $('#topics').empty();
    var str_topics = "";

    if (selTopics != "") 
        var arrTopics = selTopics.split(" ");

    str_topics = '<div style="margin-bottom:15px; font-weight:bold;">Topics:</div>';
   
    for (var i = 0; i < topics.length; i++) {

        if ($.inArray(topics[i].val, arrTopics) != -1) /* Retain Checked */
            str_topics = str_topics + '<div><input type="checkbox" class="iTopic" checked/><label>' + topics[i].val + '</label></div>';
        else
            str_topics = str_topics + '<div><input type="checkbox" class="iTopic"/><label>' + topics[i].val + '</label></div>';
    }
    $('#topics').append(str_topics);
}

/* Display the persona from the facet */
function display_persona(persona) {

    $('#persona').empty();
    var str_persona = "";

    if (selPersona != "") 
        var arrPersona = selPersona.split(" ");
    
    str_persona = '<div style="margin-bottom:15px; font-weight:bold;">Personas:</div>';

    for (var i = 0; i < persona.length; i++) {

        if ($.inArray(persona[i].val, arrPersona) != -1) /* Retain Checked */
            str_persona = str_persona + '<div><input type="checkbox" class="iProd" checked/><label>' + persona[i].val + '</label></div>';
        else
            str_persona = str_persona + '<div><input type="checkbox" class="iProd"/><label>' + persona[i].val + '</label></div>';
    }
    $('#persona').append(str_persona);
}

/* Display the versions from the facet */
function display_versions(versions) {
    $('#versions').empty();
    var str_versions = "";

    if (selVersions != "") 
        var arrVersions = selVersions.split(" ");
  
    for (var i = 0; i < versions.length; i++) {
        if ($.inArray(versions[i].val, arrVersions) != -1) /* Retain checked */
            str_versions = str_versions + '<div><input type="checkbox" class="iVersion" checked/><label>' + versions[i].val + '</label></div>';
        else
            str_versions = str_versions + '<div><input type="checkbox" class="iVersion"/><label>' + versions[i].val + '</label></div>';
    }
    $('#versions').append(str_versions);
}

/* Display the search results in the required format */
function format_data(item, highlighText) {
    var str = "";
   
    str = str + '<div class="loop-box"><a href="' + prepare_url(item.resourcename, item.attr_startpage) + '" target="_blank"><h4>' + item.title[0] + '</h4></a> ';
    str = str + '<p>Persona: ' + item.attr_persona + '<p>'; 
    
    highlighText = highlighText.trim();
    /* Split the title by space */
    var str_title = (item.title[0]).split(" ");
    var arr_highlight = highlighText.split(" ");
    var title_with_em = "";
    for (var i = 0; i < str_title.length; i++) {
        if (title_with_em == "")
            title_with_em = arr_highlight[i];
        else
            title_with_em = title_with_em + " " + arr_highlight[i];
    }   
    var title_without_em = title_with_em;
    // Remove the <em>'s
    title_without_em = title_with_em.replace(/<em>/g, '').replace(/<\/em>/g, '');  
    if (title_without_em == item.title[0]) {
        var re = new RegExp("^" + title_with_em);
        highlighText = highlighText.replace(re, "");
    }       
        
     // Check for special characters at the start of the sentence and blank it out
    highlighText = highlighText.replace(/^[=.,:!@#$%\^&*(){}[\]?/|\-"][(\s)[=.,:!@#$%\^&*(){}[\]?/|\-"]*/, "");
    // Trim the highlighted text
    highlighText = highlighText.trim();

    // Display ... only if the text starts with lowercase
    if (highlighText.charAt(0) === highlighText.charAt(0).toUpperCase())
        str = str + '<p>' + highlighText + '...</p></div>';
    else
        str = str + '<p>...' + highlighText + '...</p></div>';
    return str;

}


/* Prepare the URL for topic hyperlinks */
function prepare_url(resName, startPage) {

    var arr = resName.split('\\');
    var file_name = arr[arr.length - 1];

    file_path = "/rdp/" + startPage + "/" + file_name;

    return file_path;
}

/* Get the search keywords */
function GetQueryStringParams(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
            return sParameterName[1];
        }
    }
}

/* Build query parameters for solr search */
function getstandardargs(query, start, rows, selPersona, selVersions, selTopics) {

    var params = [
       'q=' + query 
       , 'start=' + start
       , 'rows=' + rows
       , 'persona=' + selPersona
       , 'version=' + selVersions
       , 'topics=' + selTopics
    ];
    return params;

}

/* Display pagination according to the current start row and total */
function display_pagination(current_start_row, total) {

    $('#pages').empty();
    var str_link = "";

    /* Calculate the total pages, current page, start and end page */
    var total_pages = ((parseInt(total % rows_per_page) == 0) ? (total / rows_per_page) : (parseInt(total / rows_per_page) + 1));
    current_page = (parseInt(current_start_row) + rows_per_page) / rows_per_page;
    var start_page = ((current_page < 5) ? 1 : (parseInt(current_page) - 2));
    var end_page = (((start_page + 10) <= parseInt(total_pages)) ? (start_page + 10) : (total_pages));

    /* Create dummy hyperlinks from start to end pages to display pagination */
    for (i = start_page; i <= end_page; i++) {
        if (i == parseInt(current_page))
            str_link = str_link + '<strong style="padding-left: 10px;">' + i + '</strong>';
        else
            str_link = str_link + '<a class="pLinks" href="#" style="padding-left: 10px; color: rgb(19, 100, 196);" >' + i + '</a>';
    }
    str_link = addPreviousNext(str_link, total_pages);

    $('#pages').append('<div id="links" style="margin-top:10px;line-height:30px;">' + str_link + '</div>');
}

/* Add previous and next links according to the current page */
function addPreviousNext(str_link, total_pages) {

    if (parseInt(current_page) == 1){
       if(parseInt(current_page) < total_pages)
            str_link = str_link + '<a class="pLinks" href="#" style="padding-left: 10px; color: rgb(19, 100, 196);" > Next  </a>';
    }
    else{
           if (parseInt(current_page) == total_pages) 
               str_link = '<a class="pLinks" href="#" style="padding-left: 10px; color: rgb(19, 100, 196);" > Previous </a>' + str_link
           else
               str_link = '<a class="pLinks" href="#" style="padding-left: 10px; color: rgb(19, 100, 196);" >  Previous </a>' + str_link +
                  '<a class="pLinks" href="#" style="padding-left: 10px; color: rgb(19, 100, 196);" >  Next </a>';
    }   
    return str_link;
}


/* Handles hyperlink click for pages */
$(document).on("click", ".pLinks", function () {
    var p = $.trim($(this).text());
    var url = "";
    var start = 0;
    var rows = 0;
    // Check if the link clicked is Previous or Next
    if (p == "Previous")
        p = current_page - 1;
    else if (p == "Next")
        p = current_page + 1;

    // Set the rows and start depending upon the page clicked
    rows = parseInt(p) * parseInt(rows_per_page);
    start = parseInt(rows) - 20;

    // Build URL based and send search request to Solr
    url = build_URL(start, rows,selPersona, selVersions, selTopics);
    $.getJSON(url)
       .fail(function (xhr, status, error) {
           if (xhr.readyState == 4 && xhr.status == 404) {
               $('#results').empty();
               $('#results').prepend('<div style="vertical-align:middle;text-align:center;margin:169px;border:1px solid pink;color:red"> Error processing the request. The search engine can be down. Contact system administrator for further assistance.</div>');
           }
       })
       .done(function (data, status, error) {
           on_data(data);

       });
});

/* Handles the checkbox click for persona */
$(document).on("click", ".iProd", function () {
    selPersona = "";
    var url = "";
    // Start the search from beginning 
    start = 0
    rows = 20;
    // Get all the selected persona 
    $('#persona input:checked').each(function () {
        if (selPersona == "")
            selPersona = $(this).next("label").text();
        else
            selPersona = selPersona + " " + $(this).next("label").text();
    });
    //alert(selPersona);
    /* Build URL and send request to solr */
    url = build_URL(0, rows_per_page, selPersona, selVersions, selTopics);
    $.getJSON(url)
       .fail(function (xhr, status, error) {
           if (xhr.readyState == 4 && xhr.status == 404) {
               $('#results').empty();
               $('#results').prepend('<div style="vertical-align:middle;text-align:center;margin:169px;border:1px solid pink;color:red"> Error processing the request. The search engine can be down. Contact system administrator for further assistance.</div>');
           }
       })
       .done(function (data, status, error) {
           on_data(data);

       });
});

/* Handles the checkbox click for Topics */
$(document).on("click", ".iTopic", function () {
    //alert('clicked');
    selTopics = "";
    var url = "";
    // Start the search from beginning 
    start = 0
    rows = 20;
    // Get all the selected topics 
    $('#topics input:checked').each(function () {
        if (selTopics == "")
            selTopics = $(this).next("label").text();
        else
            selTopics = selTopics + " " + $(this).next("label").text();
    });
    /* Build URL and send request to solr */
    url = build_URL(0, rows_per_page, selPersona, selVersions, selTopics);
    $.getJSON(url)
       .fail(function (xhr, status, error) {
           if (xhr.readyState == 4 && xhr.status == 404) {
               $('#results').empty();
               $('#results').prepend('<div style="vertical-align:middle;text-align:center;margin:169px;border:1px solid pink;color:red"> Error processing the request. The search engine can be down. Contact system administrator for further assistance.</div>');
           }
       })
       .done(function (data, status, error) {
           on_data(data);

       });
});

/* Handles the checkbox click for versions */
$(document).on("click", ".iVersion", function () {
    selVersions = "";
    var url = "";
    // Start the search from beginning 
    start = 0
    rows = 20;
    // Get all the selected versions 
    $('#versions input:checked').each(function () {
        if (selVersions == "")
            selVersions = $(this).next("label").text();
        else
            selVersions = selVersions + " " + $(this).next("label").text();
    });
    /* Build URL and send request to solr */
    url = build_URL(0, rows_per_page, selPersona, selVersions, selTopics);

    $.getJSON(url)
        .fail(function (xhr, status, error) {
            if (xhr.readyState == 4 && xhr.status == 404) {
                $('#results').empty();
                $('#results').prepend('<div style="vertical-align:middle;text-align:center;margin:169px;border:1px solid pink;color:red"> Error processing the request. The search engine can be down. Contact system administrator for further assistance.</div>');
            }
        })
        .done(function (data, status, error) {
            on_data(data);

        });
});

/* Builds facets based on the options selected by the user */
function getFacetargs() {
    var current_facet = 'json.facet={persona:{type:terms,field:attr_persona,domain:{excludeTags:persona}},version:{type:terms,field:attr_version,domain:{excludeTags:version}},topic:{type:terms,field:attr_description,domain:{excludeTags:topic}}}';
    // Build facet for persona
    if (selPersona != "") {
        current_facet = 'fq={!tag=persona}attr_persona:(' + selPersona + ')' + '&' + current_facet;
    }
    // Build facet for versions
    if (selVersions != "") {
        current_facet = 'fq={!tag=version}attr_version:(' + selVersions + ')' + '&' + current_facet;
    }

    // Build facet for topics
    if (selTopics != "") {
        current_facet = 'fq={!tag=topic}attr_description:(' + selTopics + ')' + '&' + current_facet;     
    }

    return current_facet;
}

/* Builds the URL to send request to solr */
function build_URL(start, rows, selPersona, selVersions, selTopics) {
    query = escapeSpecialCharacters($("#query").val());
    // Build url based on the start and end rows, selected persona and selected versions
    var strData = getstandardargs(query, start, rows, selPersona, selVersions, selTopics).join('&');
 
    if (location.protocol == 'https:')
        var url = 'https://'+ location.hostname +'/SearchRequestRDP/searchRDPAPI?' + strData;
    else
        var url = 'http://'+ location.hostname +'/SearchRequestRDP/searchRDPAPI?' + strData;

         
    return url;
}

/* escape special characters in the query */
function escapeSpecialCharacters(query_escape) {
    /* + - && || ! ( ) { } [ ] ^ " ~ * ? : \ => +"\||&& */
   
    query_escape = query_escape.replace(/:/g, '\\:').replace(/\^/g, '\\^').replace(/!/g, '\\!').replace(/~/g, '\\~').replace(/\(/g, '\\(');
    query_escape = query_escape.replace(/\)/g, '\\)').replace(/\[/g, '\\[').replace(/\]/g, '\\]').replace(/\}/g, '\\}').replace(/\{/g, '\\{');
    query_escape = query_escape.replace(/\?/g, '\\?').replace(/-/g, '\\-');
    return query_escape;
}

/* Handles document ready event */
function on_ready() {
    var query = "";

    // Get the query string parameter
    query = GetQueryStringParams("q");
    // Decode the query for special characters   
    query = decodeURI(query);
    // Assign the query back in the query text box
    $('#query').val(query);

    var start = 0;
    var rows = rows_per_page;
    if (query != null) {
        //check for special characters in the query
        // Build url to send request to solr
        url = build_URL(start, rows, "", "", "");
        // get data back from the search request
        $.getJSON(url)
        .fail(function (xhr, status, error) {
            if (xhr.readyState == 4 && xhr.status == 404) {
                $('#results').empty();
                $('#results').prepend('<div style="vertical-align:middle;text-align:center;margin:169px;border:1px solid pink;color:red"> Error processing the request. The search engine can be down. Contact system administrator for further assistance.</div>');
            }
        })
        .done(function (data, status, error) {
               on_data(data);
          
        });
    }
}

$(document).ready(on_ready);
