swap_1=[]
swap_2=[]
swap_round=[]
var repeat4=0;

copy_swap_1=[]
copy_swap_2=[]
copy_swap_round=[]
var copy_min_current=0;


function randomnize(){
    for (var i=1 ; i<=18; i++){
    document.getElementById("c"+i).value= (Math.random() * (23 - 21) + 21).toFixed(4); 
    }
}

function array_to(a,b){
b=[];
for(var i=0; i=a.length ; i++){
    b[i] = a[i];
}

}

window.setInterval(function(){
    var current=calculate_steps();
    calculate();
    move_steps();
    color_cap();

    
}, 50);





function color_cap(){
    RYB=['R1','R2','R3','R4','R5','R6',
    'Y1','Y2','Y3','Y4','Y5','Y6',
    'B1','B2','B3','B4','B5','B6',]
    NUM=['1','2','3','10','11','12',
        '4','5','6','13','14','15',
        '7','8','9','16','17','18']
    for(var i = 0; i<18 ; i++){
        name=document.getElementById("oldnamec"+(i+1)).innerHTML;
        if((RYB.indexOf(name)>=0 && RYB.indexOf(name)<=5) ||(NUM.indexOf(name)>=0 && NUM.indexOf(name)<=5) ){
        document.getElementById("oldnamec"+(i+1)).style.backgroundColor = '#FF8167';
        }else if((RYB.indexOf(name)>=6 && RYB.indexOf(name)<=11) ||(NUM.indexOf(name)>=6 && NUM.indexOf(name)<=11) ){
        document.getElementById("oldnamec"+(i+1)).style.backgroundColor = '#FFF85C';
        }else if((RYB.indexOf(name)>=12 && RYB.indexOf(name)<=17) ||(NUM.indexOf(name)>=12 && NUM.indexOf(name)<=17) ){
        document.getElementById("oldnamec"+(i+1)).style.backgroundColor = '#78AFFF';
        }
    }


}

clicked_cap=[];

function cap_clicked(id){
    console.log(id);
    document.getElementById("oldnamec"+id).style.border = "thick solid #0000FF";
    clicked_cap.push(id);
    console.log(clicked_cap.length)
    if(clicked_cap.length>=2){
        swap(clicked_cap[0],clicked_cap[1]);
        return_border(clicked_cap[0])
        return_border(clicked_cap[1])
        swap_round.push(1);
        clicked_cap=[];
        clicked_cap.filter(Boolean);
        
    }

}

function return_border(id){
document.getElementById("oldnamec"+id).style.border = "";

}

function move_steps(){
    var current_RYB=[]
    var RYB=[]
    for(var i=0; i<18; i++){
        current_RYB[i] = document.getElementById("oldnamec"+(i+1)).innerHTML;
    }
    if(current_RYB.indexOf("R1")!=-1){
        RYB=['R1','R2','R3','R4','R5','R6',
    'Y1','Y2','Y3','Y4','Y5','Y6',
    'B1','B2','B3','B4','B5','B6',]
    }else{
        RYB=['1','2','3','10','11','12',
        '4','5','6','13','14','15',
        '7','8','9','16','17','18']
    }

    var output_steps="";
    var listed=[];
    var i =0;
    while(true){
        if(listed[i]!=1){
        if(RYB[i]==current_RYB[i]){
            listed[i]=1;
        }else{
            var from_name= current_RYB[i];
            var to_name = RYB[i];
            output_steps=output_steps+from_name+" to original pos. of "+to_name +"<br>"
            
            listed[i]=1;
            i=current_RYB.indexOf(RYB[i])-1
            
        }
         }
        
        i++;
        i=i%18;
        
        var list_count=0;
        for(var k = 0 ; k<18; k++){
            if(listed[k]==1){
                list_count++;
            }
        }
        if(list_count==18){
            
            document.getElementById("steps").innerHTML=output_steps
            break;

        }
    }

    


}


