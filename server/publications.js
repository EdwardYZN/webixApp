Meteor.publish('allocations', function() {
  return allocations.find({
    wk1: {
      $lt: 1100
    }
  });
})
