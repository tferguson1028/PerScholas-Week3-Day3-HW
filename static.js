class Governor 
{
  static atWar = false;
  static citiesInState = ["Pittsburgh", "Philadelphia", "Harrisburg"];
  static billsForReview = [];
  static salary = 202300;
  // constructor(name, state, party)
  // {
  //   this.name = name;
  //   this.state = state;
  //   this.party = party;
  // }
  
  static makeExecutiveOrder(order)
  {
    console.log(`${order}`);
  }
  
  static pardon(pardonee)
  {
    console.log(`${pardonee} has been pardoned.`);
  }
  
  static addBillForReview(...bills)
  {
    for(let bill of bills)
      this.billsForReview.unshift(bill);
  }
  
  static reviewAllBills()
  {
    for(let bill of this.billsForReview)
      this.reviewBill(bill);
  }
  
  static reviewBill(bill)
  {
    if(Math.round(Math.random()))
      console.log(`${bill} bill passed.`)
    else
      console.log(`${bill} bill vetoed.`);
  }
  
  static sendGuard(place)
  {
    if(this.citiesInState.includes(place))
      console.log(`Soldiers are sent to ${place} to fight`);
    else
      console.log(`The governor cannot command troops outside of their own state.`);
  }
}

console.log(Governor);
console.log();
Governor.addBillForReview("Budget", "Tax Reform", "Agriculture", "Hunting", "Housing", "Squatters");
Governor.reviewAllBills();
Governor.pardon("Some guy on the street");
Governor.sendGuard("");

/*
The governor's primary responsibilities are to:
  - Serve as the state's chief executive officer and oversees the functions of the executive branch of government.
  - Report to the General Assembly and the citizens of Indiana on the condition of the state each January. 
  - Recommend legislation to the General Assembly. 
  - Review bills that are approved by both the Indiana House and Senate. The governor can sign the legislation and it will become law. If a bill is vetoed, it is returned to the General Assembly.
  - Issue executive orders on matters important to the state.
  - Serve as commander-in-chief of the state's armed forces.
  - He also may grant reprieves, commutations and pardons.
*/
