if (Allocations.find().count() == 0) {
  for (var i = 0; i < 1000000; i++) {
    Allocations.insert({
      geo: 'PAC',
      country: 'China',
      channel: 'RSLR',
      product: 'MPC' + i + 'CH/A',
      sold_to: i,
      wk1: i + 1,
      wk2: i + 2,
      wk3: i + 3,
      wk4: i + 4,
      wk5: i + 5,
      wk6: i + 6,
      wk7: i + 7,
      wk8: i + 8,
      wk9: i + 9,
      wk10: i + 10,
      wk11: i + 11,
      wk12: i + 12,
      wk13: i + 13
    });
  }
}
