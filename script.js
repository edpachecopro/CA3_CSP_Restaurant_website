
// Script created to show the user from ramdom.me
    //Get API
    fetch('https://randomuser.me/api/?results=8')
    //fetch('menu.jason?results')
        .then(res => res.json())
        .then(data => {
            // console.log(data);

            let author = data.results;
            // console.log(author);

            //Get Data Value
            let output = "";

            author.forEach(function (lists) {
                output += `
  
            <div class="block-user"> 

                    <div class="round">    
                    <img src="${lists.picture.large}" alt="${lists.name.first}">
                    </div>
                    <div class="data-users">
                        <div class="name"> ${lists.name.first}</div>
                        
                            <table class="table table-striped tb-mg" >
                                <tr>
                                <th>DOB</th>
                                <td> ${lists.dob.date}</td>
                                </tr>
                                <tr>
                                <th>AGE:</th>
                                <td>${lists.dob.age}</td>
                                </tr>
                                <tr>
                                <th>EMAIL:</th>
                                <td> ${lists.email} </td>
                                </tr>
                                <tr>
                                    <th>GENDER:</th>
                                    <td> ${lists.gender}</td>
                                </tr>
                                <tr>
                                    <th>CITY:</th>
                                    <td> ${lists.location.city} </td>
                                </tr>
                                <tr>
                                    <th>COUNTRY:</th>
                                    <td> ${lists.location.country}</td>
                                </tr>
                                <tr>
                                    <th>POSTCODE:</th>
                                    <td> ${lists.location.postcode} </td>
                                </tr>
                            </table>
                        </div>    
              </div>

                `;
            });

           

            //Show On Our Screen All Data
            document.getElementById('users').innerHTML = output;

        });




// PSWD Validator

function validator(pswd){
    return document.getElementById(pswd);
  }
  function show_pswd(pswd){
    return document.getElementsByClassName(pswd);
  }

//function to show the password
  show_pswd("show-password")[0].addEventListener("click",function(){
    show_pswd("show-password")[0].classList.toggle("active");
    if(validator("password-field").getAttribute("type") == "password"){
      validator("password-field").setAttribute("type","text");
    } else {
      validator("password-field").setAttribute("type","password");
    }
  });
  
  validator("password-field").addEventListener("focus",function(){
    show_pswd("password-policies")[0].classList.add("active");
  });
  validator("password-field").addEventListener("blur",function(){
    show_pswd("password-policies")[0].classList.remove("active");
  });
  
  validator("password-field").addEventListener("keyup",function(){
    let password = validator("password-field").value;
    
    if(/[A-Z]/.test(password)){
        show_pswd("policy-uppercase")[0].classList.add("active");
    } else {
        show_pswd("policy-uppercase")[0].classList.remove("active");
    }
    
    if(/[0-9]/.test(password)){
        show_pswd("policy-number")[0].classList.add("active");
    } else {
        show_pswd("policy-number")[0].classList.remove("active");
    }
    
    if(/[^A-Za-z0-9]/.test(password)){
        show_pswd("policy-special")[0].classList.add("active");
    } else {
        show_pswd("policy-special")[0].classList.remove("active");
    }
    
    if(password.length > 7){
        show_pswd("policy-length")[0].classList.add("active");
    } else {
        show_pswd("policy-length")[0].classList.remove("active");
    }
  });




// ############################################################################################
// Script printing menu from jason that I create 

fetch('menu.jason?menu')
//fetch('menu.jason?results')
    .then(res => res.json())
    .then(data => {
        // console.log(data);

        let list_items = data.menu;
        // console.log(author);

        //Get Data Value
        let output = "";

        list_items.forEach(function (list) {
            output += `

            <tr>
            <td> <div class="prod-name"> ${list.item.name} </div></td>
            <td>
                
                <div class="button-container">            
                    <input type="text"  name="qty" min="0" class="qty form-control" value="0" data-veg=${list.item.veg} data-categ="${list.item.category}"/>
                    <span>x</span><input type="text" value="${list.item.price}" class="price form-control" disabled>  
                    <button class="cart-qty-minus" type="button" onClick="check_item(this.value);" value="${list.item.id}"><</button>
                    <button class="cart-qty-plus" type="button"  onClick="check_item(this.value);" value="${list.item.id}" >></button>

                </div>
            </td>
            <td align="right">€<span id="amount" class="amount">0</span></td>
        </tr>

            `;
        });

        //Show On Our Screen All Data
        document.getElementById('menu_jason').innerHTML = output;

    });





// ############################################################################################
// Script printing menu from jason that I create 



            
// getting the Item ID 
var item_num ; 

function check_item(n) {
    item_num = n;
};



var sum_veg = 0;

function update_amounts(is_veg){

  //  console.log('Veg: ' + test);



    var sum = 0.0;
    
    $('#myTable > tbody  > tr').each(function() {
        var qty = $(this).find('.qty').val();
        var price = $(this).find('.price').val();
        var amount = (qty*price)
        

        console.log('total veg 1: ' + sum_veg);
        
        if (is_veg == "false"){

            sum+=amount;
            var total_no_veg =  sum;
            $('.total_no_veg').text(total_no_veg);

        }else{

            if (sum_veg == 0){
            
            sum+=amount;
            var sum_veg = sum;
            var total_veg = sum_veg;

            }else{

            sum+=amount;
            var sum_veg = sum -sum_veg;
            var total_veg = sum_veg;


            }

            sum+=amount;
            var sum_veg = sum;
            var total_veg = sum_veg;

          

            $('.total_veg').text(total_veg);
        }

        console.log('Price: ' + price);
        console.log('qty: ' + qty);
        console.log('Sum: ' + sum);
        console.log('total veg : ' + sum_veg);



        // atualization of amount for each item
        $(this).find('.amount').text(''+amount);

        //console.log('SUM TOTAL = ' + sum);
        //console.log('SUM NO VEG= ' + total_no_veg);
        //console.log('SUM= VEG ' + total_veg);

        //var total = total_no_veg + total_veg;

     
        $('.total_all').text(sum); // printing totall in html
        var split_total = (sum / 3).toFixed(2); // spliting total in 3 and formating
        $('.split').text(split_total); //printing split in html
        total_no_veg, total_veg = 0


    });



    

 
     //split = total + total_veg ;
   // $('.split').text(split);
    

}



//----------------for quantity-increment-or-decrement-------

var incrementQty;
var decrementQty;

var plusBtn  = $(".cart-qty-plus");
var minusBtn = $(".cart-qty-minus");






// #### ADD Botton
var incrementQty = plusBtn.click(function() {
    var $n = $(this).parent(".button-container").find(".qty");
    $n.val(Number($n.val())+1 );
   

    let check = document.querySelector('#item_' + item_num);
    let values = check.querySelector("input");

    let categ = values.getAttribute("data-categ");
    let veg = values.getAttribute("data-veg");

    update_amounts(veg);
 
   // console.log(categ);
    //console.log(veg);
    
  


});



//###### Minus Botton

var decrementQty = minusBtn.click(function() {
    var $n = $(this)
    .parent(".button-container")
    .find(".qty");
    var QtyVal = Number($n.val());
    if (QtyVal > 0) {
        $n.val(QtyVal-1);
    }

    let check = document.querySelector('#item_' + item_num);
    let values = check.querySelector("input");

    let categ = values.getAttribute("data-categ");
    let veg = values.getAttribute("data-veg");

   // console.log(categ);
    //console.log(veg);

    update_amounts(veg);
});



  