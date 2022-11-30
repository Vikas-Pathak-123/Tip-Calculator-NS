//// yeeh i did it 28-sep-2022 12:19 AM


function calc(){
    let amt = document.getElementById("billamt").value;
    let pplAmt = document.getElementById("peopleamt").value;
   
     if(amt==""|| amt<1){
    alert("Please Enter valid Bill Amount");
    }
     function update() {
				var select = document.getElementById('serviceQual');
				var option = select.options[select.selectedIndex];

				select.value = option.value;
	    	 if(pplAmt<1 ){
                         alert("Please Enter valid Number");
                    }
                    else if(pplAmt>1){
                    let num = (select.value*amt)/pplAmt ;
                    let n = num.toFixed(2);
                    document.getElementById("tip").innerHTML=`TIP AMOUNT<br>${n} <br>Each`;
                    }else{
                     let num = (select.value*amt)/pplAmt ;
                    let n = num.toFixed(2);
                    document.getElementById("tip").innerHTML=`TIP AMOUNT<br>${n}`;
                    }
				
			}

			update();

}



////             it's appending many time element
     // function update() {
	// 			var select = document.getElementById('serviceQual');
	// 			var option = select.options[select.selectedIndex];

	// 			select.value = option.value;
     //                if(pplAmt>1){
     //                const para = document.createElement("p");
     //                para.innerHTML=`TIP AMOUNT<br>${Math.round ((select.value*amt)/pplAmt)} <br>Each`;
     //                document.body.appendChild(para);
     //                }else{
     //                const para = document.createElement("p");
     //                para.innerHTML=`TIP AMOUNT<br>${Math.round ((select.value*amt)/pplAmt)}`;
     //                document.body.appendChild(para);
     //                }
				
	// 		}

	// 		update();


//=====================================

///by  Math.round () method
// function calc(){
//     let amt = document.getElementById("billamt").value;
//     let pplAmt = document.getElementById("peopleamt").value;
   
//     if(amt==""){
//     alert("Please Enter Bill Amount");
//     }
//      function update() {
// 				var select = document.getElementById('serviceQual');
// 				var option = select.options[select.selectedIndex];

// 				select.value = option.value;
//                     if(pplAmt>1){
//                     document.getElementById("tip").innerHTML=`TIP AMOUNT<br>${Math.round ((select.value*amt)/pplAmt)} <br>Each`;
//                     }else{
//                     document.getElementById("tip").innerHTML=`TIP AMOUNT<br>${Math.round ((select.value*amt)/pplAmt)}`;
//                     }
				
// 			}

// 			update();

// }
