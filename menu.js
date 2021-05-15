
// Script created to show the user from ramdom.me
    //Get API
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
                    <td> <div id="item_1" class="prod-name"  data-veg=false data-categ="Starters"> BBQ </div></td>
                    <td>
                        
                        <div class="button-container">            
                            <input type="text"  name="qty" min="0" value="0" class="qty form-control" />
                            <span>x</span><input type="text" value="5" class="price form-control" disabled>  
                            <button class="cart-qty-minus" type="button" onClick="check_item(this.value);" value="1"><</button>
                            <button class="cart-qty-plus" type="button"  onClick="check_item(this.value);" value="1" >></button>

                        </div>
                    </td>
                    <td align="right">€<span id="amount" class="amount">0</span></td>
                </tr>

                `;
            });

           

            //Show On Our Screen All Data
            document.getElementById('menu_jason').innerHTML = output;

        });

