
$("select").change(function(e){
  var className = $(e.target).attr('class');
  changeLayout(className,this.value)
})

function changeLayout(option, newValue){
  console.log(option);
  $(".section01").find('.content').css(option,newValue)
}
