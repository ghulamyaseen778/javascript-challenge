const categoryes= ["name","price","company"]

const arrOfObj=[
    {
        name: "iphone7",
        price:"35000",
        company:"apple",
        category:"mobile",
    },
    {
        name: "iphone8",
        price:"75000",
        company:"apple",
        category:"mobile",
    },
    {
        name: "iphone9",
        price:"100000",
        company:"apple",
        category:"mobile",
    },
    {
        name: "iphone10",
        price:"150000",
        company:"apple",
        category:"mobile",
    },
    {
        name: "iphone11",
        price:"450000",
        company:"apple",
        category:"mobile",
    },
    {
        name: "iphone12",
        price:"450000",
        company:"apple",
        category:"mobile",
    },
    {
        name: "iphone13",
        price:"500000",
        company:"apple",
        category:"mobile",
    },
    {
        name: "iphone14",
        price:"500000",
        company:"apple",
        category:"mobile",
    },
    {
        name: "samsung s9",
        price:"500000",
        company:"samsung",
        category:"mobile",
    },
    {
        name: "samsung s10",
        price:"600000",
        company:"samsung",
        category:"mobile",
    },
    {
        name: "samsung s11",
        price:"70000",
        company:"samsung",
        category:"mobile",
    },
    {
        name: "samsung s12",
        price:"70000",
        company:"samsung",
        category:"mobile",
    },
    {
        name: "samsung s13",
        price:"90000",
        company:"samsung",
        category:"mobile",
    },
    {
        name: "samsung s14",
        price:"1000000",
        company:"samsung",
        category:"mobile",
    },
]

let category = document.getElementById("category")
let InputVal = document.getElementById("InputVal")
function ValuePrint(arr) {
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        category.innerHTML+=`<option value=${element}>${element}</option>`
    }
    
}
ValuePrint(categoryes)

function con() {
    let table = document.getElementById('table')
   let arr = arrOfObj.filter((obj)=>obj[category.value]==InputVal.value)
   console.log(arr)
   for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    let query = `<tr>
    <td>${element.name}</td>
    <td>${element.price}</td>
    <td>${element.company}</td>
    <td>${element.category}</td>
</tr>`

table.innerHTML+=query

   }
}