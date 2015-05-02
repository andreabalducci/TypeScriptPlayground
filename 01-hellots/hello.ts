/**
 * Hello
 */
class Hello {
	constructor(private name : string) {
		
	}
	
	public say():void{
		console.log('Hello '+ this.name);
	}
}

var salutation = new Hello('Andrea');
salutation.say();