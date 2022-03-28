// Code your solutions in this file
/*for(let age = 30; age < 40; age++) {
    console.log(`I'm ${age} year's old. Happy Birthday to me!`)
    
}*/

/*const gifts = ['teddy bear', 'drone', 'doll'];

function wrapGifts(gifts) {
    for(let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`)
        debugger;
    }
    return gifts
}

wrapGifts(gifts);*/

function writeCards(names, event) {
    let result = [];
        for(let name of names) {
            
            let phrase = `Thank you, ${name}, for the wonderful ${event} gift!`;
            result.push(phrase);
           }
    return result
}

//writeCards(['Cameron', 'Callie', 'Chloe'], 'Father\'s Day');

function countDown(number) {
    while(number >= 0) {
        console.log(number);
        number--
    }
}