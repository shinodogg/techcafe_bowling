describe("Hoge", function() {
  var hoge;

  beforeEach(function() {
    hoge = new Hoge();
  });

  it("should be set hair style", function() {
    hoge.hair("long");
    expect(hoge.style).toEqual("long");
    expect(hoge.isCut).toBe(true);
  });
});