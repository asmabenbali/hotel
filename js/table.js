var form = document.querySelector('#form')
var table = document.querySelector('#table')

form.addEventListener('submit', function(e){
    e.preventDefault();

    var username = document.querySelector('#name').value;
    var email = document.querySelector('#email').value;
    var phone = document.querySelector('#phone').value;

    var data = createliste(username,email,phone);
    table.appendChild(data);

    //----------------
    function createliste(username,email,phone){
        var row = document.createElement('tr');

        var usernameColumn = document.createElement('td');
        usernameColumn.innerText = username;

        var emailColumn = document.createElement('td');
        emailColumn.innerText = email;

        var phoneColumn = document.createElement('td');
        phoneColumn.innerText = phone;

        var actionColumn = document.createElement('td');
        var updateButton = document.createElement('button');

        updateButton.innerText = 'update';
        updateButton.addEventListener('click', function(){

            var updateName = prompt('enter new User Name:', username);
            var updateEmail = prompt('enter new Email:', email);
            var updatePhone = prompt('enter phone number:',phone);

            if(updateName !== null && updateEmail !== null && updatePhone !== null){
                usernameColumn.innerText = updateName;
                emailColumn.innerText = updateEmail;
                phoneColumn.innerText = updatePhone;
            }

        })

        var deletebutton = document.createElement('button');
        deletebutton.innerText = 'delete';
        deletebutton.addEventListener('click', function(){
            table.removeChild(row);
        })

        actionColumn.appendChild(updateButton);
        actionColumn.appendChild(deletebutton);


        row.appendChild(usernameColumn);
        row.appendChild(emailColumn);
        row.appendChild(phoneColumn);
        row.appendChild(actionColumn);

        return row;
    }

})