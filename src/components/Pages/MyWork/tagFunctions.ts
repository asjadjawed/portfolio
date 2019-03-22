export const removeFromArray = (parentArray: string[], subArray: string[]) =>
  parentArray.filter(elem => subArray.indexOf(elem) === -1);

export const AddToArray = (array: string[], value: string) => [...array, value];

// Generate Array of Unique Tags Sorted by Count
export const makeFlatUniqueCountSortedArray = (inputArray: string[]) => {
  interface IElemCount {
    [key: string]: number;
  }

  const ElemCount: IElemCount = {};

  inputArray.forEach(element => {
    if (!ElemCount[element]) {
      Object.assign(ElemCount, { [element]: 1 });
    } else {
      Object.assign(ElemCount, { [element]: ElemCount[element] + 1 });
    }
  });

  return Object.keys(ElemCount).sort((a, b) => ElemCount[b] - ElemCount[a]);
};
