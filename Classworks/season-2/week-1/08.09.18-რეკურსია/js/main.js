function add(n){
    let s = 0;
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            s += i*j
        }
    }
}

function recursiveCount(max, current){
    if( current > max){
        return;
    }
    console.log(current);
    recursiveCount(max, current + 1);
}

// recursiveCount(10, 1);

function fibonaci(n){
    if( n <= 2){
        return 1;
    }else{
        return fibonaci( n - 1) + fibonaci( n - 2);
    }
}

// for( let i = 0; i < 12; i++){
//     console.log( `Index - ${i + 1}, num - ${fibonaci(i)}`)
// }

function factorial(n){
    if(n === 0){
        return 1;
    }else{
        return n * factorial(n-1)
    }
}
// console.log(factorial(5));

function addNumbers(number){
    if(number === 0) return number;
    else{
        return number + addNumbers( number - 1);
    }
}

// console.log(addNumbers(2));

function tailAddNumbers(number, sum = 0){
    if(number === 0) return sum;
    else{
        return tailAddNumbers  ( number - 1, sum + number);
    }
}

// console.log(tailAddNumbers(2));



function bubbleSort(arr){
    let temp;
    for(let i = 0; i < arr.length; i++){
        for(let j = 1; j < arr.length; j++){
            if(arr[j-1] > arr[j]){
                temp = arr[j];
                arr[j] = arr[j-1];
                arr[j-1] = temp;
            }
        }
    }
    return arr;
}

Masivi = [2, -2, 3, 8, 6, 10, -1, 7, 0];
console.log(Masivi);
// console.log(bubbleSort(Masivi));

//Method 1
function insertionSort(arr){
    let temp, j;
    for(let i = 1; i < arr.length; i++){
        temp = arr[i];
        j = i - 1;
        while( j >= 0 && arr[j] > temp){
            arr[j + 1] = arr[j];
            j -= 1;
        }
        arr[ j + 1] = temp;
    }
    return arr; 
}

//Method 2
// function insertionSort(arr){
//     for (let i = 0; i < arr.length ; i++) {
//       for (let j =  0; j < i; j++) {
//         if (arr[i] < arr[j]) {
//          let  temporary = arr.splice(i,1);
//           arr.splice(j,0,temporary[0])
//         }
//       }
//     }
    
//     return arr;
// }

// console.log(insertionSort(Masivi));

function mergeSort(arr){
    if(arr.length < 2){
        return arr;
    }else{
        let mid = Math.floor(arr.length / 2);
        let left = arr.slice(0, mid);
        let right = arr.slice(mid);
        return merge(mergeSort(left), mergeSort(right));
    }
}

function merge(left, right){
    let sortedArray = [];
    while(left.length && right.length){
        if(left[0] <= right[0]){
            sortedArray.push(left.shift());
        }else{
            sortedArray.push(right.shift());
        }
    }
    return sortedArray.concat(left, right);
}

// console.log(mergeSort(Masivi));


function quickSort(arr){
    if(arr.length <= 1) return arr;

    const pivot = arr[arr.length -1];
    const left = [];
    const right = [];

    for(let i = 0; i < arr.length - 1; i++){
        if(arr[i] < pivot){
            left.push( arr[i]);
        }else{
            right.push( arr[i]);
        }
    }
    return [ ...quickSort(left), pivot, ...quickSort(right)];
}


console.log(mergeSort(Masivi));
