function demSo(n){
    let count = 0;
    for (let i = 0; i < n; i++){
        if(i % 3 == 0){
            count += 1;
        }
    }console.log("Count: ", count);
}
demSo(100)