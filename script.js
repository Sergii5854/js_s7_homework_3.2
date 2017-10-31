// ///////////////////////////
// v1
// ///////////////////////////
 console.info("v1.1")
  var audio;

 // beginning
function Tamagochi(firstName, lastName, age, sleep) {
		this.firstName = firstName || 'Dragon';
		this.lastName = lastName || 'IceBorn';
		this.age =  '' || 2;
		var power =  10;
		var speed =  3;
		var feed = 10
		this.sleep = '' || 'not sleep' 
		this.isDead = false
		
		var shoutTimes = 0

    this.name = function() {
        return( this.firstName );
    };
    this.lastN = function() {     
        return(this.lastName );
    };

    if(this.sleep === 'not sleep' ){

      this.setAge = function(age) {
         var getAge =    prompt('how old is your Tamaguchi')
          return(this.age = getAge );
      };
      this.shout = function(word) {
          shoutTimes++;
          console.log(this.firstName + ' shouted: "' + word + '"');
      };

      this.getShoutTimes = function() {
          return shoutTimes;
      };

      this.goToGym = function(){
      	return (
      		power += 3,
  			speed += 1,
  			feed  -= 2,
  			console.log('Now ' + this.firstName + ' your power is : "' + power + '"'  + ' your speed is : "' + speed + '"' + ' but your feed is : "' + feed + '"')
  		)
      }

      this.goToLanch = function(){
      	return (
      		power -= 2,
      		speed -= 2,
      		feed += 2,
      		console.log('Now ' + this.firstName + ' your feed is : "' + feed + '"'  + ' but your speed  and power decrease for 2 point and your speed is : "' + speed + '"' + ' , power : "' + power + '"')
      	)
      }

      this.goToSleap = function(sleep){
          var sleep = this.sleep
          console.log(sleep, "Please some lullaby  ");

          setTimeout(function(){
          console.log("ok, you favorite ");
            audio = document.getElementById('go_to_sleap');  
            play_audio('play' , audio)

            setTimeout(function(){
              play_audio('stop', audio)
              console.log("Z - z - z - Zzz")
            }, 1000);
          }, 1000);     


        return (
            sleep = 'sleep',
            this.sleep = sleep,
            console.log( this.sleep, sleep, "It's graite")

        )
      }

  }else {
    console.log('Your tamagochi is sleap now ')
    console.info('write tamagochi.wakeUp() to wake up your tamagochi  ')
  }//end sleap 

    this.wakeUp = function(sleep){
         console.warn(" You have 2 secon to shout your volume, or wear earphones ")
         setTimeout(function(){
          console.log("Good Morning World, Hello World  ");
          audio = document.getElementById('wake_up');  
         play_audio('play' , audio)

            setTimeout(function(){
                console.log('Good Morning World, Hello World');
              var audio = document.getElementById('wake_up');
              play_audio('stop', audio)
              console.info(" ok, I am wake up ")
                }, 20000);
        }, 2000);     


        return (
            this.sleap = 'not sleep',
            console.info(" no , no , no ")

        )
    }


    this.help = function(){
    	console.group('help')
    	console.log('tamagochi.help()')
    	console.log('tamagochi.goToGym() ')
    	console.log('tamagochi.goToLanch()' )
    	console.log('tamagochi.goToSleap()')
    	console.log('tamagochi.wakeUp() - before do this, please shout your volume, or earphones !!! ')
    	console.log('tamagochi.name()  - ask tamagochi name ')
    	console.log('tamagochi.lastN()   - ask tamagochi last name  ')
    	console.log('tamagochi.setAge() - set new age to your tamagochi')
    	console.log()
    	console.log('getShoutTimes() ')
    	console.groupEnd()

    }


} //Tamagochi end


function play_audio(task , audio) {
      audio;
      if(task === 'play'){
           audio.play();
      }
      if(task == 'stop'){          
         audio.pause()         
         audio = null  
         console.log('work now : ) ')
      }
 }  



var tamagochiName  = prompt('give first name name to Tamaguchi')
var tamagochiLastName  = prompt('give last name name to Tamaguchi')

var tamagochi = new Tamagochi(tamagochiName, tamagochiLastName)
tamagochi.help()


var Vasya = new Tamagochi('Vasya', 'Pupkin');
Vasya.shout('Ky ');
Vasya.shout('Ka');
Vasya.shout('Ri');
Vasya.shout('Ky');

console.log('Vasya.getShoutTimes', Vasya.getShoutTimes());

var Petya = new Tamagochi('Petya', 'Peshkin');
Petya.shout('he lo ');
Petya.shout('Ky');
console.log('Petya.getShoutTimes', Petya.getShoutTimes());


//https://github.com/alexkaufman06/tamagotchi-js/blob/master/js/scripts.js