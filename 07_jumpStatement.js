for(x=0; x<=10; x++){
    if(x==2){
        break
    }
    console.log(x);
}
console.log(`continue`);

for(x=0; x<=5; x++){
    if(x==2){ //two will not print here 
        continue
    }
    console.log(x);
}