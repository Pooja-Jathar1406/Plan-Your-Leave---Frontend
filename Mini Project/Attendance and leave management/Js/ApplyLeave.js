 
function AddRow(){  
    var fromDate=document.addleaveform.fromdate.value;
    var toDate=document.addleaveform.todate.value;
    var noOfDays=document.addleaveform.NoOfdays.value;
    var empId=document.addleaveform.empid.value;
    var leaveType=document.addleaveform.leavetype.value;
    var reason=document.addleaveform.reason.value;
    var status="Pending";
 

    var tr=document.createElement('tr'); 
    var td1=tr.appendChild(document.createElement('td'));
    var td2=tr.appendChild(document.createElement('td'));
    var td3=tr.appendChild(document.createElement('td'));
    var td4=tr.appendChild(document.createElement('td'));
    var td5=tr.appendChild(document.createElement('td'));
    var td6=tr.appendChild(document.createElement('td'));
    var td7=tr.appendChild(document.createElement('td'));
     
 
    td1.innerHTML=fromDate;
    td2.innerHTML=toDate;
    td3.innerHTML=noOfDays;
    td4.innerHTML=empId;
    td5.innerHTML=leaveType;
    td6.innerHTML=reason;
    td7.innerHTML=status;
 

        if(  fromDate =="" || toDate =="" || noOfDays =="" || empId =="" || leaveType =="" || reason =="" || status ==""){
            window.alert("Fill out all the fields");
        }
        else
        {
            document.getElementById("table").appendChild(tr); 
        }      

}

 


 