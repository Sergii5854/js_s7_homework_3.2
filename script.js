
// ///////////////////////////
// v1
// ///////////////////////////
console.info("v1.1")
var audio;

// beginning
function Tamagochi(firstName, lastName, age, sleep) {
  this.firstName = firstName || 'Dragon'
  this.lastName = lastName || 'IceBorn'
  this.age = '' || 2
  var power = 10
  var speed = 3
  var feed = 10
  var intelligence = 6
  var endurance = 4
  var spirituality = 8

  this.sleep = '' || 'not sleep'
  this.isDead = false

  var shoutTimes = 0

  this.name = function () {
    return ( this.firstName );
  };
  this.lastN = function () {
    return (this.lastName );
  };

  if (this.sleep === 'not sleep') {// як обмежити параметри, котрі знаходяться в цьому ы


    this.setAge = function (age) {
      this.random()
      var getAge = prompt('how old is your Tamaguchi')
      return (this.age = getAge );
    };
    this.shout = function (word) {
      shoutTimes++;
      console.log(this.firstName + ' shouted: "' + word + '"');
    };

    this.getShoutTimes = function () {
      return shoutTimes;
    };

    this.goToGym = function () {
      this.random()
      return (
          power += 3,
          speed += 1,
          feed -= 2,
          console.log('Now ' + this.firstName + ' your power is : "' + power + '"' + ' your speed is : "' + speed + '"' + ' but your feed is : "' + feed + '"')
      )
    }

    this.goToLanch = function () {
      this.random()
      return (
          power -= 2,
          speed -= 2,
          feed += 2,
          console.log('Now ' + this.firstName + ' your feed is : "' + feed + '"' + ' but your speed  and power decrease for 2 point and your speed is : "' + speed + '"' + ' , power : "' + power + '"')
      )
    }

    this.goToSleap = function (sleep) {
      this.random()
      var sleep = this.sleep
      console.log(sleep, "Please some lullaby  ");

      setTimeout(function () {
        console.log("ok, you favorite ");
        audio = document.getElementById('go_to_sleap');
        play_audio('play', audio)

        setTimeout(function () {
          play_audio('stop', audio)
          console.log("Z - z - z - Zzz")
        }, 1000);
      }, 1000);


      return (
          sleep = 'sleep',
              this.sleep = sleep,
              console.log(this.sleep, sleep, "It's graite")

      )
    }

    this.goWatchTV = function () {
      this.random()
      return (
          power -= 1,
          speed -= 1,
          intelligence -= 2,
          endurance -= 1,
          spirituality -= 1,
      console.log('What a strange feeling that something has changed but I do not understand what')
      )
    }

    this.goToLibrary = function () {
      this.random()
      return (
          intelligence += 3,
          feed -= 1,
          spirituality += 1,
      console.log('Very good now, ' + this.firstName + ' your intelligence is : "' + intelligence + '"' + ' your spirituality is : "' + spirituality + '"' + ' but your feed is : "' + feed + '"')
      )
    }

    this.goToRun = function () {
      this.random()
      return (
          endurance += 3,
          feed -= 1,
          
      console.log('Very good now, ' + this.firstName + ' your endurance is : "' + endurance + ' but your feed is : "' + feed + '"')
      )
    }


  } else {
    console.log('now your tamagochi sleep if you want to play you need wakeup ')
    console.log('tamagochi.wakeUp() - wakeup tamagochi ')
  }


  this.wakeUp = function (sleep) {
    this.random()
    console.warn(" You have 2 secon to shout your volume, or wear earphones ")
    setTimeout(function () {
      console.log("Good Morning World, Hello World  ");
      audio = document.getElementById('wake_up');
      play_audio('play', audio)

      setTimeout(function () {
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


  this.help = function () {
    console.group('help')
    console.log('tamagochi.help()')
    console.log('tamagochi.goToGym() ')
    console.log('tamagochi.goToLanch()')
    console.log('tamagochi.goToSleap()')
    console.log('tamagochi.wakeUp() - before do this, please shout your volume, or earphones !!! ')
    console.log('tamagochi.name()  - ask tamagochi name ')
    console.log('tamagochi.lastN()   - ask tamagochi last name  ')
    console.log('tamagochi.setAge() - set new age to your tamagochi')
    console.log('tamagochi.random() - you want play')
    console.log('tamagochi.goToLibrary() - visit the library')
    console.log('tamagochi.goWatchTV() - "have a rest" ')
    console.log('tamagochi.random() - you want play')
    console.log('tamagochi.random() - you want play')
    console.log('getShoutTimes() ')
    console.groupEnd()

  }


  this.random = function () {
    var random = getRandomInt(0, 100)
    if (random > 10 && random < 20) {
      console.log('what you point of vue about : " Practice makes perfect. – Повторення - мати навчання. " ')
    }

    if (random > 20 && random < 30) {
      return (
          power += 1,
              console.log('I feel a surge of strength , my power is : ' + power)
      )
    }
    if (random > 30 && random < 40) {
      return (
          speed -= 2,
              console.log('Something I\'m tired of, my speed is : ' + speed)
      )
    }

    if (random > 40 && random < 60) {
      alert("some time it\'s hapan and game over. listen to more music. ")
      setTimeout(function () {
        window.location = "https://www.youtube.com/watch?v=P99h6iPRPN8";
        location.reload();
      }, 1000);
    }
    else if (random > 60 && random < 90) {
      return (
          feed -= 4,
              console.log('I\'m so hungry , my feed is : ' + feed)
      )
    }

    else if (random > 90) {
      alert("some time it\'s hapan and you is Dead. ")

      setTimeout(function () {
        console.log('Sorry');
        location.reload();
      }, 20000);
      location.reload();
    }
  }

} //Tamagochi end


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function play_audio(task, audio) {
  audio;
  if (task === 'play') {
    audio.play();
  }
  if (task == 'stop') {
    audio.pause()
    audio = null
    console.log('work now : ) ')
  }
}


var tamagochiName = prompt('give first name name to Tamaguchi')
var tamagochiLastName = prompt('give last name name to Tamaguchi')

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