function change_name(){
    RYB=['R1','R2','R3','R4','R5','R6',
    'Y1','Y2','Y3','Y4','Y5','Y6',
    'B1','B2','B3','B4','B5','B6',]
    NUM=['1','2','3','10','11','12',
        '4','5','6','13','14','15',
        '7','8','9','16','17','18']
    
    for (var i=0 ; i<RYB.length ; i++){
        var name= document.getElementById("oldnamec"+(i+1)).innerHTML;
        var index=RYB.indexOf(name)
     
        var returnit=false;
        if(index != -1){
            document.getElementById("oldnamec"+(i+1)).innerHTML= NUM[index];
            returnit=true;
        }
        if(returnit == false){
            var index=NUM.indexOf(name)
         
            if(index != -1){
                document.getElementById("oldnamec"+(i+1)).innerHTML= RYB[index];
            }
        }

    }
    return
}


function displayword(){
    console.log(document.getElementById("c1").value);
    
    }
function swap(first_id,second_id){
    //Swap function simply exchanges the name and value of two id. 
    //while the (old) inner id does not change.
    
    var temp_name =document.getElementById("oldnamec"+first_id).innerHTML
    document.getElementById("oldnamec"+first_id).innerHTML = document.getElementById("oldnamec"+second_id).innerHTML
    document.getElementById("oldnamec"+second_id).innerHTML= temp_name
    var temp_cap_value = document.getElementById("c"+first_id).value;
    document.getElementById("c"+first_id).value =  document.getElementById("c"+second_id).value
    document.getElementById("c"+second_id).value=temp_cap_value
    swap_1.push(first_id)
    swap_2.push(second_id)

    }

function manswap(first_cap, second_cap){




}



function swap_with_no_record(first_id,second_id){
        //Swap function simply exchanges the name and value of two id. 
        //while the (old) inner id does not change.
        
        var temp_name =document.getElementById("oldnamec"+first_id).innerHTML
        document.getElementById("oldnamec"+first_id).innerHTML = document.getElementById("oldnamec"+second_id).innerHTML
        document.getElementById("oldnamec"+second_id).innerHTML= temp_name
        var temp_cap_value = document.getElementById("c"+first_id).value;
        document.getElementById("c"+first_id).value =  document.getElementById("c"+second_id).value
        document.getElementById("c"+second_id).value=temp_cap_value
       
    
}


    function calculate(){
        calculate_steps();
        document.getElementById("current").innerHTML = m.toFixed(3) + "mA"
    }
    function calculate_steps(){
        var c = [6];
        c[0] = parseFloat(document.getElementById("c"+1).value)+ parseFloat(document.getElementById("c"+2).value)+parseFloat(document.getElementById("c"+3).value)
        c[1] = parseFloat(document.getElementById("c"+7).value)+ parseFloat(document.getElementById("c"+8).value)+parseFloat(document.getElementById("c"+9).value)
        c[2] = parseFloat(document.getElementById("c"+13).value)+ parseFloat(document.getElementById("c"+14).value)+parseFloat(document.getElementById("c"+15).value)
        c[3] = parseFloat(document.getElementById("c"+4).value)+ parseFloat(document.getElementById("c"+5).value)+parseFloat(document.getElementById("c"+6).value)
        c[4] = parseFloat(document.getElementById("c"+10).value)+ parseFloat(document.getElementById("c"+11).value)+parseFloat(document.getElementById("c"+12).value)
        c[5] = parseFloat(document.getElementById("c"+16).value)+ parseFloat(document.getElementById("c"+17).value)+parseFloat(document.getElementById("c"+18).value)

        r=c[0]+c[1]+c[2]+c[3]+c[4]+c[5]
        S1 = c[3] *(c[1] - c[2])
        S2 = c[0]* (c[5] - c[4])
        S3 = c[1] * c[5] - c[2]* c[4]
        S4 = c[0] * (c[4] + c[5])
        S5 = c[3] * (c[1] + c[2])
        R_Unbalcur = (S1 + S2 + 2 * S3) * (S1 + S2 + 2 * S3)
        I_Unbalcur = (S4 - S5) * (S4 - S5)
        bal = Math.sqrt(R_Unbalcur + 3*I_Unbalcur)
        sq=Math.sqrt(3)
        Unbalcur = (1 * (11300.0 / sq) * 2.0 * 3.1415926536 * 50.0 * sq / (2.0 * r)) * (bal)
        m= Unbalcur*0.001
        //console.log(m);
        return m;
    }




