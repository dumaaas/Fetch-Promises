function catFact() {
    hideText();
    showLoader();
    fetch('https://catfact.ninja/fact?max_length=140')
        .then(response => response.json())
        .then(data => {
            hideLoader();
            printText(data.fact);
        })
        .catch(err => printText(err))
}

function promise() {
    hideText();
    showLoader();
    new Promise(function (resolve, reject) {
        fetch('https://catfact.ninja/fact?max_length=140')
            .then(response => response.json())
            .then(data => {
                if (data.fact) {
                    hideLoader();
                    printText(data.fact);
                } else {
                    hideLoader();
                    printText('Error');
                }
            })
    });
}

function promiseRace() {
    hideText();
    showLoader();
    var promise1 = new Promise((resolve, reject) => {
        fetch('https://catfact.ninja/fact?max_length=140')
            .then(response => response.json())
            .then(data => {
                if (data.fact) {
                    var text = 'Cat fact: ' + data.fact;
                    resolve(text);
                } else {
                    console.log('nope')
                    reject('Error');
                }
            })
    })
    var promise2 = new Promise((resolve, reject) => {
        fetch('https://www.boredapi.com/api/activity')
            .then(response => response.json())
            .then(data => {
                if (data.activity) {
                    var text = 'Activity: ' + data.activity;
                    resolve(text);
                } else {
                    reject('Error');
                }
            })
    })
    var promise3 = new Promise((resolve, reject) => {
        fetch('https://api.ipify.org/?format=json')
            .then(response => response.json())
            .then(data => {
                if (data.ip) {
                    var text = 'IP Address: ' + data.ip;
                    resolve(text);
                } else {
                    reject('Error');
                }
            })
    })

    Promise.race([promise1, promise2, promise3]).then(
        (value) => {
            hideLoader();
            printText(value);
        },
        (error) => {
            hideLoader();
            printText(error);
        }
    )
}

function promiseAll() {
    hideText();
    showLoader();
    var promise1 = new Promise((resolve, reject) => {
        fetch('https://catfact.ninja/fact?max_length=140')
            .then(response => response.json())
            .then(data => {
                if (data.fact) {
                    var text = 'Cat fact: ' + data.fact + '.</br></br>';
                    resolve(text);
                } else {
                    reject('First promise not fullfiled');
                }
            })
    })
    var promise2 = new Promise((resolve, reject) => {
        fetch('https://www.boredapi.com/api/activity')
            .then(response => response.json())
            .then(data => {
                if (data.activity) {
                    var text = 'Activity: ' + data.activity + '.</br></br>';
                    resolve(text);
                } else {
                    reject('Second promise not fullfiled');
                }
            })
    })
    var promise3 = new Promise((resolve, reject) => {
        fetch('https://api.chucknorris.io/jokes/random')
            .then(response => response.json())
            .then(data => {
                if (data.value) {
                    var text = 'Joke: ' + data.value + '.</br></br>';
                    resolve(text);
                } else {
                    reject('Third promise not fullfiled');
                }
            })
    })

    Promise.all([promise1, promise2, promise3]).then(values => {
        var text = '';
        for (let i = 0; i < values.length; i++) {
            text += i + 1 + '. ' + values[i]
        }
        hideLoader();
        printText(text);
    }, error => {
        hideLoader();
        printText(error);
    })

}

function promiseAllSettled() {
    hideText();
    showLoader();
    var promise1 = new Promise((resolve, reject) => {
        fetch('https://catfact.ninja/fact?max_length=140')
            .then(response => response.json())
            .then(data => {
                if (data.fact) {
                    var text = 'Cat fact: ' + data.fact + '.</br></br>';
                    resolve(text);
                } else {
                    reject('First promise not fullfiled');
                }
            })
    })
    var promise2 = new Promise((resolve, reject) => {
        fetch('https://www.boredapi.com/api/activity')
            .then(response => response.json())
            .then(data => {
                if (data.activityy) {
                    var text = 'Activity: ' + data.activity + '.</br></br>';
                    resolve(text);
                } else {
                    reject('Second promise not fullfiled');
                }
            })
    })
    var promise3 = new Promise((resolve, reject) => {
        fetch('https://api.chucknorris.io/jokes/random')
            .then(response => response.json())
            .then(data => {
                if (data.value) {
                    var text = 'Joke: ' + data.value + '.</br></br>';
                    resolve(text);
                } else {
                    reject('Third promise not fullfiled');
                }
            })
    })
    Promise.allSettled([promise1, promise2, promise3]).then(values => {
        console.log('values', values);
        var text = '';
        for (let i = 0; i < values.length; i++) {
            let promiseValue = values[i].status == 'fulfilled' ? ' ' + values[i].value : ' Reason: ' + values[i].reason + '<br/><br/>';
            text += i + 1 + '. Status: ' + values[i].status + '.<br/> <br/>' + promiseValue;
        }
        hideLoader();
        printText(text);
    }, error => {
        hideLoader();
        printText(error);
    })
}

function promiseAny() {
    hideText();
    showLoader();
    var promise1 = new Promise((resolve, reject) => {
        fetch('https://catfact.ninja/fact?max_length=140')
            .then(response => response.json())
            .then(data => {
                if (data.fact) {
                    var text = 'Cat fact: ' + data.fact + '.</br></br>';
                    resolve(text);
                } else {
                    reject('First promise not fullfiled');
                }
            })
    })
    var promise2 = new Promise((resolve, reject) => {
        fetch('https://www.boredapi.com/api/activity')
            .then(response => response.json())
            .then(data => {
                if (data.activity) {
                    var text = 'Activity: ' + data.activity + '.</br></br>';
                    resolve(text);
                } else {
                    reject('Second promise not fullfiled');
                }
            })
    })
    var promise3 = new Promise((resolve, reject) => {
        fetch('https://api.ipify.org/?format=json')
            .then(response => response.json())
            .then(data => {
                if (data.ip) {
                    var text = 'IP Address: ' + data.ip + '.</br></br>';
                    resolve(text);
                } else {
                    reject('Third promise not fullfiled');
                }
            })
    })
    Promise.any([promise1, promise2, promise3]).then(value => {
        printText(value);
        hideLoader();
    }, error => {
        printText(error);
        hideLoader();
    })
}

function printText(text) {
    document.getElementById('data-title').setAttribute('style', 'display: block');
    document.getElementById('data').innerHTML = text;
}

function hideText() {
    document.getElementById('data-title').setAttribute('style', 'display: none');
    document.getElementById('data').innerHTML = '';
}

function showLoader() {
    console.log('hej')
    document.getElementById('loader').setAttribute('style', 'display: block');
}

function hideLoader() {
    console.log('kad ga zovem')
    document.getElementById('loader').setAttribute('style', 'display: none');
}