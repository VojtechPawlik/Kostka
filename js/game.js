var hody = [];

document.getElementById('game').addEventListener('click',
    function(){
        hody = [];
        hod('cube1');
        hod('cube2');
        hod('cube3');
        console.log(hody);
        zjistiViteze();
    }
);

function suma(cisla) {
    var sum = 0;
    cisla.forEach(function(value,index){
        sum += value;
    })
    return sum;
}

function maximum(cisla) {
    var max = 1;
    cisla.forEach(function(value,index){
        if (value > max) max = value;
    })
    return max;
}

function minimum(cisla) {
    var min = 6;
    cisla.forEach(function(value,index){
        if (value < min) min = value;
    })
    return min;
}

function average(sum, count) {
    return (sum / count).toFixed(2);
}

function hod(id) {
    var h = Math.ceil(Math.random() * 6);
    hody.push(h);
    document.getElementById(id).src='img/kostka' + h + '.png';
    document.getElementById('result').innerHTML = '<p>Hod: ' + h + '</p>';
    document.getElementById('result').innerHTML +=
        '<p>Součet hodů: ' + suma(hody) + '</p>';
    document.getElementById('result').innerHTML +=
        '<p>Průměr hodů: ' + average(suma(hody),hody.length) + '</p>';
    document.getElementById('result').innerHTML +=
        '<p>Nejvyšší hod: ' + maximum(hody) + '</p>';
    document.getElementById('result').innerHTML +=
        '<p>Nejvyšší hod: ' + minimum(hody) + '</p>';
    return h;
}

function zjistiViteze() {
    var maxHod = maximum(hody);
    var vitezneKostky = hody.reduce(function(acc, hod, index) {
        if (hod === maxHod) {
            acc.push(index + 1); // Přidá index kostky (+1 kvůli lidským číslům)
        }
        return acc;
    }, []);

    if (vitezneKostky.length === 1) {
        document.getElementById('result').innerHTML +=
            '<p>Vítězná kostka: ' + vitezneKostky[0] + '</p>';
    } else if (vitezneKostky.length > 1) {
        document.getElementById('result').innerHTML +=
            '<p>Vítězné kostky: ' + vitezneKostky.join(', ') + '</p>';
    } else {
        document.getElementById('result').innerHTML +=
            '<p>Nikdo nevyhrál, všechny kostky mají různá čísla.</p>';
    }
}
