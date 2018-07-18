jQuery(document).ready(function() {
    'use strict';

    var settings_modal=$('#settingsmodal');

    settings_modal.on('shown.bs.modal', function (e) {
      var switch_checkbox=$(".switch-checkbox");
      switch_checkbox.bootstrapSwitch();
})

    var emojis = (function() {
            // Set the size of the rendered Emojis
            // This can be set to 16x16, 36x36, or 72x72
            twemoji.size = '16x16';

            // Parse the document body and
            // insert <img> tags in place of Unicode Emojis
            twemoji.parse(document.body);
        }
        (window, twemoji));

    var profile = $('#profileTab a');
    var posts = $('#postsTab a');
    var chat = $('#chatTab a');


    /* Click functions for tab in personal and user profile */
    profile.on('click', function(e) {
        $(this).tab('show')
    });

    posts.on('click', function(e) {
        $(this).tab('show')
    });

    posts.on('click', function(e) {
        $(this).tab('show')
    });
});
