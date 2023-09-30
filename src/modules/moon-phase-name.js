import moonPhases from '../assets/data/moon_phases.json';

export default moonPhase => {
  const moonIconPair = moonPhases.find(obj => obj.moonPhase === moonPhase);
  return moonIconPair.icon;
};
