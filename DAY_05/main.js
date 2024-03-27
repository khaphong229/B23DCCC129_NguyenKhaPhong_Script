// bai 1
function ex_1() {
  for (let index = 0; index < 10; index++) {
    document.write("hello xin chào các bạn <br/>");
  }

  var index = 0;
  while (index < 10) {
    document.write("hello xin chào các bạn <br/>");
    index++;
  }

  var index = 0;
  do {
    document.write("hello xin chào các bạn <br/>");
    index++;
  } while (index < 10);
}

// bai 2
function ex_2() {
  var total = 0;
  for (let index = 1; index <= 10; index++) {
    total += index;
  }
  console.log(total);

  var total = 0;
  var index = 1;
  while (index <= 10) {
    total += index;
    index++;
  }
  console.log(total);

  var total = 0;
  var index = 1;
  do {
    total += index;
    index++;
  } while (index <= 10);
  console.log(total);
}

//bai 3

function ex_3() {
  var total = 0;
  for (let index = 1; index <= 100; index++) {
    if (index % 2 == 0) {
      total += index;
    }
  }
  console.log(total);

}

function ex_4(){
    var sum=0;
    for (let index = 1; ; index++) {
        sum+=index;
        if(index>=100){
            break;
        }
    }
    console.log(sum);
}
ex_1()
ex_2()
ex_3()
ex_4()