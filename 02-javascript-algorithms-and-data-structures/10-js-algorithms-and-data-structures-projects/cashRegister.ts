type Output = {
  status: string;
  change: [string, number][];
};

function checkCashRegister(
  price: number,
  cash: number,
  cashInDrawer: [string, number][]
): Output {
  // calculate the amount of the change due
  // create a map with the units amounts
  // loop through the untis in the map
  // until a unit is found that is smaller than or equal the change due
  // subtract as many units from the cash register as fit into the change amount
  // (and without the unit in the register becoming smaller 0)
  // save the withdrawn units and their amount to the output change array

  // after the loop,
  // if there is still change due, return 'INSUFFICIENT_FUNDS' ...
  // if the change due equals the cash in drawer, return 'CLOSED' ...
  // else return 'OPEN' and the change

  const change: [string, number][] = [];
  let changeDue: number = cash - price;
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

    const drawerUnitAmount = getUnitAmountInDrawer(cashInDrawer, unit);
    if (drawerUnitAmount === 0) emptyUnitsCount++;
    if (currentUnitSize > changeDue) continue;

    const withdrawableUnits = calcWithdrawableUnits(
      drawerUnitAmount,
      currentUnitSize
    );

    if (withdrawableUnits === 0) continue;

    const neededUnits = calcNeededUnits(changeDue, currentUnitSize);
    const withdrawnUnits = calcWithdrawnUnits(withdrawableUnits, neededUnits);

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
  if (emptyUnitsCount === cashInDrawer.length)
    return { status: "CLOSED", change: cashInDrawer };

  return { status: "OPEN", change: change };
}

function getUnitAmountInDrawer(cashInDrawer: [string, number][], unit: string) {
  return cashInDrawer.find((cidUnit) => cidUnit[0] === unit)![1];
}

function calcWithdrawableUnits(unitAmount: number, unitSize: number) {
  return Math.trunc(unitAmount / unitSize);
}

function calcNeededUnits(changeDue: number, unitSize: number) {
  return Math.trunc(changeDue / unitSize);
}

function calcWithdrawnUnits(withdrawableUnits: number, neededUnits: number) {
  return Math.min(withdrawableUnits, neededUnits);
}

function calcWithdrawnUnitAmount(units: number, unitSize: number) {
  return Number((units * unitSize).toFixed(2));
}

function calcRemainingChangeDue(
  changeDue: number,
  units: number,
  unitSize: number
) {
  return Number((changeDue - units * unitSize).toFixed(2));
}
