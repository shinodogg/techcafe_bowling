describe("BowlingScore", function() {
  var player;

  beforeEach(function() {
    player = new Player();
  });

  it("should be 20 score with all gutter", function() {
    var sum = 0;
    for (i = 0; i < 20; i = i +1){
      var result = player.gutterThrow();
      sum = sum + result;
    }
    expect(sum).toEqual(0);
  });

  it("should be 20 score with all one pin", function() {
    var sum = 0;
    for (i = 0; i < 20; i = i +1){
      var result = player.onePinThrow();
      sum = sum + result;
    }
    expect(sum).toEqual(20);
  });

});
