function arrayRotation(arr, rotations){
   while (rotations > 0){
       arr.push(arr[0]);
       arr.shift();
       rotations--;
   }
   console.log(arr.join(' '));
}
arrayRotation([51, 47, 32, 61, 21], 2)