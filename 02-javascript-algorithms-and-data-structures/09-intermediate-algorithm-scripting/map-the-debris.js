function orbitalPeriod(orbitalObjects) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;

  return orbitalObjects.map((orbitalObject) => {
    const orbitsSemiMajorAxis = orbitalObject.avgAlt + earthRadius;
    const orbitalPeriod =
      2 * Math.PI * Math.sqrt(orbitsSemiMajorAxis ** 3 / GM);
    return {
      name: orbitalObject.name,
      orbitalPeriod: Math.round(orbitalPeriod),
    };
  });
}

orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);
