function chgColor(color) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // document.body.style.backgroundColor = color;
            console.log(`color change : ${color}`);
            resolve(color);
        }, 1000);
    });
};

async function exec() {
    try{
        await chgColor('red');
        await chgColor('orange');
        await chgColor('yellow');
        await chgColor('green');
        await chgColor('blue');
    } catch(error) {
        console.error(error);
    }
};

exec();