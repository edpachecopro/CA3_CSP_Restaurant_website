




// Script created to show the user from ramdom.me
    //Get API
    fetch('https://randomuser.me/api/?results=8')
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

            var str = "Hello world, %ˆ&&**(()) welcome to the universe.";
            var n = str.includes("$");

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
// Script for menu

$(document).ready(function(){
    update_amounts();
    $('.qty, .price').on('keyup keypress blur change', function(e) {
        update_amounts();
    });
});
function update_amounts(){
    var sum = 0.0;
    $('#myTable > tbody  > tr').each(function() {
        var qty = $(this).find('.qty').val();
        var price = $(this).find('.price').val();
        var amount = (qty*price)
        sum+=amount;
        $(this).find('.amount').text(''+amount);
    });
    $('.total').text(sum);
}



//----------------for quantity-increment-or-decrement-------



var incrementQty;
var decrementQty;
var plusBtn  = $(".cart-qty-plus");
var minusBtn = $(".cart-qty-minus");
var incrementQty = plusBtn.click(function() {
    var $n = $(this)
    .parent(".button-container")
    .find(".qty");
    $n.val(Number($n.val())+1 );
    update_amounts();
});
var decrementQty = minusBtn.click(function() {
    var $n = $(this)
    .parent(".button-container")
    .find(".qty");
    var QtyVal = Number($n.val());
    if (QtyVal > 0) {
        $n.val(QtyVal-1);
    }
    update_amounts();
});