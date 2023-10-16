function lv1(){
    let n = +prompt("nhap n");
    let S = 0;
    for(let i = 1; i<= n ;i++){
        S += i*(1+i);
    }
    console.log(S);
}