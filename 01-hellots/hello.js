/**
 * Hello
 */
var Hello = (function () {
    function Hello(name) {
        this.name = name;
    }
    Hello.prototype.say = function () {
        console.log('Hello ' + this.name);
    };
    return Hello;
})();
var salutation = new Hello('Andrea');
salutation.say();
