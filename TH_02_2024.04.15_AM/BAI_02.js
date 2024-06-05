var arr=[5,6,2,9,1,2,3,-1,2,9.9,-9,1];

function max_number(arr){
    let max_val=arr[0];
    for(let i=1;i<arr.length;i++){
        if(Number.isInteger(arr[i]) && arr[i]>max_val){
            max_val=arr[i];
    }
    }
    return max_val;
}


function chinh_phuong(arr){
    for(let i of arr){
        let can=Math.sqrt(i)
        if(i>0 && can*can===i){
            console.log(i);
        }
    }
}

function GreatThanAvg(arr){
    let sum=0;
    for(let i of arr){
        sum+=i;
    }
    let avg=sum/(arr.length);
    return arr.filter(function(item){
        return item>avg;
    })
}

function avgNoMinus(arr){
    let arrPlus=arr.filter(function(item){
        return item>0;
    })
    let sum=0;
    for(let i of arrPlus){
        sum+=i;
    }
    return sum/arrPlus.length;

}

console.log('so nguyen lon nhat trong mang la ',max_number(arr));

chinh_phuong(arr);

console.log(GreatThanAvg(arr));

console.log(avgNoMinus(arr));