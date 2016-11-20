$(document).ready(function(){

//- Check for the click on the li element	
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed"); 
});

// Deleting the list by clicking on the X 
$("ul").on("click","span", function(event){ 
	$(this).parent().fadeOut(1000, function(){ // this = span
		$(this).remove();	// this = li 
	});
event.stopPropagation(); // prevents event to propagate to the parent element
});

$("input[type='text']").keypress(function(event){
	
	if (event.which === 13 ){ //checking for key stoke "enter"
		var todoList = $(this).val();		// grabbing the sting in the <input> and saving to todoList
		if (!(todoList === '')){
		$("ul").append("<li><span> <i class='fa fa-trash-o' aria-hidden='true'></i> </span>" + todoList + "</li>"); // pushing to ul as one of the li element
		$(this).val(""); // clearing the text area 
	}

	}
});
$("input[type='text']").fadeOut();
$(".fa-pencil-square-o").click(function(){

	$("input[type='text']").fadeToggle();
});

});
 








//---------------------------------------------------------------------
//Instead of the below code we used :  $(this).toggleCLass("completed");
//if( $(this).css("color") === "rgb(128, 128, 128)"){
	//	console.log("it grey");
	//	$(this).css({
	//		color: "rgb(0, 0, 0)",
	//		textDecoration: "none",
	//		fontStyle:	"normal"
		//	});
	//	}
	
	//	else {
	//		$(this).css({
	//			textDecoration: "line-through",
	//			color: "grey",
	//			fontStyle:	"italic"
	//		});
	//		}