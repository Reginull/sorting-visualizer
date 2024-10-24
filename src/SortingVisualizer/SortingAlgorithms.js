

export const mergeSort = (array) => {

    if (array.length <= 1) {
        return array;
    }

    const midPoint = Math.floor(array.length / 2);

    const leftArray = array.slice(0, midPoint);
    const rightArray = array.slice(midPoint);

    const sortedLeft = mergeSort(leftArray);
    const sortedRight = mergeSort(rightArray);

    return merge(sortedLeft, sortedRight);
}

const merge = (leftArray, rightArray) => {

    const sortedArray = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
        if (leftArray[leftIndex] < rightArray[rightIndex]) {
        sortedArray.push(leftArray[leftIndex]);
        leftIndex++;
        } else {
        sortedArray.push(rightArray[rightIndex]);
        rightIndex++;
        }
    }

    while (leftIndex < leftArray.length) {
        sortedArray.push(leftArray[leftIndex]);
        leftIndex++;
    }

    while (rightIndex < rightArray.length) {
        sortedArray.push(rightArray[rightIndex]);
        rightIndex++;
    }

    return sortedArray;
};

