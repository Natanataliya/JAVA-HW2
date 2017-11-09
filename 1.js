function pow(){
 var a=document.getElementById('inp1').value;
    a=parseInt(a);
    var c;
    if(a>17){
        c=2017-a;
    document.getElementById('inp2').innerHTML=c;    
    }
    if(a<17){
    c=17-a;
    document.getElementById('inp2').innerHTML=c;
    }
}