function swapFirstAndLast(arr) {
    const firstItem=arr[0];
    arr[0]=arr[arr.length-1];
    arr[arr.length-1]=firstItem;

}

const myArray = [6, 2, 3, 4, 1];
swapFirstAndLast(myArray);
console.log(myArray);