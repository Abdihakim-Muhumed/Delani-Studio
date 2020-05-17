$(document).ready(function(){
    $("#discription1").hide();
    $("#discription2").hide();
    $("#discription3").hide();
    
    $("#design").click(function(){
        $("#discription1").toggle();
        $(".design").toggle();
    });   
    
    $("#development").click(function(){
        $("#discription2").toggle();
        $(".develop").toggle();
    });   
    
    $("#product").click(function(){
        $("#discription3").toggle();
        $(".produce").toggle();
    });   
    
});
