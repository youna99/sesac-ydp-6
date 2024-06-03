let now = new Date().getDate();

if (now === 0 || now === 6) {
    console.log('주말');
} else {
    console.log('평일');
}


console.log(Math.floor(Math.random() * 11));