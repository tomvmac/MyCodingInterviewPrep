function vowels(str){
    let vowelsCount = 0;
    str = str.toLowerCase();
  
    for (let i=0; i<str.length; i++){
      console.log(str[i])
      switch (str[i]) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u': 
          vowelsCount++;
          break;
      }
  
    }
  
    return vowelsCount;
  
  }
  
  console.log("vowels('hello world')", vowels('hello world'));
  
  
  