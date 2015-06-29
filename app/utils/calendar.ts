export class Calendar{
  constructor(){
     this.events = [
        {
          title: "title",
          start: "2015-06-30T18:00:00",
          end: "2015-06-30T20:00:00"
        }
     ];

    console.log(this.events);

    $('#calendar').fullCalendar({
      events: function(start, end, timezone, callback) {
          callback(this.events);   
      },
      
      eventClick: function(event) {
        alert('Title : ' + event.title + ' | Time : ' + event.start.format() + ' - ' + event.end.format())
        return false;
      },

      dayClick: function(date, jsEvent, view) {
        // alert('Clicked on: ' + date.format() + 'Current view: ' + view.name);
        $('.popup').css('display', 'block');
      }
      
    });
  },

  addNewEvent(eventsObject){
     this.events.push(eventsObject);
  }
}