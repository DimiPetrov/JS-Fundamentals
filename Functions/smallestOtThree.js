function findSmallest(arg1, arg2, arg3) {
    let n1 = Number(arg1);
    let n2 = Number(arg2);
    let n3 = Number(arg3);

    if(n1 <= n2 && n1<= n3) {
        console.log(n1);
    } else if(n2 <= n1 && n2 <= n3) {
        console.log(n2);
    } else if(n3 <= n1 && n3 <= n2) {
        console.log(n3);
    }
}

findSmallest(2, 5, 3)