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
  const change: [string, number][] = [];
  let emptyUnitsCount = 0;

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
    const currentUnitSize = currencyUnits[unit];

    const drawerUnitAmount = getUnitAmountInDrawer(cid, unit);
    if (drawerUnitAmount === 0) emptyUnitsCount++;
    if (currentUnitSize > changeDue) continue;

    const withdrawableUnits = Math.trunc(drawerUnitAmount / currentUnitSize);

    if (withdrawableUnits === 0) continue;

    const neededUnits = Math.trunc(changeDue / currentUnitSize);
    const withdrawnUnits = Math.min(withdrawableUnits, neededUnits);

    if (withdrawnUnits === withdrawableUnits) emptyUnitsCount++;

    const withdrawnUnitAmount = calcWithdrawnUnitAmount(
      withdrawnUnits,
      currentUnitSize
    );
    changeDue = calcRemainingChangeDue(
      changeDue,
      withdrawnUnits,
      currentUnitSize
    );

    change.push([unit, withdrawnUnitAmount]);
  }

  if (changeDue) return { status: "INSUFFICIENT_FUNDS", change: [] };
  if (emptyUnitsCount === cid.length) return { status: "CLOSED", change: cid };

  return { status: "OPEN", change: change };
}

function getUnitAmountInDrawer(cid, unit) {
  return cid.find((cidUnit) => cidUnit[0] === unit)![1];
}

function calcWithdrawnUnitAmount(withdrawnUnits, currentUnitSize) {
  return Number((withdrawnUnits * currentUnitSize).toFixed(2));
}

function calcRemainingChangeDue(changeDue, withdrawnUnits, currentUnitSize) {
  return Number((changeDue - withdrawnUnits * currentUnitSize).toFixed(2));
}
