function call(name) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log(name);
            resolve(name);
        }, 1000);
    })
}

function back(txt) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log(txt);
            resolve(txt);
        }, 1000)
    })
}

function hell(message) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(message);
        }, 1000);
    })
}


// call('kim')
//     .then(function(name) {
//         console.log(name + '반가워');

//         return back('back');
//     })
//     .then(function(txt) {
//         console.log(txt + '을 실행했구나');

//         return hell('callback hell');
//     })
//     .then(function(message) {
//         console.log('여기는' + message);
//     })

async function exec() {
    let name = await call('kim');
    console.log(name + '반가워');
    let txt = await back('back');
    console.log(txt + '을 실행했구나');
    let message = await hell('callback hell');
    console.log('여기는' + message);
};

exec();