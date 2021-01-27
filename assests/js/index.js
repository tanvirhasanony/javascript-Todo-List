//check of specific todos clicking
$("ul").on("click","li",function(){
    // if($(this).css("color") === "rgb(128, 128, 128)"){
    //     $(this).css({
    //         color:"black",
    //         textDecoration:"none"
    //     });
    // }
    // else{
    //     $(this).css({
    //         color:"gray",
    //         textDecoration:"line-through"
    //     });
    // }
    $(this).toggleClass("completed");
});

// delete todo
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text'").keypress(function(event){
    if(event.which === 13){
        // grabbing text
        let todoText = $(this).val();
        $(this).val("");
        //create new li
        $("ul").append("<li><span>X</span> " + todoText + "</li>")
    }
});