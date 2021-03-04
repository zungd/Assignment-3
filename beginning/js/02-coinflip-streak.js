
let coinflip = 0 ;


do{
    coinflip+= 1;
    console.log(coinflip + " " + "Heads");
}while(coinflip < Math.random() * 100);
    console.log("It's Tails Buddy");