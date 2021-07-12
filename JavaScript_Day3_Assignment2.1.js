//DAY 3 ASSIGNMENT 2.1
//FIZZBUZZ PROBLEM
//SUYOG JAGTAP

function mod(num,divider){
	while(num>=0){
		num = num - divider;
	}
	num = num + divider;
	return num;

}

for(i = 1;i <= 100;i++){
  let mod5 = mod(i,5)
  let mod3 = mod(i,3)

  val = ""
  if(mod3 != 0 && mod5 == 0){
    val = "BUZZ"
  }else if(mod3 == 0 && mod5 != 0){
    val = "FIZZ"
  }else if(mod3 == 0 && mod5 == 0){
    val = "FIZZBUZZ"
  }else{
    val = i
  }
  console.log(val)
}
