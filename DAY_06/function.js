/// ham khong tra ve ket qua 
function hello_command(){
    document.write('hello my friend');
}

//ham tinh tong tra ve ket qua
function sum(a,b){
    return a+b;
}

//ham tinh giai thua
function giai_thua(n){
    if(n==0){
        return 1;
    }
    return n * giai_thua(n-1);
}

hello_command();
document.write('<br/>');
document.write('tong bang ',sum(10,20));
document.write('<br/>');
document.write('giai thua bang ',giai_thua(5));