
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

