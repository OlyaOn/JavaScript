let num =50;

if (num < 49){
    console.log("Неверно!")
} else if (num > 100) {
    console.log("Много!")
} else {
    console.log("Верно!")
};

(num == 50) ? console.log("Верно!") : console.log("Неверно!");

switch (num) {
    case num < 49:
        console.log("Неверно!");
        break;//обязательно для остановки выполнения
    case num > 100:
        console.log("Много!");
        break;
    case num > 80:
        console.log("Все ещё много!");
        break;
    case 50:
        console.log("Верно!");
        break;
    default:
        console.log("Что-то пошло не так!");
        break;
}

//first type
let num = 50;
   /*  while (num < 55) {
        console.log(num);
        num++;
    } */

//second type
/* do {
    console.log(num);
    num++;
}
while (num < 55) */

//third type
for(let i = 1; i<8; i++)
{
    if (i == 6){
        continue
    }
    console.log(i)
}
