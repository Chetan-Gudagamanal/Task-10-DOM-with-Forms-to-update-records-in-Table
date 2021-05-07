

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

    let ele=document.getElementsByName("Food");
    let m=ele.length;
    let foodArr=[]
    for(i=0;i<m;i++){
        if(ele[i].checked)
        foodArr.push(ele[i].value)
    }
    if(foodArr.length<2){
        alert("Please, check-mark minimum two food Catogary")
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

    
    document.getElementById("myForm").reset()

}
