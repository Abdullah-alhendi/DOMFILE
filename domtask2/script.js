// "use strict"

// let menu_form= document.getElementById("menu_form");

// let customer_arr=[];

// let table_body_con= document.getElementById("body_con");

// menu_form.addEventListener("submit",form_data);
// // console.log(menu_form," menu form data");

// function form_data(event){
//     event.preventDefault();

//     // console.log("inside data form",event);
//     let customer_name=event.target.cus_name.value;//input
//     let order_cus= event.target.type_de.value;//drop down list
//     // console.log(customer_name,"customer_name");
//     // console.log(order_cus,"order_cus");
//     // if condition for image // order
    
//     new Customer_order(customer_name,order_cus)
//     render_table();

// }


// function Customer_order(cus_name_res, order_cus_res){
//     this.customer_name=cus_name_res;
//     this.order_customer =order_cus_res;
//     this.path_imag =`image/${order_cus_res}.jpg`;
//     this.price =price_order(1, 2);

//     // console.log(this,"= data this")
//     customer_arr.push(this)
//     console.log(customer_arr," = customer array");
// }

// function price_order(min, max) {
//     return Math.random() * (max - min) + min;
//   }
// // console.log(this,"= data this out function")

// function render_table() {
//     // Clear the table body to avoid duplicates
//     table_body_con.innerHTML = "";

//     for (let index = 0; index < customer_arr.length; index++) {
//         let tr_el = document.createElement('tr');
        
//         // Order Image
//         let td_el_img = document.createElement('td');
//         let img_el = document.createElement('img');
//         img_el.setAttribute('src', customer_arr[index].path_imag);
//         td_el_img.appendChild(img_el);
//         tr_el.appendChild(td_el_img);

//         // Customer Name
//         let td_el2_name = document.createElement('td');
//         td_el2_name.textContent = customer_arr[index].customer_name;
//         tr_el.appendChild(td_el2_name);

//         // Food Type
//         let td_el3_type = document.createElement('td');
//         td_el3_type.textContent = customer_arr[index].order_customer;
//         tr_el.appendChild(td_el3_type);

//         // Payment
//         let td_el4_payment = document.createElement('td');
//         td_el4_payment.textContent = `$${customer_arr[index].price}`;
//         tr_el.appendChild(td_el4_payment);

//         // Append row to table body
//         // table_body_con.appendChild(tr_el);
//     }
//     function save_to_local_storage(){
//         let dataSave
//     }
// }


"use strict"

let menu_form= document.getElementById("menu_form");

let customer_arr = [];

let table_body_con= document.getElementById("body_con");

menu_form.addEventListener("submit",form_data);
// console.log(menu_form," menu form data");

function form_data(event){
    event.preventDefault();

    // console.log("inside data form",event);
    let customer_name=event.target.cus_name.value;//input
    let order_cus= event.target.type_de.value;//drop down list
    // console.log(customer_name,"customer_name");
    // console.log(order_cus,"order_cus");
    // if condition for image // order
    
    new Customer_order(customer_name,order_cus)
    render_table();

}


function Customer_order(cus_name_res, order_cus_res){
    this.customer_name=cus_name_res;
    this.order_customer =order_cus_res;
    this.path_imag =`image/${order_cus_res}.jpg`;
    this.price =price_order(1, 2);

    // console.log(this,"= data this")
    customer_arr.push(this)
    console.log(customer_arr," = customer array");
    save_to_local_storage();
}

function price_order(min, max) {
    return Math.random() * (max - min) + min;
  }
// console.log(this,"= data this out function")

function render_table(){
    table_body_con.innerHTML="";
    for (let index = 0; index < customer_arr.length; index++) {
      let tr_el = document.createElement('tr');
      let td_el =document.createElement( 'td');
      let td_el_img = document.createElement('img');
      td_el_img.setAttribute('src',customer_arr[index].path_imag);

        // append child
        td_el.appendChild(td_el_img);
        tr_el.appendChild(td_el);
        table_body_con.appendChild(tr_el);

        // name
      let td_el_name =document.createElement( 'td');
      td_el_name.textContent=customer_arr[index].customer_name;
      tr_el.appendChild(td_el_name);

    //   food type
    let td_el_food_type =document.createElement( 'td');
    td_el_food_type.textContent=customer_arr[index].order_customer;
    tr_el.appendChild(td_el_food_type);


    // price
    let td_el_price =document.createElement( 'td');
    td_el_price.textContent=customer_arr[index].price;
    tr_el.appendChild(td_el_price);
    }
    
}
read_from_local_storage();
function save_to_local_storage(){
    let data_save= JSON.stringify(customer_arr);
    // console.log("data save type= ",typeof(data_save));
    localStorage.setItem('customerOrder',data_save)
    
}

function read_from_local_storage(){
    let read_data=localStorage.getItem('customerOrder');
    let converr_data_to_arr=JSON.parse(read_data);
    console.log("data type local storage= ",typeof(converr_data_to_arr));
    if(converr_data_to_arr){
        customer_arr = converr_data_to_arr;
    }
    render_table();
}
function clrea_DB(){
    localStorage.clear();
    location.reload();
}
