$( "#hider" ).click(function() {
  $( ".distractions" ).toggle();
});

$( "#shower" ).click(function() {
  $( ".sidebarr-right-td" ).toggle();
});

$("#killer").click(function(){
    $( ".distractions, .sidebarr-right-td" ).remove();
});