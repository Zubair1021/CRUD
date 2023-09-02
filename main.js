
// Validation apply bu using this function
function validateform(){
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var address = document.getElementById("address").value;
    var email = document.getElementById("email").value;

    if(name==""){
        alert("Name is Required ");
        return false;
    }
    if(age==""){
        alert("Age is Required ");
        return false;
    }

    else if(age<1){
        alert("Age never Zero or never less than zero");
        return false;
    }

    if(address==""){
        alert("Address is Required ");
        return false;
    }
    if(email==""){
        alert("Email is Required ");
        return false;
    }
    else if(!email.includes("@")){
        alert("Invalid Email Address");
        return false;
    }

    return true;

}

//Through this function data will be display

function showdata(){
    var peoplelist;
    if(localStorage.getItem("peoplelist")==null){
        peoplelist=[];
    }
    else{
        peoplelist =JSON.parse(localStorage.getItem("peoplelist"));
    }

    var html ="";
    peoplelist.forEach(function (element , index){
        html+= "<tr>";
        html+= "<td>" + element.name + "</dtd>";
        html+= "<td>" + element.age + "</dtd>";
        html+= "<td>" + element.address + "</dtd>";
        html+= "<td>" + element.email + "</dtd>";
        html+= 
        '<td><button onclick="deletedata(' + 
        index +
        ')" class="btn btn-danger">Delete</button> <button onclick="updatedata(' + 
        index +
        ')" class="btn btn-warning m-2">Edit</button></td>';

        html+="</tr>";

        
    });


    document.querySelector("#crudtable tbody").innerHTML =
    html;


}

//Loads All data on load the page
document.onload=showdata();


// this function is used to add data

function AddData(){
    if(validateform()==true){
        var name = document.getElementById("name").value;
        var age = document.getElementById("age").value;
        var address = document.getElementById("address").value;
        var email = document.getElementById("email").value;

        var peoplelist;
        if(localStorage.getItem("peoplelist")==null){
            peoplelist=[];
        }
        else{
            peoplelist =JSON.parse(localStorage.getItem("peoplelist"));
        }

        peoplelist.push({
            name : name,
            age: age,
            address:address,
            email:email,

        });

        localStorage.setItem("peoplelist",JSON.stringify(peoplelist));
        showdata();
        document.getElementById("name").value="";
        document.getElementById("age").value="";
        document.getElementById("address").value="";
        document.getElementById("email").value="";
    }
} 


//funtion to delete data from local storage

function deletedata(index){
    var peoplelist;
    if(localStorage.getItem("peoplelist")==null){
        peoplelist=[];
    }
    else{
        peoplelist =JSON.parse(localStorage.getItem("peoplelist"));
    }


    peoplelist.splice(index,1);
    localStorage.setItem("peoplelist",JSON.stringify(peoplelist));
    showdata();

}

//function to edit data from local storge

function updatedata(index){
    document.getElementById("Submit").style.display="none";
    document.getElementById("Update").style.display="block";


    var peoplelist;
    if(localStorage.getItem("peoplelist")==null){
        peoplelist=[];
    }
    else{
        peoplelist =JSON.parse(localStorage.getItem("peoplelist"));
    }


    document.getElementById("name").value = peoplelist[index].name;
    document.getElementById("age").value = peoplelist[index].age;
    document.getElementById("address").value = peoplelist[index].address;
    document.getElementById("email").value = peoplelist[index].email;

    document.querySelector("#Update").onclick=function(){
        if(validateform()==true){
            peoplelist[index].name = document.getElementById("name").value;
            peoplelist[index].age = document.getElementById("age").value;
            peoplelist[index].address = document.getElementById("address").value;
            peoplelist[index].email = document.getElementById("email").value;

            localStorage.setItem("peoplelist",JSON.stringify(peoplelist));

            showdata();

            document.getElementById("name").value="";
            document.getElementById("age").value="";
            document.getElementById("address").value="";
            document.getElementById("email").value="";


            document.getElementById("Submit").style.display="block";
            document.getElementById("Update").style.display="none";
        }
    }

        
}