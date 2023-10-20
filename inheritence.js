class Person
{
  constructor(name, age, height)
  {
    this.name = name;
    this.age = age;
    this.height = height;
  }
  
  eat(food) { console.log(`${this.name} bites down on a ${food}.`); }
  wakeUp(time) { console.log(`${this.name} wakes up at ${time}.`); }
  pickup(item) { console.log(`${this.name} picks up a ${item}.`); }
}

class PostalWorker extends Person
{
  mailBag = [];
  loadMail(...mail) 
  {
    for(let m of mail)
      this.mailBag.push(m);
  }
  
  deliver(mail, city = "Pittsburgh", address = "PO Box")
  {
    if(this.mailBag.includes(mail))
    {
      console.log(`Delivered ${mail} to ${address}, ${city}`);
      this.mailBag.splice(this.mailBag.indexOf(mail), 1);
    }else
      console.log(`${this.name} does not have a ${mail}`);
  }
}

class Chef extends Person
{
  constructor(name, age, height)
  {
    super(name, age, height);
    this.hatHeight = age/50;
  }
  
  cook(meal) { console.log(`Chef ${this.name} cooks up some ${meal}.`); }
  insult(theDonkey) { console.log(`Chef ${this.name} calls ${theDonkey} a donkey for messing up the prep-work.`); } 
}

let postal1 = new PostalWorker("John", 24, "5\' 4\"");
let postal2 = new PostalWorker("Richi", 34, "6\' 0\"");
let chef1 = new Chef("Gordon Ramsay", 56, "6\' 2\"");
let chef2 = new Chef("Rodger", 32,"5\' 9\"");

console.log(postal1);
postal1.wakeUp("6:00am");
postal1.eat("sandwich");
postal1.pickup("mail bag");
postal1.loadMail("letter1", "letter2", "letter3");
postal1.deliver("letter2");

console.log();
console.log(postal2);
postal2.wakeUp("7:00pm");
postal2.eat("breakfast burrito");
postal2.pickup("mail bag");
postal2.loadMail("letter6", "letter4", "letter5");
postal2.deliver("letter2");
postal2.deliver("letter4");

console.log();
console.log(chef1);
chef1.wakeUp("5:33am");
chef1.eat("breakfast sausage");
chef1.pickup("pan");
chef1.insult("some contestant");
chef1.cook("beef wellington");

console.log();
console.log(chef2);
chef2.wakeUp("7:28am");
chef2.eat("rice");
chef2.pickup("wok");
chef2.insult("Gordon Ramsay");
chef2.cook("fried rice");

