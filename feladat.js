function VeletlenSorrend(tomb) {
    let ujTomb = [];
    while (tomb.length > 0) {
        let randomIndex = Math.floor(Math.random() * tomb.length);
        ujTomb.push(tomb[randomIndex]);
        tomb.splice(randomIndex, 1);
    }
    return ujTomb;
}

let daysOfWeek = ["hétfő", "kedd", "szerda", "csütörtök", "péntek", "szombat", "vasárnap"];

let randomIndex = Math.floor(Math.random() * 7);

let newWeek = [daysOfWeek[randomIndex]];
daysOfWeek.splice(randomIndex, 1);

randomIndex = Math.floor(Math.random() * 6);

newWeek.push(daysOfWeek[randomIndex]);
daysOfWeek.splice(randomIndex, 1);

randomIndex = Math.floor(Math.random() * 5);

newWeek.push(daysOfWeek[randomIndex]);
daysOfWeek.splice(randomIndex, 1);

randomIndex = Math.floor(Math.random() * 4);

newWeek.push(daysOfWeek[randomIndex]);
daysOfWeek.splice(randomIndex, 1);

randomIndex = Math.floor(Math.random() * 3);

newWeek.push(daysOfWeek[randomIndex]);
daysOfWeek.splice(randomIndex, 1);

randomIndex = Math.floor(Math.random() * 2);

newWeek.push(daysOfWeek[randomIndex]);
daysOfWeek.splice(randomIndex, 1);

newWeek.push(daysOfWeek[0]);

console.log(newWeek);
