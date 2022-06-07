export interface StateData {
  id: string;
  name: string;
  visits: number;
}

export type FormattedStateData = {
  id: string;
  visits: number;
}

export const sumVisits = (data: StateData[]): FormattedStateData[] => {
  const statesAbbreviations = Array.from(new Set(data.map(state => state.id)));
  
  const formattedStates: FormattedStateData[] = statesAbbreviations.map(abbreviation => ({
    id: abbreviation.toLowerCase(),
    visits: data.reduce((acc, state) => state.id === abbreviation ? acc + state.visits : acc, 0)
  }));

  return formattedStates;
}

export const matchingStates = (data: FormattedStateData[], from: number, to: number) => {
  return data.filter(state => state.visits >= from && (!to || (state.visits < to))).map((state: FormattedStateData) => state.id);
}

export const changeStyleOfElement = (states: string[], action: string) => {
  if (action === 'add') {
    states.forEach((state: string) => document.getElementsByClassName(state)[0]?.classList.add("fill"));
  } else {
    states.forEach((state: string) => document.getElementsByClassName(state)[0]?.classList.remove("fill"));
  }
}