var action_list= []
function minimize_units(target, showalert){


//records the step to minimum case
var swap_to_min_1 = []; 
var swap_to_min_2 = [];
//records the steps of trials for returning to initial values
var swap_internal_hist_1=[];
var swap_internal_hist_2=[];
if(target>=3 && showalert==true){
    if (window.confirm("Confirm? It may take minutes.")) {
        txt = "Please wait.";
      } else {
        return
      }
}
var no_of_caps = 18;
var original_labels = [];
var min_current = calculate_steps();
var swap_times=0;

for (var i =0 ; i<no_of_caps; i++){
    
original_labels[i] = document.getElementById("oldnamec"+(i+1)).innerHTML;
}

//2 units 153
//3 units 1632
//4 units 18360
//5 units 205632


var loop_number = 5000000;

for(var k = 0; k<loop_number; k++){
//swap it to the target number of randomnized capbanks....hopefully
first_swap = Math.floor(Math.random() * 18)+1;
temp_swap = 0
swap_internal_hist_1=[];
swap_internal_hist_2=[];
for( var i = 0 ; i< target-1 ; i++ ){
do{
second_swap = Math.floor(Math.random() * 18)+1;
}while(first_swap==second_swap || temp_swap==second_swap )
swap(first_swap,second_swap)
swap_times+=1; //count the swapping time after a valid swap
swap_internal_hist_1.push(first_swap); //and record what you have swapped
swap_internal_hist_2.push(second_swap);
temp_swap = second_swap
}

//calculate the number of different cap bank relative to when it started
var count_diff=0;

for (var i =0 ; i<no_of_caps; i++){
if(original_labels[i]!=document.getElementById("oldnamec"+(i+1)).innerHTML){
count_diff+=1;
}
}

//if target achieved, push it to action_list
if(count_diff == target){
   
var current_labels=[];

for (var i =0 ; i<no_of_caps; i++){
    current_labels[i] = document.getElementById("oldnamec"+(i+1)).innerHTML;
}

current_labels_string = current_labels.join();

if(action_list.indexOf(current_labels_string)== -1){
    action_list.push(current_labels_string);
}

current_current= calculate_steps();

if(current_current < min_current  ){
min_current = current_current;
swap_to_min_1=swap_internal_hist_1;
swap_to_min_2=swap_internal_hist_2;
}
}

//return to original
for(var i =0 ; i<swap_times; i++){
swap_with_no_record(swap_1[swap_1.length-1],swap_2[swap_2.length-1] )
swap_1.pop()
swap_2.pop()
}
swap_times=0;


switch(target){
case(2):
    if(action_list.length>=153){
        k+=loop_number;
    }
    break;
case(3):
    if(action_list.length>=1632){
        k+=loop_number;
    }
    break;
case(4):
   
    if(action_list.length>=10000){
        k+=loop_number;
    }
    break;
case(5):
    if(action_list.length>=19000){
        k+=loop_number;
    }
    break;
case(6):
    if(action_list.length>=19000){
        k+=loop_number;
    }
    break;
case(55):
     if(action_list.length>=205632){
        k+=loop_number;
    }

    default:
}



}
console.log("Minimum current " +min_current  );
console.log("action length " + action_list.length)
console.log(swap_to_min_1 )
console.log(swap_to_min_2 )

if(swap_to_min_1.length>0){
for(var i = 0 ; i<swap_to_min_1.length ; i++){
swap(swap_to_min_1[i],swap_to_min_2[i])
console.log(swap_to_min_1[i])

}
swap_round.push(swap_to_min_1.length);
swap_to_min_1=[]
swap_to_min_2=[]

}
calculate();

action_list= []
if(showalert==true){
window.alert("Done!");
}
}




function return_to_org(){
do{
swap_with_no_record(swap_1[swap_1.length-1],swap_2[swap_2.length-1] )
swap_1.pop()
swap_2.pop()

}while(swap_1.length>0)

}

function return_once(){

for (var i= 0 ; i<swap_round[swap_round.length-1]; i++){
    swap_with_no_record(swap_1[swap_1.length-1],swap_2[swap_2.length-1] )
    swap_1.pop()
    swap_2.pop()
    
}
swap_round.pop()
}


function achieve(target_array){

}

