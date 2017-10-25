// ///////////////////////////
// v1
// ///////////////////////////
 console.info("v1.1")

 // beginning
function Tamagochi(firstName, lastName) {
		this.firstName = firstName || 'Dragon';
		this.lastName = lastName || 'IceBorn';
		this.age =  2;
		var power =  10;
		var speed =  3;
		var feed = 10
		var sleep = false 
		var isDead = false
		
		var shoutTimes = 0

    this.shout = function(word) {
        shoutTimes++;
        console.log(this.firstName + ' shouted: "' + word + '"');
    };

    this.getShoutTimes = function() {
        return shoutTimes;
    };

    this.go_to_gym = function(){
    	return (
    		power += 3,
			speed += 1,
			feed  -= 2,
			console.log('Now ' + this.firstName + ' your power is : "' + power + '"'  + ' your speed is : "' + speed + '"' + ' but your feed is : "' + feed + '"')
		)
    }

    this.go_to_lanch = function(){
    	return (
    		power -= 2,
    		speed -= 2,
    		feed += 2,
    		console.log('Now ' + this.firstName + ' your feed is : "' + feed + '"'  + ' but your speed  and power decrease for 2 point and your speed is : "' + speed + '"' + ' , power : "' + power + '"')
    	)
    }

        this.go_to_sleap = function(){
        return (
            sleap = true,
            console.log("Z - z - z - Zzz")
        )
    }

    var help = function(){
    	console.group('help')
    	console.log('.help()')
    	console.log('.go_to_gym() ')
    	console.log('.go_to_lanch()' )
    	console.log('.go_to_sleap()')
    	console.log()
    	console.log()
    	console.log()
    	console.log()
    	console.log()
    	console.log()
    	console.groupEnd()

    }
	help();

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


//https://github.com/alexkaufman06/tamagotchi-js/blob/master/js/scripts.js