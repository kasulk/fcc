type Output = {
  status: string;
  change: [string, number][];
};

function checkCashRegister(
  price: number,
  cash: number,
  cid: [string, number][]
): Output {
  // calculate the amount of the change
  // create a map with the units amounts
  // loop through the untis in the map
  // until a unit is found that is smaller than or equal the change
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
  // let output: Output = { status: "OPEN", change: [] };
  const change: [string, number][] = [];

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

  let emptyUnitsCount = 0;

  for (let unit in currencyUnits) {
    const currentUnitSize = currencyUnits[unit];

    const unitAmountInRegister = cid.find((cidUnit) => cidUnit[0] === unit)![1];
    if (unitAmountInRegister === 0) emptyUnitsCount++;
    if (currentUnitSize > changeDue) continue;

    const possibleRemoveableUnits = Math.trunc(
      unitAmountInRegister / currentUnitSize
    );

    if (possibleRemoveableUnits === 0) continue;

    const amountOfUnitsNeeded = Math.trunc(changeDue / currentUnitSize);
    const removedUnits = Math.min(possibleRemoveableUnits, amountOfUnitsNeeded);

    if (removedUnits === possibleRemoveableUnits) emptyUnitsCount++;

    const unitChange = Number((removedUnits * currentUnitSize).toFixed(2));
    changeDue = Number((changeDue - removedUnits * currentUnitSize).toFixed(2));

    change.push([unit, unitChange]);
  }

  if (changeDue) return { status: "INSUFFICIENT_FUNDS", change: [] };
  if (emptyUnitsCount === cid.length) return { status: "CLOSED", change: cid };

  return { status: "OPEN", change: change };
}
