
interface myFunc {
    (s1: string,s2 : string,s3 : string) : Array<string>;
}

function printArray(s1:string, s2:string, s3 : string) { 
    return [s1,s2,s3]
}
function printArrayUpperCased(s1:string, s2:string, s3 : string) { 
    return [s1.toUpperCase(),s2.toUpperCase(),s3.toUpperCase()]
}

let f2 = function logger(f1: myFunc){
    let [ a, b, c] = ["A", "B", "c"];
    console.log(f1(a,b,c));
}

function printArrayfail(s1:number, s2:number) { 
    return [s1,s2]
}

f2(printArrayUpperCased);
f2(printArray)
//f2(printArrayfail)