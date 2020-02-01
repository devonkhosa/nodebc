function myCpuTest(n) {
    console.time('myCpuTest');
    let result = 0;
    for (var i = Math.pow(n, 7); i >=0; i--) {
        result += Math.atan(i) * Math.tan(i);
    };
    console.timeEnd('MyCpuTest');
}
myCpuTest(10); //This will increase cpu usage, just increase the number to make it run for longer