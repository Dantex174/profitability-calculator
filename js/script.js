function f1 (){
    let price, price2, price3 = 0; 
    let info = document.getElementById('info');
        info.innerHTML= 'Рентабельность равна ';
    price = document.getElementById('price').value;
    price = parseFloat(price);
        if(price>0 && price<600){
            price2 = price*10/4;
            info.innerHTML += '60%';
            
        }
            
        if(price>599 && price<1500){
            price2 = price*10/4,8;
            info.innerHTML += '52%';
        }
            
        if(price>1499 && price<3000){
            price2 = price*10/5,8;
            info.innerHTML += '42%';
        }
            
        if(price>2999 && price<4000){
            price2 = price*10/6;
            info.innerHTML += '40%';
        }
            
        if(price>3999 && price<5000){
            price2 = price*10/7;
            info.innerHTML += '30%';
        }
            
        if(price>4999){
            price2 = price*10/7,5;
            info.innerHTML += '25%';
        }
    price3 = Math.ceil(price2)    
    price2 = Math.round(price2*10)/10;
    
    document.getElementById('out').innerHTML = price2;
    document.getElementById('out2').innerHTML = price3;
}