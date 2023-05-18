//const colors = ["green", "blue", "red"];

//const bicycle = {
   // color: "blue",
   // size: "small",
    //ride() {
        //console.log("you began to pedal.");
   // },
//};
//bicycle.color = "red";
//bicycle.size = "large";
//console.log(bicycle.color);

class Cat {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
    chase() {
        console.log(`The ${this.color} cat, named ${this.name} began to chase`);
    }
}

class Housecat extends Cat {
  constructor(name, color) {
    super(name, color);
  }
    run() {
        console.log(`The housecat ran`);
    }
}

let cat1 = new Cat("beans", "white");
let cat2 = new Cat("remmy", "gray");
let house1 = new Housecat("puppy", "black");
console.log(cat1.name);
house1.run();
cat1.chase();
cat2.chase();

async function myFunction() {
    console.log("Hello World!")
}

myFunction().then(
    function(value) {
        //code if successful
    },
    function(error) {
        //code if error
    }
);

const myPromise = new Promise(function(res, rej) {
    setTimeout(function() {
        res("keep going!")
    }, 3000);
   
})

myPromise.then(function(value) {
    console.log(value);
});

async function myDisplay() {
    let myPromise = new Promise(function (resolve) {
        setTimeout(function () {
            resolve("you can do it!");
        }, 5000);
    });
    console.log(await myPromise);
}

myDisplay();


