# Work Day Scheduler - Your Personal Daily Planner
![A user clicks on slots on the color-coded calendar and edits the events.](./Assets/05-third-party-apis-homework-demo.gif)


## Your Task

A simple calendar application that allows a user to save events for each hour of the day by modifying starter code. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.
(Also uses [Day.js](https://day.js.org/en/))


## Acceptance Criteria

```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

The following animation demonstrates the application functionality:

## Technologies Used
1. HTML - used to create and structure the given webpage
2. CSS - used to modify the presentation and style of the given webpage
3. Git - used to clone down the original code prior to making modifications
4. Github - used to create this repository, modify and eventually commit each change made, and ultimately deploy the fully edited webpage
5. Javascript - used to generate the password after interacting with the webpage
6. Day.js
7. Jquery

## Code Snippet

``
function returnlocal () {
    for (var i = 9; i < 18; i++) {
    
      var thisidvalue = ('#hour-' + i.toString())

      var balhh = $(thisidvalue).children('#textinput').val()

        if (localStorage.getItem(thisidvalue) !== '') {
          
          var stored = JSON.parse(localStorage.getItem(thisidvalue))

          balhh = $(thisidvalue).children('#textinput').val(stored)

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
``
