//back-end
var i=1;
var id1 = "#work";
var id2 = "#"
//front-end
$(document).ready(function(){   
    for(i=1; i<=8; i++){
        $("#discription"+i).hide();
        $("#"+ i).hide();    
        $("#"+i).text("Project"+i);    
    }     
    $ ("#work4").hover(function(){
        $("#4").show();
    });
    $ ("#work3").hover(function(){
        $("#3").show();
    });
    $ ("#work2").hover(function(){
        $("#2").show();
    });
    $ ("#work1").hover(function(){
        $("#1").show();
    });
    $ ("#work5").hover(function(){
        $("#5").show();
    });
    $ ("#work6").hover(function(){
        $("#6").show();
    });
    $ ("#work7").hover(function(){
        $("#7").show();
    });
    $ ("#work8").hover(function(){
        $("#8").show();
    });
    
    
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
    $("form.feedback").submit(function(){
        var name = $("#name").val();
        var email = $("#email").val();
        if (name.length == 0 || email.length == 0) {
            alert("Name or email empty");
        } else {
            alert(name + ", we have received your message. Thank you for reaching out to us.");
        }
        
    });
    
});

