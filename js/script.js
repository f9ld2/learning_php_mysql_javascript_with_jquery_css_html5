$('#main-content :header').each(function(){
    var text = $.trim($(this).text().toLowerCase().replace(/[^a-z0-9]/g, "-").replace(/[\-]+/g, "-"), ' -').replace(/^\-+|\-+$/gm,'');
    console.log(text);
    $('<a/>', {id: text}).insertBefore(this);
})