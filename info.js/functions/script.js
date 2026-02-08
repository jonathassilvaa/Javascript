function callMyFunction(p1,p2){

    if(p1 > 0 && p1 < 100){
        let res = p1+p2;
        if(res > 10){
            alert('O resultado é maior que 10,meu nobre');
        }else{
            alert('Não foi dessa vez, meu nobre');
        }
    }

}let myFun = callMyFunction;

let fun = (a,b) => a + b;

alert(fun(8,20));   

describe("pow", function() {

  it("raises to n-th power", function() {
    assert.equal(pow(2, 3), 8);
  });

});