function add_up(target_array){
target_array[0]=target_array[0]+1;
for(var i=0; i<18; i++ ){
if(target_array[i]==19){
    target_array[i]=0;
    if(i+1<=17){
    target_array[i+1]=target_array[i+1]+1
    }
}

}
return target_array
}

function five(){
order=[]
target=[]
for(var i=0; i<18; i++){
    order.push(i+1);
    target.push(1)
}
console.log(order);
console.log(target);

}

function classicswap(target){
    var original_labels=[];
    var current_labels=[];
    no_of_caps=18;
    for (var i =0 ; i<no_of_caps; i++){
        original_labels[i] = document.getElementById("oldnamec"+(i+1)).innerHTML;
        }
    if(original_labels.indexOf("R1")!=-1){
        RYB=['R1','R2','R3','R4','R5','R6',
    'Y1','Y2','Y3','Y4','Y5','Y6',
    'B1','B2','B3','B4','B5','B6',];
    }else{
        RYB=['1','2','3','10','11','12',
        '4','5','6','13','14','15',
        '7','8','9','16','17','18'];
    }
    var minq;
    var minw;

   
    

    var min_current = calculate_steps();
for(var q=1; q<=18; q++ ){
    for(var w=1; w<=18 ; w++){
        swap_with_no_record(q,w);
        
        for (var i =0 ; i<no_of_caps; i++){
            current_labels[i] = document.getElementById("oldnamec"+(i+1)).innerHTML;
            }

        if(difference(current_labels,RYB)-difference(original_labels,RYB)<=target){
        current_current= calculate_steps();
    if(current_current<min_current*0.999){
        min_current=current_current;
        minq=q;
        minw=w;
    }
        }
    swap_with_no_record(q,w);

    }
}
swap(minq,minw);
if(minq!=minw){
swap_round.push(1)
}
return
}


function difference(a,b){
    count=0;
for(var i =0; i<18; i++){
if(a[i]!=b[i])
count++;

}
return count;
}


function reset22(){
    for (var i =1 ; i<=18; i++){
        
        $('#c'+i).val(22); 
        }

}


function save(slot){
for(var i =1; i<=18 ; i++){
value= document.getElementById("c"+i).value
localStorage.setItem(slot+"c"+i, value);

}

localStorage.setItem(slot+"swap1", swap_1.slice(0));
localStorage.setItem(slot+"swap2", swap_2.slice(0));
localStorage.setItem(slot+"swapround", swap_round.slice(0));

alert("Saved to slot "+ slot)
}

function load(slot){

    swap_1=swap_1.filter(Boolean);
    swap_2=swap_2.filter(Boolean);
    swap_round=swap_round.filter(Boolean);
    
   // if(swap_1.length>0 && !(isNaN(swap_1[0])==true && swap_1.length==1) ){
    for( var i =swap_1.length-1 ; i>=0 ; i--){
        swap_with_no_record(swap_1[i],swap_2[i])
    }
   // }
    sawp_1=[]
    
    console.log(swap_1)
    swap_1 = localStorage.getItem(slot+"swap1").split(',')
    for(var i= 0; i<swap_1.length ; i++){
        swap_1[i] = parseInt(swap_1[i],10);
    }
    swap_2=[];
    
    swap_2 = localStorage.getItem(slot+"swap2").split(',')
    for(var i= 0; i<swap_2.length ; i++){
        swap_2[i] = parseInt(swap_2[i],10);
    }
    swap_round=[];
    
    swap_round = localStorage.getItem(slot+"swapround").split(',')
    for(var i= 0; i<swap_round.length ; i++){
        swap_round[i] = parseInt(swap_round[i],10);
    }
    
    swap_1=swap_1.filter(Boolean);
    swap_2=swap_2.filter(Boolean);
    swap_round=swap_round.filter(Boolean);
   //if(swap_1.length>0 && !(isNaN(swap_1[0])==true && swap_1.length==1)){
    for( var i =0 ; i<swap_1.length ; i++){
        swap_with_no_record(swap_1[i],swap_2[i]);
    }
    //}   

    for(var i =1; i<=18 ; i++){
        document.getElementById("c"+i).value = localStorage.getItem(slot+"c"+i);

        }
        alert("Loaded slot "+ slot)
}