// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
var todoList = $('.todolist')
var textinput = $('#textinput')

for (var i = 9; i < 18; i++) {
  var thisidvalue = ('#hour-' + i.toString())
  var balhh = $(thisidvalue).children('#textinput').val()
  console.log(balhh)
  var texte = $(thisidvalue).children('#textinput').text()
  console.log(texte)
  if (localStorage.getItem(thisidvalue) !== null) {
    var stored = JSON.parse(localStorage.getItem(thisidvalue))
    
    balhh = balhh + stored
  }
  
}
var today = dayjs();
$('#currentDay').text(today.format('dddd, MMMM D, YYYY h:mm A'))
// the code isn't run until the browser has finished rendering all the elements
// in the html.


$(function () {

    var liveHourID = dayjs().format('H');

    var livehourInt = parseInt(liveHourID)

    for (var i = 9; i < 18; i++) {
      if (i < livehourInt) {
        $("#hour-" + i.toString()).removeClass('future')
        $("#hour-" + i.toString()).addClass('past')
      }
    }

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
  
  
      setInterval(updateClass, 1000);

      
});

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


/*document.addEventListener('click', function(event) {
  var element = event.target;

  // TODO: Describe the functionality of the following `if` statement.
  if (element.matches("button")) {
    var thisid = element.parentElement.getAttribute("Id");
    console.log(thisid)
    var ye = element.parentElement
    var ye2 = ye.children(textinput)
    console.log(ye2)
    var thistext = thisid.children('.textinput')
    console.log(thistext)
    localStorage.setItem(thisid, thisid[1])
    
  }
});
*/
// if time (after parse) is less than live time, add area of past.

// TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.


/*function Comp() {
  var liveHourID = "hour-" + dayjs().format('H');
  //targets any card with classtag ".present"
  var FutureCard = $('.future');
  //retreives id of present card
  var FutureCardId = $('.future').attr('id');
  
  var ishour = (FutureCardId === liveHourID);
  
  if (ishour) {
    FutureCard.addClass('present')
    FutureCard.removeClass('future')
  }
}
*/



