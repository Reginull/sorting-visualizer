


export const mergeSort = (array) => {

    const auxiliaryArray = [...array];
    const animations = [];

    if (array.length <= 1) {
        return array;
    }

    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);

    return animations;
};


const mergeSortHelper = (mainArray, startIndex, endIndex, auxilArray, animations) => {

    if (startIndex === endIndex) {
        return
    }

    const midPoint = Math.floor((startIndex + endIndex) / 2)

    mergeSortHelper(auxilArray, startIndex, midPoint, mainArray, animations); 
    mergeSortHelper(auxilArray, midPoint + 1, endIndex, mainArray, animations); 

    merge(mainArray, startIndex, midPoint, endIndex, auxilArray, animations);  
};

const merge = (mainArray, startIndex, midIndex, endIndex, auxArray, animations) => {
    let a = startIndex;
    let b = startIndex;
    let c = midIndex + 1;
  
    while (b <= midIndex && c <= endIndex) {

      animations.push([b, c]);
      if (auxArray[b] <= auxArray[c]) {
        animations.push([a, auxArray[b]]);
        mainArray[a++] = auxArray[b++];
      } else {
        animations.push([a, auxArray[c]]);
        mainArray[a++] = auxArray[c++];
      }
    }
  
    while (b <= midIndex) {
      animations.push([b, b]);
      animations.push([a, auxArray[b]]);
      mainArray[a++] = auxArray[b++];
    }
  
    while (c <= endIndex) {
      animations.push([c, c]);
      animations.push([a, auxArray[c]]);
      mainArray[a++] = auxArray[c++];
    }
  
    while (b <= midIndex) {
      animations.push([b, b]);
      animations.push([a, auxArray[b]]);
      mainArray[a++] = auxArray[b++];
    }
  
    while (c <= endIndex) {
      animations.push([c, c]);
      animations.push([a, auxArray[c]]);
      mainArray[a++] = auxArray[c++];
    }
};

// Original mergeSort

//     const midPoint = Math.floor(array.length / 2);

//     const leftArray = array.slice(0, midPoint);
//     const rightArray = array.slice(midPoint);

//     const sortedLeft = mergeSort(leftArray);
//     const sortedRight = mergeSort(rightArray);

//     return merge(sortedLeft, sortedRight);
// };


// Original merge function 

// const merge = (leftArray, rightArray) => {

//     let leftIndex = 0;
//     let rightIndex = 0;

//     while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
//         if (leftArray[leftIndex] < rightArray[rightIndex]) {
//         sortedArray.push(leftArray[leftIndex]);
//         leftIndex++;
//         } else {
//         sortedArray.push(rightArray[rightIndex]);
//         rightIndex++;
//         }
//     }

//     while (leftIndex < leftArray.length) {
//         sortedArray.push(leftArray[leftIndex]);
//         leftIndex++;
//     }

//     while (rightIndex < rightArray.length) {
//         sortedArray.push(rightArray[rightIndex]);
//         rightIndex++;
//     }

//     return sortedArray;
// };
