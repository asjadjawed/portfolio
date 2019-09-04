/**
 * Removes all elements of sub-array from parent array
 * @param parentArray the array to filer
 * @param subArray the elements in an array to remove from parentArray
 */
export const removeFromArray = (
  parentArray: string[],
  subArray: string[]
): string[] => parentArray.filter(elem => subArray.indexOf(elem) === -1);

/**
 * Add an element to array
 * @param array the array
 * @param element element to add
 */
export const AddToArray = (array: string[], element: string): string[] => [
  ...array,
  element
];

/**
 * Remove duplicate tags and sorts by count based on no. of tags in input array
 * @param inputArray input array of strings
 */
export const makeUniqueCountSortedArray = (inputArray: string[]): string[] => {
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
