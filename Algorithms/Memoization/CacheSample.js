function addTo80(n){

    console.log('long time');
    return n + 80;
  
  }
  
  // Memoization is simply caching data for future use so we don't have to re-excute the same computation
  
  // Initialize cache
  let cache = {};
  
  function memoizedAddTo80(n){
    if (n in cache){
      return cache[n];
    } else {
      console.log('long time');
      cache[n] = n + 80;
      return cache[n];
    }
  }
  
  
  // Test code
  console.log("addTo80(5)", addTo80(5));
  console.log("addTo80(5)", addTo80(5));
  console.log("addTo80(5)", addTo80(5));
  
  console.log("-------------")
  console.log("memoizedAddTo80(5)", memoizedAddTo80(5));
  console.log("memoizedAddTo80(5)", memoizedAddTo80(5));
  console.log("memoizedAddTo80(5)", memoizedAddTo80(5));