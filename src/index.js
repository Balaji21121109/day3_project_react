import React from "react";

import  ReactDOM  from "react-dom";
 import  './index.css' 

var time= new Date(2022,8,8,19);

time=time.getHours();

var result="";

var cssStyle ={

}

if(time<=1 && time<11){
  result = "Good Moring"
  cssStyle = "Green"

}else if(time>12&&time<7){
  result ="Good After Noon"
  cssStyle ='Blue'
} else {
  result =" Good Night"
  cssStyle ='Yellow'
}


ReactDOM.render(
<>
<div className="aa">
<h1>Hi sir,<span>{result}</span></h1>
</div>

</>,document.getElementById("root")

);