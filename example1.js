// program to find maximum element in the given array
let arr=[5,-1,20,7,6,21,8];
let max=arr[0];
for(let i=1;i<arr.length;i++){
    if(arr[i]>max){
        max=arr[i];
    }
}
console.log("The maximum element in the given array is: "+max);
