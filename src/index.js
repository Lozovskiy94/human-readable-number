module.exports = function toReadable (number) {
    let z = ['zero','one','two','three','four','five','six','seven','eight','nine']
    let y = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen',]
    let v = ['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety']
    let w = [' hundred']
    number = number.toString().split('')
    if (number.length === 1)
        {return z[number[0]]}
    else if (number.length === 2 && number[0] === '1')
        {return y[number[1]]}
    else if (number.length === 2 && number[1] === '0')
        {return v[number[0]]}
    else if (number.length === 2 && number[1] !== '0')
        {return v[number[0]] + ' ' + z[number[1]]}
    else if (number.length === 3 && number[1] === '1')
        {return `${z[number[0]]}${w} ${y[number[2]]}`}
    else if (number.length === 3 && number[1] !== '0' && number[1] !== '1' && number[2] === '0')
        {return `${z[number[0]]}${w} ${v[number[1]]}`} 
    else if (number.length === 3 && number[1] === '0' && number[2] !== '0')
        {return `${z[number[0]]}${w} ${z[number[2]]}`}
    else if (number.length === 3 && number[1] === '0' && number[2] === '0')
        {return `${z[number[0]]}${w}`}
    else if (number.length === 3 && number[1] !== '0' && number[1] !== '1' && number[2] !== '0')
        {return `${z[number[0]]}${w} ${v[number[1]]} ${z[number[2]]}`}
}
