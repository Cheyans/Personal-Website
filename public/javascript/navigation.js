var btn = $('.button');
var prevBtn;

var width = 0;
var height = 0;
var r = 0;
setSize();

function setSize() {
  width = $(window).width();
	height = $(window).height();
  r = Math.sqrt(width * width + height * height);
}
$(window).resize(setSize);

btn.click(function(e) {
  if(prevBtn == e.target){
    return;
  }
  prevBtn = e.target;

  //clean & create circle
  btn.removeClass('current');
  $(this).addClass('current');
  var circle = $("<div unselectable='on' id='circle'> This is text</div>");

  $('.background').append(circle);

  //change button active/inactive css
  $('.button').css({
    "box-shadow": "0 3px 17px 0 rgba(0, 0, 0, 0.3)",
    "cursor": "pointer"
  })
  $(this).css({
    "boxShadow": "0 0 0 0 rgba(0, 0, 0, 0)",
    "cursor": "default"
  });

  circle.css({
    position: 'absolute',
    'background-color': $(this).css('background-color'),
    width: 0,
    height: 0,
    "border-radius": "50%",
    //position of click button
    left: $(this).css('left'),
    top:  $(this).css('top'),
    'margin-left': 0,
    'margin-top': 0,
    'webkit-user-select': 'none',
    '-moz-user-select': 'none',
    '-ms-user-select': 'none'
  });

  circle.animate({
    width: (r * 2),
    height: (r * 2),
   	'margin-left': -r,
    'margin-top': -r
  }, {
    duration: 600,
    easing: "easeInOutCubic",
    queue: false,
    complete: function() {
      //set background color div to circle color
     circle.parent().css('background-color',
                    $(this).css('background-color'));
     circle.detach();
    }
  });
});
