function threeSum(arr, target) {
  // Sort the array to easily handle duplicates
  arr.sort((a, b) => a - b);
  
  // Initialize variables to keep track of the closest sum and its difference from the target
  let closestSum = Infinity;
  let minDiff = Infinity;

  // Iterate through the array
  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1; // Pointer for the element after the current element
    let right = arr.length - 1; // Pointer for the last element
    
    // Perform two-pointer approach to find the sum closest to the target
    while (left < right) {
      const sum = arr[i] + arr[left] + arr[right];
      const diff = Math.abs(sum - target); // Calculate the absolute difference
      
      // If the current sum is closer to the target, update the closest sum and its difference
      if (diff < minDiff) {
        minDiff = diff;
        closestSum = sum;
      }
      
      // Move the pointers based on the comparison with the target
      if (sum < target) {
        left++; // Move left pointer to increase the sum
      } else if (sum > target) {
        right--; // Move right pointer to decrease the sum
      } else {
        return target; // If sum equals target, return the target itself
      }
    }
  }
  
  return closestSum; // Return the closest sum to the target
}

module.exports = threeSum;
