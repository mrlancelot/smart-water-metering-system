

           var x1=0;
        var y1=0;
            var z1=0;
            
            setInterval(function(){
	var dataString11 = "";
                var dataString12 = "";
                var dataString13 = "";
	$.ajax({
      
				type: "GET",
				url: "http://192.168.101.12/send.php",
				data: dataString11,
               	cache: false,
				success: function(data) {
                 x1=data;
                    document.getElementById("new").innerHTML = x1;
				},
        
				error: function(data)
				{
					alert("Connect Raspberry");
				}   
		});
            
            
}, 1000);
                   



 var x=0;
        var y=0;
            var z=0;
            
            setInterval(function(){
	var dataString = "";
                var dataString2 = "";
                var dataString3 = "";
	$.ajax({
      
				type: "GET",
				url: "http://192.168.101.12/index.php",
				data: dataString,
               	cache: false,
				success: function(data) {
                 x=JSON.parse(data);
                    document.getElementById("fr").innerHTML = x.a;
                    document.getElementById("upt").innerHTML = x.b; 
                  document.getElementById("vol").innerHTML = x.c;
                   if(x.a<46)
              {
                  document.getElementById("finalpipe").style.display="block";
              }
                    else  if(x.a>46)
              {
                  document.getElementById("finalpipe").style.display="none";
              }
               
				},
        
				error: function(data)
				{
					alert("Connect Raspberry");
				}   
		});
            
            
}, 1000);


setTimeout(function(){
    document.getElementById('mem').className = "new"; 
    document.getElementById('foo').style.display = "block";
    document.getElementById('foo').className = "animated fadeIn";
},2500);


function p(){
    document.getElementById('nav').style.display="block";
    document.getElementById('nav').className="animated slideInUp";
}
function openlive(){
    document.getElementById('live').style.display="block";
    document.getElementById('live').className="animated slideInUp";
}
function x2(){
    document.getElementById('nav').className="animated slideOutDown";
}
function xlive(){
    document.getElementById('live').className="animated slideOutDown";
}
function l(){
    document.getElementById('maped').style.display="block";
    document.getElementById('maped').className="animated slideInUp";
}
function xl(){
    document.getElementById('maped').className="animated slideOutDown";
}

function login()
{
    document.getElementById("login").style.display="block";
    document.getElementById("mem").style.display="none";
     document.getElementById("foo").style.display="none";
}

function check()
{
    var u=document.getElementById("user").value;
    var p=document.getElementById("pass").value;

 if(u == "1100" && p == "password")
  {
    a();
  }
 else
 {
   alert("Error in Password or Username")
  }
}

function a(){
    document.getElementById("mainback").style.display="none";
    document.getElementById('mainback').className="animated slideOutUp";
    document.getElementById('backed').style.display="block";
    document.getElementById('backed').className="animated slideInUp";
    document.getElementById('cir1').style.display="block";
    document.getElementById('cir1').className="cir animated fadeIn";
     document.getElementById('cir2').style.display="block";
    document.getElementById('cir2').className="cir animated fadeIn";
     document.getElementById('cir3').style.display="block";
    document.getElementById('cir3').className="cir animated fadeIn";
     document.getElementById('cir4').style.display="block";
    document.getElementById('cir4').className="cir animated fadeIn";  
}
function link1(){
    document.getElementById('middle2').className="animated slideOutLeft";
    document.getElementById('middle3').className="animated slideOutLeft";
    document.getElementById('middle4').className="animated slideOutLeft";
    document.getElementById('middle').className="animated slideInRight";
    document.getElementById('middle').style.display="block";
    
}
function link2(){
    document.getElementById('middle').className="animated slideOutLeft";
    document.getElementById('middle3').className="animated slideOutLeft";
    document.getElementById('middle4').className="animated slideOutLeft";
    document.getElementById('middle2').className="animated slideInRight";
    document.getElementById('middle2').style.display="block";
}
function link3(){
    document.getElementById('middle').className="animated slideOutLeft";
    document.getElementById('middle2').className="animated slideOutLeft";
    document.getElementById('middle4').className="animated slideOutLeft";
    document.getElementById('middle3').className="animated slideInRight";
    document.getElementById('middle3').style.display="block";
}
function link4(){
    document.getElementById('middle').className="animated slideOutLeft";
    document.getElementById('middle2').className="animated slideOutLeft";
    document.getElementById('middle3').className="animated slideOutLeft";
    document.getElementById('middle4').className="animated slideInRight";
    document.getElementById('middle4').style.display="block";
}

function ab() {
    document.getElementById("mainpipe1").style.display="block";

    setTimeout(function(){     document.getElementById("sub1in").style.display="block";document.getElementById("circout1").style.backgroundColor="green"; }, 2000);
    
    setTimeout(function(){ document.getElementById("circout12").style.backgroundColor="green";document.getElementById("branch2in").style.display="block"; }, 5000);
    
    setTimeout(function(){ document.getElementById("circout11").style.backgroundColor="green";
document.getElementById("branch1in").style.display="block"; }, 7000);
    
    setTimeout(function(){ 
document.getElementById("circout1").style.backgroundColor="orange";
document.getElementById("circout12").style.backgroundColor="orange";
document.getElementById("circout11").style.backgroundColor="orange";

; }, 10000);
    
    setTimeout(function(){
        document.getElementById("sub4in").style.display="block";
        document.getElementById("circout4").style.backgroundColor="green"; }, 13000);
    
    setTimeout(function(){ document.getElementById("circout15").style.backgroundColor="green";
document.getElementById("branch6in").style.display="block"; }, 16000);
    
    setTimeout(function(){ document.getElementById("circout16").style.backgroundColor="green";
document.getElementById("branch5in").style.display="block"; }, 18000);
    
    setTimeout(function(){ 
document.getElementById("circout4").style.backgroundColor="orange";
document.getElementById("circout15").style.backgroundColor="orange";
document.getElementById("circout16").style.backgroundColor="orange";

; }, 22000);
    
    
     setTimeout(function(){ document.getElementById("circout2").style.backgroundColor="green" }, 25000);
    setTimeout(function(){ document.getElementById("sub2in").style.display="block"
}, 25000);
    
     setTimeout(function(){ document.getElementById("circout3").style.backgroundColor="green" }, 25000);
    setTimeout(function(){ document.getElementById("sub3in").style.display="block"
}, 25000);   
    setTimeout(function(){     

    document.getElementById("branch3in").style.display="block";
    document.getElementById("branch4in").style.display="block";
    document.getElementById("circout13").style.backgroundColor="green";
    document.getElementById("circout14").style.backgroundColor="green";
    
}, 30000);   
    setTimeout(function(){     
    document.getElementById("circout2").style.backgroundColor="orange";
    document.getElementById("circout3").style.backgroundColor="orange";
    document.getElementById("circout13").style.backgroundColor="orange";
    document.getElementById("circout14").style.backgroundColor="orange";
    
}, 35000);   
}

var $toastContent = $('<span>I am toast content</span>');
  Materialize.toast($toastContent, 5000);




