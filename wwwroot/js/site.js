// Write your Javascript code.
var uri = 'api/Books';

$(document).ready(function () {
    // all books 
    $.getJSON(uri)
        .done(function (data) {

            $("#mybook").tmpl(data).appendTo("#Books");

        });
});

function remove(id) {


    var yes = confirm("Are you sure?");

    if (yes) {
        $.ajax({
            type: "DELETE", // delete method for delete books by id 
            url: uri + "/" + id,

        }).done(function (response) {

            getAllBooks();
        });

    }


}


function addbook() {
    var _title = $('#title').val();
    var _discription = $('#discription').val();
    var _price = parseInt($('#price').val());
    var _author = $('#author').val();

    var item = {
        title: _title, author: _author, discription: _discription, price: parseFloat(_price)




    };

    $.ajax({
        type: "POST",  // Post method for add books
        url: uri,
        data: JSON.stringify(item),
        contentType: "application/json; charset=utf-8"
    }).done(function (response) {
        $("#result").html("Added Successfully");
        getAllBooks();
    }).fail(function (jqXHR, textStatus) {
        $("#result").html("Error");
    });


}

function getAllBooks() {

    $.getJSON(uri)
        .done(function (data) {

            $("#Books").text("");

            $("#mybook").tmpl(data).appendTo("#Books");
        });

}


function editbook() {
    var _title = $('#_title').val();
    var _discription = $('#_discription').val();
    var _price = parseInt($('#_price').val());
    var _author = $('#_author').val();



    var item = {
        id: parseInt($('#_id').val()), author: _author, discription: _discription, title: _title, price: parseFloat(_price)








    };

    $.ajax({
        type: "PUT",
        url: uri + "/" + $('#_id').val(),
        data: JSON.stringify(item),
        contentType: "application/json; charset=utf-8"
    }).done(function (response) {
        $("#res").html("Updated Successfully");
        getAllBooks();
    }).fail(function (jqXHR, textStatus) {
        $("#res").html("Error");
    });;




}



function getitem(id) {

    $.ajax({
        type: "GET",
        url: uri + "/" + id,
        contentType: "application/json"
    }).done(function (response) {

        $('#_id').val(response.id);
        $('#_discription').val(response.discription);
        $('#_title').val(response.title);
        $('#_price').val(response.price);
        $('#_author').val(response.author);






    });


}

 <script id="mybook" type="text/x-jquery-tmpl">

        <tr>

            <td> ${title}</td>
            <td>${discription}</td>

            <td>${price}</td>
            <td>
                ${author}
            </td>




            <td> <button class="btn text-secondary" onclick="getitem('${id}')" data-toggle="modal" data-target="#editbook">Update</button></td>
            <td> <a href="#" class="btn text-danger" onclick="remove('${id}')">Delete</a></td>

        </tr>
    </script>