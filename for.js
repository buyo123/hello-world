
//example1
for(let i = 0; i < 20; i++){
    console.log(i+"歳になったけどまだクソババア死ねって思ってる");
}
for(let i = 95; i < 100; i++){
    console.log(i+"歳になってもホモ・サピエンスはうんこする");
}
//fibonacci
//練習問題: フィボナッチ数列を出力するコードを書いて
console.log("フィボナッチ数列を計算中...");
let fib = 1;
let prev = 0;
for(let i = 0; i < 10; i++){
    console.log(prev);
    //[prev, fib] = [fib, fib+prev];

    let fibnext = prev + fib;
    prev = fib;
    fib = fibnext;
}
console.log("フィボナッチ数列計算完了!");
