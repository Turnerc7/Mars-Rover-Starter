const Message  = require('../message.js');
const Command = require('../command');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.
//test 4
//describe("Message class", function() {
    describe('Message class', () => {
      it('throws error if a name is NOT passed into the constructor as the first parameter', () => {
      expect(() => new Message()).toThrow("Name is required");
      });
    });

//test 5
describe("constructor sets name", () => {
  it("sets the name property when a name is passed", () => {
    let name = 'NAME';
    let message = new Message(name);
    expect(message.name).toBe(name);
  });
});

//test 6
describe("contains a commands array passed into the constructor as the 2nd argument", () => {
  it("contains a commands array", () => {
    let commands = [new Command('MODE_CHANGE'), new Command('STATUS_CHECK')];
    let message = new Message('NAME', commands);
    expect(message.commands).toEqual(commands);
  });
});


   