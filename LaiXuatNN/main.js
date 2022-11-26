let T= Number(prompt("So tien ban muon tiep kiem"));
let L= Number(prompt("Lai xuat hang nam(de duoi dang thap phan)"));
let Y= Number(prompt("So nam da gui tien"));
let TT= T*L;
var TTT=Y*TT; 
TTT+=T;       
function Show() {
document.write("Tong so tien la: "+TT, "VND")}
function S() {
    document.write("Tong ca goc lan lai: "+TTT, "VND")}
    