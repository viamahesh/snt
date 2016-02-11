$(document).ready(function(){
    // init slider
    $('.range-slider').jRange({
        from: 85000,
        to: 2500000,
        step: 5000,
        scale: [0,25,50,75,100],
        format: '$%s+',
        width: 600,
        showLabels: true,
        isRange : true
    });
    
    // get location
    $.getJSON('http://ipinfo.io', function(data){
        $('#location-data').html(data.city+','+data.region);
    });
    
    // add nice select
    $('select').niceSelect();
    
    // check box select on div click
    $("div.check-box").on("click",function(event) {
        var target = $(event.target);
        if (target.is('input:checkbox')) return;
        var checkbox = $(this).find("input[type='checkbox']");
        if( !checkbox.prop("checked") ){
            checkbox.prop("checked",true);
        } else {
            checkbox.prop("checked",false);
        }
    });
    
});