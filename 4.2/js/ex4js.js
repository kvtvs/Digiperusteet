$('button').click(function(){
    $('#advice').append('<h2>selet your favorite color among the colors</h2>')
});

$('#img1').attr('src', 'pics/blue.jpg');
$('#img2').attr('src', 'pics/red.jpg');
$('#img3').attr('src', 'pics/yellow.jpg');

$('#img1').click(function(){
    $('#img1').hide();
    $('ul').append('<li>blue</li>');
});

$('#img2').click(function(){
    $('#img2').hide();
    $('ul').append('<li>red</li>');
});

$('#img3').click(function(){
    $('#img3').hide();
    $('ul').append('<li>yellow</li>');
});

$('button').click(function(){
    $('#sel').append('<h2>Your favorite colors in order</h2>')
});

