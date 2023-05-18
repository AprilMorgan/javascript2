async function myFunction() {
    console.log("Good morning!")
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
        res("You've got this!")
    }, 3000);
   
})

myPromise.then(function(value) {
    console.log(value);
});

async function myDisplay() {
    let myPromise = new Promise(function (resolve) {
        setTimeout(function () {
            resolve("Don't give up!");
        }, 5000);
    });
    console.log(await myPromise);
}

myDisplay();


