// ///////////////////////////
// v1
// ///////////////////////////
 console.info("v1.1");

 // beginning
function Tamagochi(firstName, lastName) {
		this.firstName = firstName || 'First Name';
		this.lastName = lastName || 'Second Name';
		this.age =  2;
		this.power =  10;
		this.speed =  3;
		this.sleep = false ;
		this.isDead = false;
		var shoutTimes = 0;		

    this.shout = function(word) {
        shoutTimes++;
        console.log(this.firstName + ' shouted: "' + word + '"');
    };

    this.getShoutTimes = function() {
        return shoutTimes;
    };
}

var Vasya = new Tamagochi('Vasya', 'Pupkin');
Vasya.shout('Ky');
Vasya.shout('Ka');
Vasya.shout('Ri');
Vasya.shout('Ky');
console.log('Vasya.getShoutTimes', Vasya.getShoutTimes());

var Petya = new Tamagochi('Petya', 'Peshkin');
Petya.shout('Ri');
Petya.shout('Ky');
console.log('Petya.getShoutTimes', Petya.getShoutTimes());
