$('#4p').hide();

$('#sdiv').mouseenter(
    $('#4p').append('<p>About to select a link</p'),
    function(){$('#4p').show();}
);

$('#sdiv').mouseleave(
    function(){$('#4p').hide();}
    //function(){$('#4p').remove();}
);
