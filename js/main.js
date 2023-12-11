// var x = document.getElementById('inp1')
// var y = document.getElementById('inp2')

// function card() {
//   var sum = Number(x.value) + Number(y.value)
//   document.getElementById(`result`).innerHTML=sum
// }

/* <div class="container">
<div id="demo my-3 p-5 " >
    <input type="text" id="inp1" class="form-control">
    <input type="text" id="inp2" class="form-control my-2">
    
    <button class="btn btn-danger mt-3" onclick="card()">Button</button>
    <h3 id="result"></h3>
</div>
</div> */

// var user = {
//   name: "John",
//   age: 36,
//   email: "john@example.com",

//     welcome: function (name) {
//       console.log('Welcome' + name);
//     },
// };

// user.welcome('Mohamed')

// var colors = ['09c', 'red', 'green', 'yellow', 'blue', 'ahmed', 10 , 'green', 'yellow']

// for(i=0 ; i<colors.length ; i++) {
//   console.log(colors[i]);
// }

// var users = [
//   { name: "John", age: 26, email: "john@example.com" },
//   { name: "ali", age: 38, email: "ali@example.com" },
//   { name: "khaled", age: 86, email: "khaled@example.com" },
//   { name: "hema", age: 96, email: "hema@example.com" },
//   { name: "nor", age: 34, email: "nor@example.com" }
// ]

// var cartona = ``;
// for (i = 0; i < users.length; i++) {
//   cartona += `
//              <tr>
//                 <td>${users[i].name}</td>
//                 <td>${users[i].email}</td>
//                 <td>${users[i].age}</td>
//             </tr>
//   `
// }

// document.getElementById('demo').innerHTML = cartona;

var productNameInput = document.getElementById("product-name");
var productCategoryInput = document.getElementById("product-category");
var productPriceInput = document.getElementById("product-price");
var productDescInput = document.getElementById("product-decription");

var productList = [];

function getInputValue() {
  var product = {
    name: productNameInput.value,
    category: productCategoryInput.value,
    price: productPriceInput.value,
    decription: productDescInput.value,
  };
  productList.push(product);
  displayProduct();
  clear();
}
function displayProduct() {
  var cartona = ``;
  for (var i = 0; i < productList.length; i++) {
    cartona += `
    <tr>
        <td>${i}</td>
        <td>${productList[i].name}</td>
        <td>${productList[i].category}</td>
        <td>${productList[i].price}</td>
        <td>${productList[i].decription}</td>
        <td><button class="btn btn-danger">Delete</button></td>
        <td><button class="btn btn-warning">Update</button></td>
        </tr>
    
    `;
  }
  document.getElementById("demo").innerHTML = cartona;
}

function clear() {
  productNameInput.value = "";
  productCategoryInput.value = "";
  productPriceInput.value = " ";
  productDescInput.value = " ";
}
 
function deleteProduct(){
  productList[i].splice(product)
}