//Day3_Assignment2.2
//Pallindrome Problem
//Suyog Jagtap

s = "MOM MEET MADAM AT OXO CENTER APA PAPAP "
let s1 = ""
let s2 = ""
for(t of s){
  if(t == " "){
   if(s1 == s2){
     console.log(s1)
   }
     s1 = ""
     s2 = "" 
  }else{
   s1 += t
   s2  = t + s2
  }
}

//OUTPUT : 
//MOM
//MADAM
// OXO
// APA
// PAPAP
