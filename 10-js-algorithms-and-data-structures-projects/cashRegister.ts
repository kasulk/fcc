type Output = {
  status: string;
  change: [string, number][];
};

function checkCashRegister(
  price: number,
  cash: number,
  cid: [string, number][]
): Output {
  //// calculate the amount of the change
  //// create a map with the units amounts
  //// loop through the untis in the map
  //// until a unit is found that is smaller than or equal the change
  // subtract as many units from the cash register as fit into the change amount
  // save the units and their amount to the output change array
  // (without the unit in the register becoming smaller 0)
  // if the unit is 0, and if the due change isn't 0
  // go on with the next unit
  // after the loop,
  // if there is still change due, return 'INSUFFICIENT_FUNDS' ...
  // if the change due equals the cash in drawer, return 'CLOSED' ...
  // else return 'OPEN' ...

  let changeDue = cash - price;
  let change: Output = { status: "OPEN", change: [] };

  const currencyUnits = {
    "ONE HUNDRED": 100,
    TWENTY: 20,
    TEN: 10,
    FIVE: 5,
    ONE: 1,
    QUARTER: 0.25,
    DIME: 0.1,
    NICKEL: 0.05,
    PENNY: 0.01,
  };

  for (let unit in currencyUnits) {
    const currentUnitSize = currencyUnits[unit]; //

    if (currentUnitSize > changeDue) continue; //

    const unitAmountInRegister = cid.find((cidUnit) => cidUnit[0] === unit)![1]; //
    // console.log("unitAmountInRegister", unit, unitAmountInRegister);

    const possibleRemoveableUnits = Math.trunc(
      unitAmountInRegister / currentUnitSize //
    ); //! 0.5 // 50x

    if (possibleRemoveableUnits === 0) continue;

    const amountOfUnitsNeeded = changeDue / currentUnitSize; //
    //! 0.3 // 30x

    const removedUnits = Math.min(possibleRemoveableUnits, amountOfUnitsNeeded);

    const unitChange = removedUnits * currentUnitSize;

    // console.log("oldChangeDue:", changeDue);
    changeDue = changeDue - removedUnits * currentUnitSize;
    // console.log("newChangeDue:", changeDue);

    change.change.push([unit, unitChange]);
    console.log("change.change", change.change);
  }

  return change;
}

//
//
// checkCashRegister(19.5, 20, [
//   ["PENNY", 1.01],
//   ["NICKEL", 2.05],
//   ["DIME", 3.1],
//   ["QUARTER", 4.25],
//   ["ONE", 90],
//   ["FIVE", 55],
//   ["TEN", 20],
//   ["TWENTY", 60],
//   ["ONE HUNDRED", 100],
// ]);

// should return
// {status: "OPEN", change: [["QUARTER", 0.5]]}

checkCashRegister(19.5, 20, [
  ["PENNY", 0.5],
  // ["NICKEL", 0],
  ["NICKEL", 0.2],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0],
]);

/* should return
{
  status: "CLOSED",
  change: [
    ["PENNY", 0.5],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
  ],
};
*/
