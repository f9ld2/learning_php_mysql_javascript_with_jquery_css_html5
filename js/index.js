var data = [];
var group = {
    h4: false,
    li: []
};

for(var i=13;i<23;i++){
    $('#page' + i + ' p.P2').each(function(){
        var items = $('>span', this);
        if(items.length == 1){
            var text = trim(items.text());
            if(text && $.inArray(text, ['x', 'Table of Conte', 'Questions']) == -1){
                if(/(\.\ \.\ \.\ \.\ \.\ \.\ \.\ \.\ \.\ \.)/.test(text)){
                    if(group.h4){
                        data.push(group);
                    }
                    group = {
                        h4: $.trim(text.replace(/\./g, "")),
                        li: []
                    };
                } else {
                    group.li.push(text);
                }
            }
            
        }
    });
}


function trim(str){
    return $.trim(str.substring(0, str.length-3));
}

function toHtml(data){
    var html = '';
    $.each(data, function(index, row){
        html += '<h4>' + row.h4 + "</h4>\n";
        html += "<ul>\n";
        
        $.each(row.li, function(i, text){
            html += '<li><a href="">' + text + "</a></li>\n";
        });
        
        html += "</ul>\n";
    });
    
    console.log(html);
}

function toUrl(str){
    return str.toLocaleString().toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/([\-]+)/gi, '-');
}

$('#sidebar > h4').each(function(){
    var name = toUrl($(this).text()) + '.html';
    $(this).next('ul').find('a').each(function(){
        
    });
});

var content = '';
$("#page31 > div").each(function(){
  content += $.trim($(this).text());
});

$("#main-content > *").each(function(){
  for(var i=1;i<=3;i++){
    $("> *", this).each(function(){
      $(this).replaceWith($(this).html())
    });
  }
  

  $("> *", this).each(function(){
    var cls = $(this).attr("class");
    $(this).replaceWith($('<p/>', {'class': cls}).html($(this).html()));
  });
});