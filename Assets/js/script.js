// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
var textinput = $('#textinput')

var today = dayjs();
//make the live server update current date and time
$('#currentDay').text(today.format('dddd, MMMM D, YYYY h:mm A'))


$(function () {
  
  returnlocal()
    
  var liveHourID = dayjs().format('H');

  var livehourInt = parseInt(liveHourID)

    for (var i = 9; i < 18; i++) {
      if (i < livehourInt) {
        $("#hour-" + i.toString()).removeClass('future')
        $("#hour-" + i.toString()).addClass('past')
      }
    }
  
  setInterval(updateClass, 1000);

  document.addEventListener('click', function(event) {

    var element = event.target;
  
    if (element.matches("button")) {
      //retrieves ID name from selected element
      var thisid = element.parentElement.getAttribute("Id");
      //adds hashtag to use later
      var idname = ('#' + thisid)
      //retrieves the value of the inputed text by the user (within a timeslot)
      var balhh = $(idname).children('#textinput').val()
      //sets local storage of that tieslot to whatever text the user added
      localStorage.setItem((idname), JSON.stringify(balhh))
    }
  })
      
});


//function to render previous input from local storage
function returnlocal () {
    for (var i = 9; i < 18; i++) {
    
      var thisidvalue = ('#hour-' + i.toString())

      var balhh = $(thisidvalue).children('#textinput').val()

        if (localStorage.getItem(thisidvalue) !== "") {
          
          var stored = (localStorage.getItem(thisidvalue))

          balhh = $(thisidvalue).children('#textinput').html(stored)

          balhh
        }
  }
}

//function to update class coloring based off time
function updateClass() {
  //targets the live hour of the day
  var liveHourID = "hour-" + dayjs().format('H');
  // targets ID tag
  var livePresentCard = $('#' + liveHourID);
  //targets any card with classtag ".present"
  var oldPresentCard = $('.present');
  //retreives id of present card
  var oldPresentCardID = $('.present').attr('id');
  
  var hourIsChanged = (oldPresentCardID !== liveHourID);
  if (hourIsChanged) {
    oldPresentCard.addClass('past');
    oldPresentCard.removeClass('present');
    livePresentCard.addClass('present');
    livePresentCard.removeClass('future');
  };
};

