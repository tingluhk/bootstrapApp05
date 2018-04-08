
// ========= index js

$('.port-item').click(function(){
  $('.collapse').collapse('hide')
})





$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});





// ----- Test buttons
$("#button01").click(function(){
  console.log("yo")
  $(".secondBox").css("flex-direction","column")
})



// ----- FlexBox js starts here
$(".callOutStyleTB").change(function() {
  let s = this.value;
  alignItems(s);
});
$(".callOutStyleLR").change(function() {
  let s = this.value;
  justifyContent(s);
});

function alignItems(s){
  $(".callOutContainer").css("align-items",s)
}
function justifyContent(s){
  $(".callOutContainer").css("justify-content",s)
}


// ----- Flex Wrap

$(".callOutflexWrap").change(function() {
  let s = this.value;
  flexWrap(s);
});
function flexWrap(s){
  $(".fixedContainer02").css("flex-wrap",s)
}

// ----- Flex Direction
$(".callOutflexDirection").change(function() {
  let s = this.value;
  flexDirection(s);
});
function flexDirection(s){
  $(".secondBox").css("flex-direction",s);
}
