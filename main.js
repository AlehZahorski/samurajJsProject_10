
//COUNTER HOMEWORK1
// const num = (startCounter = 0) => {
//     let number = startCounter;
//     return () =>{
//         number++;
//         document.body.textContent = `aktualny stan licznika to ${number}`;
//     }
// }

// const counter = num(); // here we can write number for starting counter

// document.addEventListener('click', counter)



// COUNTER HOMEWORK2
// const user = () =>{
//     let userName = 'Gena';
//     let userAge = 15;
//     return () =>{
//         userAge++;
//         document.body.textContent = `Na razie, ${userName}, nie mozesz kupic sobie piwa. Poniewaz masz tylko ${userAge} lat.`
//         if(userAge >= 21){
//             document.body.textContent = `Dobra, ${userName}, jestes juz dorosly masz ${userAge} lat, wiec trzymaj swoje piwko..`
//         }
//         if(userAge >= 50){
//             document.body.textContent = `Moim zdaniem, ${userName}, w ${userAge} lat, musisz zaczac dbac o swoim zdrowie`
//         }
//         if(userAge >= 80){
//             document.body.textContent = `Ale kurcze, ${userName}, masz juz ponad ${userAge} lat, ale nadal zyjesz i dobrze sie czujesz..pewnie dobre bylo to piwko hehe`
//         }
//     }
// }
// const counter = user();

// document.addEventListener('click', counter)


const timeCounter = (startTimer = 0) => {
    let second = startTimer;
    return () => {
        second++;
        document.body.textContent = `Spedziles na mojej stronie juz ${second} sekund`;
    }
}
const counter = timeCounter();
setInterval(counter, 1000)
