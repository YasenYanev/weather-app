import moonPhases from '../assets/data/moon_phases.json';

export default moonPhase => {
  const moonIconPair = moonPhases.find(obj => obj.moonPhase === moonPhase);
  console.log(moonPhase);
  console.log(moonIconPair);
  return moonIconPair.icon;
};
