function pares (x,y){

    if(x < y){
        while(x <= y){
            if(x%2 === 0){
                console.log(x);
            }
            x += 1;
        }
    }else{
        while(y <= x){
            if(y%2 === 0){
                console.log(y);
            }
            y +=1;
        }
    }
    
}

pares(322, 3);