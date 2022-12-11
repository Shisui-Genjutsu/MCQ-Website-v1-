// buttons
q = 1
qe = 7
function prevbtn(){
        $('#q_'+ q).removeClass('animate__animated animate__slideInRight show').addClass('animate__animated animate__slideInRight hide').
        prev().removeClass('animate__animated animate__slideInRight hide').addClass('animate__animated animate__slideInRight show')
        q--;
        mangebuttons();  
}
function nextbtn(){
    $('#q_'+ q).removeClass('animate__animated animate__slideInRight show').addClass('animate__animated animate__slideInRight hide')
    $('#q_'+ q).next().removeClass('animate__animated animate__slideInRight hide').addClass('animate__animated animate__slideInRight show')
    q++;  
    mangebuttons();
}
function mangebuttons(){
    if(q==qe){
        $('.next').hide()
    }
   if(q>1){
        $('.prev').show()
    }
    if(q==1){
        $('.prev').hide()
    }
    if(q<qe){
        $('.next').show()
    } 
}
// buttons
//buttoncoloring
function loadquestion(qno){
    $('#q_'+ qno).removeClass('animate__animated animate__slideInRight hide').addClass('animate__animated animate__slideInRight show')
    $('#row1 .q').not('#q_'+ qno).removeClass('animate__animated animate__slideInRight show').addClass('animate__animated animate__slideInRight hide')
    /*Answered*/
    $('.radio'+qno).on('click', function(){$('#bt'+qno).removeClass('btn-primary btn-secondary').addClass('btn-info')})
    /*Answered*/
    /*Mark for Review*/
    $('.mfr').on('click', function(){$('#bt'+qno).removeClass('btn-primary btn-secondary btn-info').addClass('btn-danger')})
    /*Mark for Review*/
}
/*Visted*/
$('.b1').on('click', function(){$(this).removeClass('btn-primary').addClass('btn-secondary')})
/*Visted*/
//button coloring
//calculator
function add(){
    var n1 = document.getElementById('num1').value;
    var n2 = document.getElementById('num2').value;
    // Gaurd clauses condition start
        function graudclausealert(){
            if(!(n1==""&&n2=="")){
                if((n1=="")) return alert("enter number 1")
                if(n2=="") return alert("enter number 2")            
            }
            if(n1==""&&n2=="") return alert("enter a valid two numbers")
            }             
    // Gaurd clauses condition end
    graudclausealert()
    var n3 = parseInt(n1) + parseInt(n2);
    document.getElementById('calr').textContent = n3
}
function sub(){
    n1 = document.getElementById('num1').value;
    n2 = document.getElementById('num2').value;
    if(n1==""&&n2==""){
        alert("enter valid two numbers")
    }
    else{
        if(n1==""){
            alert("enter number 1")   
        }
        else{
            if(n2=="")
            alert("enter number 2") 
        }
    }
    n3 = parseInt(n1) - parseInt(n2);
    document.getElementById('calr').textContent = n3
}
function mult(){
    n1 = document.getElementById('num1').value;
    if(n1==""&&n2==""){
        alert("enter valid two numbers")
    }
    else{
        if(n1==""&&n2!=""){
            alert("enter number 1")   
        }
        else{
            if(n2=="")
            alert("enter number 2") 
        }
    }
    n3 = parseInt(n1) * parseInt(n2);
    document.getElementById('calr').textContent = n3
}
function div(){
    n1 = document.getElementById('num1').value;
    n2 = document.getElementById('num2').value;
    if(n1==""&&n2==""){
        alert("enter valid two numbers")
    }
    else{
        if(n1==""&&n2!=""){
            alert("enter number 1")   
        }
        else{
            if(n2=="")
            alert("enter number 2") 
        }
    }
    n3 = parseInt(n1) / parseInt(n2);
    document.getElementById('calr').textContent = n3
}
function divmodulus(){
    n1 = document.getElementById('num1').value;
    n2 = document.getElementById('num2').value;
    if(n1==""&&n2==""){
        alert("enter valid two numbers")
    }
    else{
        if(n1==""&&n2!=""){
            alert("enter number 1")   
        }
        else{
            if(n2=="")
            alert("enter number 2") 
        }
    }
    n3 = parseInt(n1) % parseInt(n2);
    document.getElementById('calr').textContent = n3
}
function calshow(){
    $('#calmaindiv').show();
}
function calhide(){
    $('#calmaindiv').hide();
}
//calculator
//binary converter
function bishow(){
    $('#bimaindiv').removeClass('hide').addClass('show')
}
function bihide(){
    $('#bimaindiv').removeClass('show').addClass('hide')
}

function bconvert(){
    nb1 = parseInt(document.getElementById('bnum1').value);
    nb2 = nb1.toString(2);
    document.getElementById('binr').textContent = nb2
}
//binary converter
