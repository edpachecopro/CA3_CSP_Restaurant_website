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
  
                
            <img src="${lists.picture.large}" alt="${lists.name.first}">

            <table class=" card table table-striped" >
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


                `;
            });


            //Show On Our Screen All Data
            document.getElementById('users').innerHTML = output;

        });