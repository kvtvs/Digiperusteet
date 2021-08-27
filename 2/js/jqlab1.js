$('p:eq(1)').attr('id', 'joku');


$('button').click(function(){
   $('#joku').after('<p>Hello user</p>');
   $('p:last').attr('id', 'tp');
});

