//back-end


//front-end
$(document).ready(function(){
    
    for(var i=1; i<=8; i++){
        $("#discription"+i).hide();
        $("#"+ i).hide();
    }
    $("#work5").hover(function(){
        $("#5").text("WORK5");
        $("#5").show();
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
            alert("Enter name or email");
        } else {
            alert(name + ", we have received your message. Thank you for reaching out to us.");
        }
        
    });
    
});

