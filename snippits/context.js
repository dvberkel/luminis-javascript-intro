// All functions have a context accessible via 'this'
function useContext(subject) {
    console.log(this.greeting + " " + subject);
}

var helloContext   = { "greeting" : "Hello" };
var goodbyeContext = { "greeting" : "Goodbye" };

// Contexts are set via call/apply
useContext.call(helloContext, "World");
useContext.apply(goodbyeContext, [ "World" ]);
