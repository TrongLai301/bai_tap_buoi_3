function C() {
   let A=Number(document.getElementById("AMOUNT").value);
   let F=document.getElementById("H").value;
   let T=document.getElementById("M").value;
   if (F=="VND" && T=="USD") {
      let B= A/23000;
      Result=("Result: "+B +"$");
   } 
   if (F=="USD" && T=="VND") {
      let V=A*23000;
      Result=("Result: "+V +"VND");
   }
   if (F=="VND" && T=="VND") {
      let L=A;
      Result=("Result: "+L+"VND");
   }
   if (F=="USD" && T=="USD") {
      let N=A;
      Result=("Result: "+N+"$");
   }
   
   
   
   document.getElementById("Result").innerHTML=Result }
