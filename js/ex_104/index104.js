let fibLength=10;
let fibonacci = function(fibLength) {
    a=[];
    a[0]=0;
    a[1]=1;
    for(i=2;i<fibLength;i++){
        a[i]=a[i-1]+a[i-2];
    }
    return a;
}
console.log(fibonacci(fibLength));