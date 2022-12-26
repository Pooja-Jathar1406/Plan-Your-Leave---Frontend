 
function AddRow(){  

    var empid=document.attendForm.emplyid.value;
    var date=document.attendForm.date.value;
    var entrytime=document.attendForm.entrytime.value;
    var exittime=document.attendForm.exittime.value; 
    var status="present";
 

    var tr=document.createElement('tr'); 
    var td1=tr.appendChild(document.createElement('td'));
    var td2=tr.appendChild(document.createElement('td'));
    var td3=tr.appendChild(document.createElement('td'));
    var td4=tr.appendChild(document.createElement('td')); 
    var td5=tr.appendChild(document.createElement('td'));
     
 
    td1.innerHTML=empid;
    td2.innerHTML=date;
    td3.innerHTML=entrytime;
    td4.innerHTML=exittime; 
    td5.innerHTML=status;
 
 
         
        if(  empid =="" || date =="" || entrytime =="" || exittime =="" ){
            window.alert("Fill out all the fields");
        }
        else
        {
            document.getElementById("table").appendChild(tr); 
        }      

} 