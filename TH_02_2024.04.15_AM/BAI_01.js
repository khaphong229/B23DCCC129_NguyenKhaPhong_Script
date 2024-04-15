var arr=[5,6,2,9,1,2,3];

function sapxep(arr){
    for (let i = 0; i < arr.length; i++) {
        let check=false;
        for(let j=0; j < arr.length-1; j++){
            if (arr[j+1]<arr[j]){
                check=true;
                let temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
        if(check==false){break;}
    }
}

function loc(arr){
    return arr.filter(function(item,index,arr){
        return arr.indexOf(item) === index;
    })
}

sapxep(arr);
console.log(arr);

var result= loc(arr);
console.log(result);
