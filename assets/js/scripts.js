$(document).ready(function(){
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
    
    
    $.getJSON('http://ipinfo.io', function(data){
        $('#location-data').html(data.city+','+data.region);
    });
    
    $('select').niceSelect();
    
});