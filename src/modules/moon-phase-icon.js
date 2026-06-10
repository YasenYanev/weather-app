import moonPhases from '../assets/data/moon_phases.json';

export default function getMoonPhaseIcon(moonPhase) {
  const moonIconPair = moonPhases.find(obj => obj.moonPhase === moonPhase);

  if (!moonIconPair) {
    return 'wi-moon-alt-new';
  }

  return moonIconPair.icon;
}
