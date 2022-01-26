module.exports = class Meetup {
    constructor(name){
        this.name = name
        this.attendees = []
    }

    printAttendeeNames() {
        //  console.log(this.attendees[0].name)
       //console.log(this.attendees[1].name)
       //console.log(this.attendees[2].name)
       this.attendees.forEach(printName)
   }
}
