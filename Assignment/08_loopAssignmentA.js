function findVowel(word){
 var result=word.match(/[aeiou]/gi);
 return result ===null ? 0:result.length;
}
var res=findVowel("I am a very good IT Developer")
console.log(`The total vowel in passed string are/is ${res}`);


function sumofCube(num){
var cube=0
for(let x=1; x<=5; x++){
    var result= x*x*x;
    var result=result+cube
    
}
console.log(`The sum of cube from 1-5 is ${result}`);
}

sumofCube(5);

function oddPositionChar(word){
    for( var x=0; x<=word.length; x++)
{
    var result=' '
    var ch=word.charAt(x)
   
    if(x%2==1 && ch !=' '){
      
      
      var result=''
      result=result + ch
      console.log(result);
    
         
    }
    
}


}
oddPositionChar("Hard Words always pays back")
oddPositionChar("Soon I will be IT Champ")