/*jslint browser: true, devel: true, white: true, plusplus: true, sloppy: true*/
describe("Hello", function() {
  it("says hello", function() {
    expect(hello()).toEqual("Hello!");
  }); 

  it("says hello to someone", function() {
    expect(hello("Fred")).toEqual("Hello, Fred!");
  });
});
