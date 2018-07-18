jQuery(document).ready(function() {
    'use strict';
    var win = $(window);
    var doc = $(document);
    var loading = $('#loading');
    var active = $( "#posts" ).is( ".active" );

    // Each time the user scrolls
    win.on('scroll', function() {

    /* If scroll is end of page loading new posts */
    if ( doc.height() - win.height() - 80 < win.scrollTop() && active ) {

    loading.show();


    /* THIS CODE IS ONLY FOR EXAMPLE, DELETE AND REPLACE WITH AJAX REQUEST OR SOMETHING ELSE */
    var data_load=$('body').attr('id');
    var file_path='js/sample-'+data_load+'.js';
    $.getScript(file_path, function(){

    setTimeout(function(){ $('#posts-container').append(html);
                           twemoji.parse(document.body);
                           loading.hide();}, 1000);

       });

    }
  });
});
