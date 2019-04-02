let restaurant = {
  name: 'abc',
  guestCapacity: 75,
  guestCount: 0,
  checkAvailability: function() {
    let seatsLeft = this.guestCapacity - this.guestCount;
  }
};
console.log(seatsLeft);
