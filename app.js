// Q1
var array=[];

// Q2
var array= new Array();

// Q3
document.write("<br/><br/>Question3<br/><br/>");
var array= ["Syed","Muhammad","Abdur","Rahman"];
document.write(array+"<br/>");

// Q4
document.write("<br/><br/>Question4<br/><br/>");
var array =[1,2,3,4,5,6,7,8,9,10]
document.write(array+"<br/>");

//Q5
document.write("<br/><br/>Question5<br/><br/>");
var array =[true,false];
document.write(array+"<br/>");

// Q6
document.write("<br/><br/>Question6<br/><br/>");
var array =[true,3,"web development"];
document.write(array+"<br/>");

// Q7
document.write("<br/><br/>Question7<br/><br/>");
var array =["Ufone","Zong","Jazz","Telenor","warid"];
document.write(array+"<br/>");

//Q8
document.write("<br/><br/>Question8<br/><br/>");
var array =["SSC", "HSC", "BCS", "BS", "BCOM", "MS","M. Phil", "PhD"];
document.write("<ol><li>"+array[0]+"</li><li>"+array[1]+"</li><li>"+array[2]+"</li><li>"+array[3]+"</li><li>"+array[4]+"</li><li>"+array[5]+"</li><li>"+array[6]+"</li><li>"+array[7]+"</li><ol/>");

// Q9
document.write("<br/><br/>Question9<br/><br/>");
var array=[];
array[0]="Avengers:Age Of Ultron";
array[1]="Spectre";
array[2]="Jurassic World";
array[3]="Inside Out";
document.write("<ol><li>"+array[0]+"</li><li>"+array[1]+"</li><li>"+array[2]+"</li><li>"+array[3]+"</li><li>"+array[4]+"</li><ol/>");

// Q10
document.write("<br/><br/>Question10<br/><br/>favourate cars<br/><br/>");
var array =["Audi","volvo","ford","lamborgani"];
document.write(array+"<br/>");
document.write(array+"<br/>");
document.write("First index of array "+0+"<br/>");
document.write("car at First index of array :"+array[0]+"<br/>");
document.write("Last index of array "+3+"<br/>");
document.write("car at last index of array :"+array[3]+"<br/>");

// Q11
document.write("<br/><br/>Question11<br/><br/>");
var nam=["abdur","rahman","nabi"];
var num=[450,400,370];
var t1= num[0]/500*100;
var t2= num[1]/500*100;
var t3= num[2]/500*100;
document.write("score of "+nam[0]+" ,Percentage : "+t1+"%","<br/>");
document.write("score of "+nam[1]+" ,Percentage : "+t2+"%","<br/>");
document.write("score of "+nam[2]+" ,Percentage : "+t3+"%","<br/>");

// Q12
document.write("<br/><br/>Question12<br/><br/>");
var color=["red","green","Blue"];
document.write(color+"<br/><br/>");
 var start = prompt("what color would you like to add on starting : ");
 color.unshift(start);
 var col = prompt("what color would you like to add on end : ");
color.push(col);
document.write(color+"<br/>");
color.unshift("Purple","lightgreen")
document.write(color+"<br/>");
color.shift(color[0]);
document.write(color+"<br/>");
var del = prompt("what color would you like to delete  : ");
color.pop(del);
document.write(color+"<br/>");

// Q13
document.write("<br/><br/>Question13<br/><br/>");
var numbers =[890,20,80,12];
document.write("score of students : "+numbers+"<br/>");
numbers.sort();
document.write("ordered score of students : "+numbers+"<br/>");

// Q14
document.write("<br/><br/>Question14<br/><br/>");
var numbers =["strawberry","apple","orange","banana"];
document.write("fruits list : "+numbers+"<br/>");
numbers.sort();
document.write("orderd fruit list : "+numbers+"<br/>");

// Q15
document.write("<br/><br/>Question15<br/><br/>");
var cities =["Karachi","Lahore", "Islamabad", "Quetta", "Peshawer"];
var selected_cities=[];
selected_cities.push(cities[0],cities[1],cities[3]);
document.write("cities : "+cities+"<br/>");
document.write("Selected cities : "+selected_cities+"<br/>");

// Q16
document.write("<br/><br/>Question16<br/><br/>");
var pet =["This", " is", " My", " cat"];
document.write(pet+"<br/>");
document.write(pet[0]+pet[1]+pet[2]+pet[3]+"<br/>");

// Q17
document.write("<br/><br/>Question17<br/><br/>");
var dev =["Keyboard", " mouse", "Printer", "monitor","<br/>","<br/>"];
document.write("devices : "+dev+"<br/>");
document.write("out : <br/>"+dev[0]+"<br/>"+"out : <br/>"+dev[1]+"<br/>"+"out : <br/>"+dev[2]+"<br/>"+"out : <br/>"+dev[3]+"<br/>");

// Q18
document.write("<br/><br/>Question17<br/><br/>");
var dev =["Keyboard", " mouse", "Printer", "monitor","<br/>","<br/>"];
document.write("devices : "+dev+"<br/>");
document.write("out : <br/>"+dev[3]+"<br/>"+"out : <br/>"+dev[2]+"<br/>"+"out : <br/>"+dev[1]+"<br/>"+"out : <br/>"+dev[0]+"<br/>");

//Q19
document.write("<br/><br/>Question19<br/><br/>");
var array =["Apple","Samsung","nokia","motorolla"];
document.write("<select><option>"+array[0]+"</option><option>"+array[1]+"</option><option>"+array[2]+"</option><option>"+array[3]+"</option></select>"+"<br/>");

// // Q20
document.write("<br/><br/>Question20<br/><br/>");
var array =[["Apple","Samsung","nokia","motorolla"],
 ["iphone","Samsung","realme"]]; 

 //Q21
 document.write("<br/><br/>Question21<br/><br/>");
 var array =[[0,1,2,3],
  [1,0,1,2],[2,1,0,1]];


