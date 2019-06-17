var i = Math.floor(Math.random()* 100) + 1;//Genrates random number and stores it i

var j=i%2; //gets the modulus and store the result in j
if (j==0) // checks to see if result in step three is zore or not
		alert(i +" is Even");
else
		alert(i +" is add odd");

for (var count=1;count<=10;count++)
{
let num = prompt ("please enter a number:");//Capture user input
		if (num<1 || num>100){
			alert("Out of range");
		}
		if (num>i){
			alert("number is higher,make another guess");
		}
		if (num<i){
			alert("Number is lower,make another guess");			
		}
		if (num==i){
			alert("YOU WIN");
			break
		}
		if (count==10) {
			alert("You LOSE!");
		}
}
