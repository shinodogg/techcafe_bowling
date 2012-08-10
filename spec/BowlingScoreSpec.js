describe("BowlingScore", function() {
  var player;

  beforeEach(function() {
    player = new Player();
  });

  it("should be 20 score with all gutter", function() {
    var sum = 0;
    for (i = 0; i < 20; i = i +1){
      var result = player.throw();
      sum = sum + result;
    }
    expect(sum).toEqual(0);
  });
});
