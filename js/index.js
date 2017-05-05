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

var content = '';
$("#main-content > *").each(function(){
  content += $(this).html() + "\n";
});

$("#main-content").html(content);
$("#main-content p").removeAttr('class');


//Setting Up a Development Server: 
//Introduction to PHP: i<65 || i>92
//Expressions and Control Flow in PHP i<93 || i>124
//php-functions-and-objects 
//  i<125 || i>153
//php-arrays 
//  i<153 || i>=169
//Practical PHP  | practical-php
//  i<169 || i>=195
//Introduction to MySQL  | introduction-to-mysql
//  i<195 || i>= 239
//Mastering MySQL  | mastering-mysql
//  i<239 || i>=263
//Accessing MySQL Using PHP  | accessing-mysql-using-php
//  i<263 || i>=295
//Form Handling  | form-handling
//  i<295 || i>=317
//Cookies, Sessions, and Authentication  | cookies-sessions-and-authentication
//  i<317 || i>=339
//Exploring JavaScript  | exploring-javascript
//  i<339 || i>=361
//Expressions and Control Flow in JavaScript  | expressions-and-control-flow-in-javascript
//  i<361 || i>=381
//JavaScript Functions, Objects, and Arrays  | javascript-functions-objects-and-arrays
//  i<381 || i>=401
//JavaScript and PHP Validation and Error Handling  | javascript-and-php-validation-and-error-handling
//  i<401 || i>=425
//Using Ajax  | using-ajax
//  i<425 || i>=443
//Introduction to CSS  | introduction-to-css
//  i<443 || i>=481
//Advanced CSS with CSS3  | advanced-css-with-css3
//  i<481 || i>=509
//Accessing CSS from JavaScript  | accessing-css-from-javascript
//  i<509 || i>=529
//Introduction to jQuery  | introduction-to-jquery
//  i<529 || i>=587
//Introduction to HTML5  | introduction-to-html5
//  i<587 || i>=595
//The HTML5 Canvas  | the-html5-canvas
//  i<595 || i>=647
//HTML5 Audio and Video  | html5-audio-and-video
//  i<647 || i>=661
//Other HTML5 Features  | other-html5-features
//  i<661 || i>=683
//Bringing It All Together  | bringing-it-all-together
//  i<683
for(var i=45; i<=806; i++){
  if(i<339 || i>=361){
    $('#page'+i).remove();
  }
}