function translatePigLatin(str) {

  let vowels = /[aeiou]/gi;
  // let result = str.match(vowels);
  // let count = result.length;
  // return count;
  let itIsVowel = vowels.test(str[0])
  if(itIsVowel){
    return `${str}way`
  }else{
    for(let i=0; i< str.length;i++){
      if(vowels.test(str[i])){
        let cluster = str.substr(0,i);
        let sub = str.substr(i);
        return `${sub}${cluster}ay`
      }else{
        continue
      }
    }
    return `${str}ay`;
  }
 
};


console.log(translatePigLatin("glove"));