$(document).ready(function(){
    $("#discription1").hide();
    $("#discription2").hide();
    $("#discription3").hide();

    $("#design").click(function(){
        $("#discription1").toggle();
        $(".design").toggle();
    });   
    $("#discription1").click(function(){
        $(".design").toggle();
        $("#discription1").toggle();
    });   
    
    $("#development").click(function(){
        $("#discription2").toggle();
        $(".develop").toggle();
    });   
    $("#discription2").click(function(){
        $(".develop").toggle();
        $("#discription2").toggle();
    });   
    
    $("#product").click(function(){
        $("#discription3").toggle();
        $(".produce").toggle();
    });   
    $("#discription3").click(function(){
        $(".produce").toggle();
        $("#discription3").toggle();
    });   
    
});
