$(function(){

  $(".more").click(function(){
    $(this).toggleClass('work-open');
  })

});


$(function () {
  $(".gallery .more").each(function (index, el) {
    $(el).on("click", function () {
      var currentTarget = $(".work-inside")[index];
      var opened = $(currentTarget).toggleClass("work-open");
      $(".work-inside").not(opened).removeClass("work-open");
  
    });
  });
});


