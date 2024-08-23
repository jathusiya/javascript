/* eslint-disable no-undef */
//concatenation
let fname ="Jathu"
let lname = "seelan"

let c = fname +" "+lname;
console.log("concate :" +c);


//concat
c=fname.concat(' ',lname)
console.log("concat" +c)

//append
c="Jathu";
c+="seelan";
 console.log("append: "+c)

 //Escaping
 c= 'she can\'t run'
 console.log(c);

 //Length
 c = fname.length;
 console.log("Lenght :" +c);

 //uppercase
 c=fname.toUpperCase();
 console.log('uppercase:' +c);

 //lowercase
 c=fname.toLowerCase();
 console.log('lowercase:' +c);

 //index
 c=fname.indexOf('J')
 console.log("indexOf J:" +c)

 c=fname.lastIndexOf('t')
 console.log("lastindexOf t:" +c);

 c = fname.charAt(1);
 console.log("chartAt 1: " +c);

 //printASCi nofor  char 1
 c = fname.charCodeAt(1);
 console.log("charcodetAt 1: " +c);

 //invalid(not include if include index  change the position) print empty , start index is  must, end optional,
 c=fname.substring(0,3)
 console.log("substring:" +c)

 // slice, not change position print empty like invalid, can do negative index not reverse
 c = fname.slice(2,4);
 console.log("slice :" +c);

 c = fname.slice(-2);
 console.log("slice -2:" +c);

 //split
 let a ="Tutor computer education ";
 c=a.split(" ");
 console.log("split :", +c);
 console.table(c);

 //replace
 console.log("Before replace:" +a);
 c = a.replace('Tutor', 'nextLevel');
 console.log("after replace:" +a);

 //includes
 const pets=['cat', 'dog','bat'];
 console.log(pets.includes('cat'));
 console.log(pets.includes('rat'));

 //trim -remove unwanted white space
 a = a.trim();
 console.log("After trim :" +a.length);

 //padStart padEnd
 a="4";
 a=a.padStart(4,0)
 console.log(a);//0004

 a="4";
 a=a.padEnd(4,0)
 console.log(a); //4000

 //Long literal string
 // use + operator to  print long para in line by line
  // use\  operator to  print long para in line by line  

  //String.formCharCode()
  console.log(String.fromCharCode(43))
  console.log(String.fromCharCode(43,99,78,73))






