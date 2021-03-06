//Code to display msg "minimum two items from checkbox required"
let ele=document.getElementsByName("Food");
let len=ele.length;
for(i=0;i<len;i++){
    ele[i].setAttribute("oninvalid","this.setCustomValidity('Please Select minimum two from these')")
    ele[i].setAttribute("title","Please Select atleast two items")
}

//Code to validate: minimum two checkboxes are selected.
validate=()=>{
    let m=ele.length;
    let foodArr=[]
    for(i=0;i<m;i++){
        if(ele[i].checked)
        foodArr.push(ele[i].value)
    }
    if(foodArr.length>=2){
        for(i=0;i<m;i++){
            ele[i].removeAttribute("required")
        }
    }
    else{
        for(i=0;i<m;i++){
            ele[i].setAttribute("required","true")
        }
    }
}

//Code to update records in table on: Form submit.
updateTable=()=>{
    var n = document.querySelector("#myTable > tbody").childElementCount
    // var k=document.querySelectorAll("#myTable > tbody > tr").length

    var table = document.getElementById("myTable")
    var row = table.insertRow(n);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);

    //let ele=document.getElementsByName("Food");
    let m=ele.length;
    let foodArr=[]
    for(i=0;i<m;i++){
        if(ele[i].checked)
        foodArr.push(ele[i].value)
    }
    if(foodArr.length<2){
        alert("Please, choose minimum two from food Catogary")
        return false;
    }
    
    food=foodArr.join(",")
    
    if(document.getElementsByName("Gender")[0].checked){
        gender=document.getElementsByName("Gender")[0].value
    }
    else{
        gender=document.getElementsByName("Gender")[1].value
    }

    cell1.innerHTML = `${document.getElementById("FirstName").value}`;
    cell2.innerHTML = `${document.getElementById("LastName").value}`;
    cell3.innerHTML = `${document.getElementById("Address").value}`;
    cell4.innerHTML = `${document.getElementById("PIN").value}`;
    cell5.innerHTML = `${gender}`;
    cell6.innerHTML = `${food}`;
    cell7.innerHTML = `${document.getElementById("State").value}`;
    cell8.innerHTML = `${document.getElementById("Country").value}`;

    //Code to display temporary msg inside button after successful updation of record in table.
    var x=setInterval(()=>{
        if(document.querySelector("#myTable > tbody").childElementCount===n+1){
            document.querySelector(".btn").setAttribute("style","background-color: green;")
            document.querySelector(".btn").innerHTML="Row added in below Table"
        }
    },1000)
    setTimeout(()=>{
        clearInterval(x);
        document.querySelector(".btn").innerHTML="Submit"
        document.querySelector(".btn").removeAttribute("style")
        document.getElementById("myForm").reset();
        for(i=0;i<len;i++){
            ele[i].setAttribute("required","true")
        }
    },2500)

}
