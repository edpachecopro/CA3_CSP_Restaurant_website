
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
                <td> <span id="item_${list.item.id}"  data-veg=${list.item.veg} data-categ="${list.item.category}" data-price="${list.item.price}"> ${list.item.name} </span></td>
                
                <td class="button-container">  
                    <input id="qty_${list.item.id}" type="text"  name="qty" min="0" value="0" class="qty form-control" />
                    <button class="cart-qty-minus" type="button" onClick="check_item(this.value);" value="${list.item.id}">-</button>
                    <button class="cart-qty-plus" type="button"  onClick="check_item(this.value);" value="${list.item.id}" >+</button>
                </td>    
                <td > ${list.item.price} </td>

                <td align="right">€<span id="amount_${list.item.id}" class="amount">0</span></td>
            </tr>
                `;
            });

           

            //Show On Our Screen All Data
            document.getElementById('menu_jason').innerHTML = output;

        });



