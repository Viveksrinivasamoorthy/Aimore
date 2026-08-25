			JAVASCIRPT
--------------------------------------------------------------
browser-> eject or F12
----------------------------
10000
10000
-----------------
var salary = 100000
>
-------------------
salary
>100000
================================
var name ="arun" or var name ='arun'
-------------
name
>"arun
============================= =============
salary+10000
>110000
========================================
'hello, my name is '+ name 
>'hello my name is arun'
=======================================
 2+3
>5
============================
'2'+'3'
>'23'
===============================
'hello, my name is '+ name + "my salary is" + salary
>'hello, my name is arun my salary is 100000
=================================================
document.title
>'google'
=====================================
document.title = 'universal'
'universal'
====================================


		ONE COMPILER    console-obejects; log-logand display 
============================================
var name = 'arun'
console.log(name)
----------------------
O/p

arun
=================================
var name = 'arun'
var add = 5+5 or add = 5+5

console.log(name)
console.log(add)
--------------------------
O/p
arun
10
============================================
//comment line in javascirpt
============================================
var name = 'arun'
var add = 5+5 
welcome = "hi arun,welcome to my website"

console.log(name)
console.log(add)
---------------------------------------
O/P

hi arun,welcome to my website
10
=================================================
var name = 'arun'
var add = 5+5 
welcome = "hi arun,welcome to my website"

console.log(name)
console.log(name)

function WELCOME(){
console.log("hi arun, welcome to my website")
}

WELCOME()
-------------------------
O/P

hi arun,welcome to my website
10
hi arun, welcome to my website
=================================================
var name = 'arun'
var add = 5+5

function Welcome(name){
console.log("hi "+name+" , welcome to my website")
}

Welcome("arun")
-----------------------------------------------
O/P

hi arun, welcome to my website
=====================================================
function Welcome(name){
console.log("hi "+name+" , welcome to my website")
}

Welcome("arun")
Welcome("apple")
Welcome("orange")
----------------------------------
O/P

hi arun, welcome to my website
hi apple, welcome to my website
hi orange, welcome to my website
=================================================
function Welcome(name,message){
console.log("hi "+name+" , welcome to my website " +message)
}
var message = 'here you can learn web devolpment'

Welcome("arun",message)
Welcome('apple',message)
Welcome('orange',message)
---------------------------------
O/P

hi arun, welcome to my website here you can learn web devolpment
hi apple, welcome to my website here you can learn web devolpment
hi orange, welcome to my website here you can learn web devolpment
=====================================================================
function Welcome(name,message){
console.log("hi "+name+" , welcome to my website  +here you can learn web devolpment+")// ??
}

Welcome("arun",message)
---------------------------
O/P

hi arun, welcome to my website here you can learn web devolpment
========================================================================================

		OBJECTS {}
==================================================================================
console.log("universal source")

var personName ='arun'
var personAge ='29'
var personCity ='harur'

function welcome(){
 console.log('welcome to my site')
}
=================================================================

console.log("universal source")

var person = {
 name: 'arun',
 age: 29,
 city: "harur"
welcome(){
 console.log('welcome to my site')
} 
}

console.log('person.name')
------------------------------
 O/P

universal source
arun
===========================================================================
console.log("universal source")

var person = {
 name: 'arun',
 age: 29,
 city: "harur"
welcome(){
 console.log('welcome to my site')
} 
}

console.log('person.name')
----------------------------
O/P

universal source
29
==============================================================================================
console.log("universal source")

var person = {
 name: 'arun',
 age: 29,
 city: "harur"
welcome(){
 console.log('welcome to my site')
} 
}

console.log(person.welcome())
----------------------------------
O/P

universal source
welcome to my site
===========================================================================================
console.log("universal source")

var person = {
 name: 'arun',
 age: 29,
 city: "harur",
 food: {
fav:"briyani",
allery:"nuts"
},
welcome(){
 console.log('welcome to my site')
} 
}

console.log(person.food)
-----------------------------------------
O/P

universal source
{ fav:"briyani", allery:"nuts" }
================================================================================
console.log("universal source")

var person = {
 name: 'arun',
 age: 29,
 city: "harur",
 food: {
fav:"briyani",
allery:"nuts"
},
welcome(){
 console.log('welcome to my site')
} 
}

console.log(person.food.fav)
=======================================================================
O/P

universal source
briyani
=====================================================================
console.log("universal source")

var person = {
 name: 'arun',
 age: 29,
 city: "harur",
 food: {
fav:"briyani",
allery:"nuts"
},
welcome(){
 console.log('welcome to my site')
} 
}

console.log(person)
----------------------------------------------
O/P

universal source
{
 name: 'arun',
 age: 21,
 city: 'chennai'
 food: { fav: 'briyani', allery: 'nuts'},
 welcome: [function: welcome]
}
==============================================================
user defined objects
built in objects -default (e.g; document etc.,)
==================================================================

			ARRAYS
-------------------------------------------------------------------
console.log("universal source")

var bikecolour = ['blue', 'orange', 'yellow', 'black']
var colour = 'red'

console.log(colour)
-------------------------------------
O/P

universal source
red
==============================================================
console.log("universal source")

var bikecolour = ['blue', 'orange', 'yellow', 'black']
var colour = 'red'

console.log(bikecolour)
----------------------------------------
O/P

universal source 
['blue', 'orange', 'yellow', 'black']
===========================================================================
console.log("universal source")

var bikecolour = ['blue', 'orange', 'yellow', 'black']
var colour = 'red'

console.log(bikecolour[0])
----------------------------------------
O/P

universal source
blue
========================================================================
console.log("universal source")

var bikecolour = ['blue', 'orange', 'yellow', 'black']
var colour = 'red'

console.log(bikecolour[3])
----------------------------------------
O/P

universal source
black
======================================================================
console.log("universal source")

var bikecolour = ['blue', 'orange', 'yellow', 'black']
var bikemodel = [243,155,459]
var bike = [
{color:'blue', model:243},
{color:'red', model:155}
]

var colour = 'red'
console.log(bike)
-----------------------------------------------
O/P

universal source
[{color:'blue', model:243},{color:'red', model:155}]
============================================================================
console.log("universal source")

var bikecolour = ['blue', 'orange', 'yellow', 'black']
var bikemodel = [243,155,459]
var bike = [
{color:'blue', model:243},
{color:'red', model:155}
]

var colour = 'red'
console.log(bike[0])
-----------------------------------------------
O/P

universal source
{color:'blue', model:243}
==================================================================
console.log("universal source")

var bikecolour = ['blue', 'orange', 'yellow', 'black']
var bikemodel = [243,155,459]
var bike = [
{color:'blue', model:243},
{color:'red', model:155}
]

var colour = 'red'
console.log(bike[0].model)
-----------------------------------------------
O/P

universal source
243  
==================================================================================

.dot used to .>access in built operator
===============================================================
console.log("universal source")

var bikecolour = ['blue', 'orange', 'yellow', 'black']
var bikemodel = [243,155,459]
var bike = [
{color:'blue', model:243},
{color:'red', model:155}
]

bikecolour.push('brown')

var colour = 'red'
console.log(bikecolour)
-----------------------------------------------
O/P

universal source
['blue', 'orange', 'yellow', 'black','brown']
====================================================================
console.log("universal source")

var bikecolour = ['blue', 'orange', 'yellow', 'black']
var bikemodel = [243,155,459]
var bike = [
{color:'blue', model:243},
{color:'red', model:155}
]

console.log(bikecolour)

bikecolour.push('brown')

var colour = 'red'
console.log(bikecolour)
-----------------------------------------------
O/P

universal source
['blue', 'orange', 'yellow', 'black']
['blue', 'orange', 'yellow', 'black','brown']
=====================================================================================
console.log("universal source")

var bikecolour = ['blue', 'orange', 'yellow', 'black']
var bikemodel = [243, 155, 459, 954]
var bike = [
{color:'blue', model:243},
{color:'red', model:155}
]

console.log(bikemodel)

bikecolour.push('brown')
bikemodel.sort()

var colour = 'red'

console.log(bikemodel)
-----------------------------------------------
O/P

universal source
[243, 155, 459, 954]
[155, 243, 459, 954]
================================================================================
console.log("universal source")

var bikecolour = ['blue', 'orange', 'yellow', 'black']
var bikemodel = [243, 155, 459, 954]
var bike = [
{color:'blue', model:243},
{color:'red', model:155}
]

console.log(bikecolour)

bikecolour.push('brown')
bikecolour.sort()

var colour = 'red'

console.log(bikecolour)
-----------------------------------------------
O/P

universal source
['blue', 'orange', 'yellow', 'black']
['black','blue', 'brown', 'orange', 'yellow']
===================================================================================
console.log("universal source")

var bikecolour = ['blue', 'orange', 'yellow', 'black']
var bikemodel = [243, 155, 459, 954]
var bike = [
{color:'blue', model:243},
{color:'red', model:155}
]

console.log(bikecolour)

bikecolour.push('brown')
bikecolour.reverse()

var colour = 'red'

console.log(bikecolour)
-----------------------------------------------
O/P

universal source
['blue', 'orange', 'yellow', 'black']
['brown', 'black', 'yellow',' 'orange',  'blue'] 
========================================================================================

			CONDITIONS
=====================================================================================
console.log("universal source")

var cost = 200
if(cost > 250){
  console.log("yes you can buy")
}
else{
  console.log("sorry, minimum cost is 250")
}
---------------------------------------------------------------
O/P

universal source
sorry, minimum cost is 250
====================================================================================
console.log("universal source")

var cost = 500
if(cost > 250){
  console.log("yes you can buy")
}
else{
  console.log("sorry, minimum cost is 250")
}
---------------------------------------------------------------
O/P

universal source
yes you can buy
=========================================================================================
console.log("universal source")

var personAge = 21

if(personAge >=18){
  console.log("yes you can register")
}
else{
  console.log("sorry, minimum age is 18")
}
---------------------------------------------------------------
O/P

universal source
yes you can register
=========================================================================================
console.log("universal source")

var personAge = 16

if(personAge >=18){
  console.log("yes you can register")
}
else{
  console.log("sorry, minimum age is 18")
}
---------------------------------------------------------------
O/P

universal source
sorry, minimum age is 18
======================================================================================================
console.log("universal source")

var personAge = 26

if(personAge >=18){
  console.log("yes you can register")
}
else{
  console.log("sorry, minimum age is 18")
}

var age = personAge >= 18 ? 'register' : "can't register"
---------------------------------------------------------------
O/P

universal source
yes you can register
======================================================================================
console.log("universal source")

var personAge = 26

if(personAge >=18){
  console.log("yes you can register")
}
else{
  console.log("sorry, minimum age is 18")
}

var age = personAge >= 18 ? console.log('register') : console.log("can't register")
---------------------------------------------------------------
O/P

universal source
yes you can register
register
=============================================================================================
console.log("universal source")

var personAge = 26

if(personAge >=18){
  console.log("yes you can register")
}
else{
  console.log("sorry, minimum age is 18")
}
---------------------------------------------------two methods any one use 1st is conitional; 2nd is ternary method
var age = personAge >= 18 ? 
console.log('yes you can register') : 
console.log("sorry, minimum age is 18")
---------------------------------------------------------------
O/P

universal source
yes you can register
yes you can register
======================================================================================
console.log("universal source")

var personAge = 15

if(personAge >=18){
  console.log("yes you can register")
}
else{
  console.log("sorry, minimum age is 18")
}
------------------------------------------------------two methods any one use
var age = personAge >= 18 ? 
console.log('yes you can register') : 
console.log("sorry, minimum age is 18")
---------------------------------------------------------------
O/P

universal source
sorry, minimum age is 18
sorry, minimum age is 18
======================================================================================================

				LOOPS
---------------------------------------------------------------------------
console.log("hi print this 3 times")
console.log("hi print this 3 times")
console.log("hi print this 3 times")
----------------------------------------------------------
O/P

hi print this 3 times
hi print this 3 times
hi print this 3 times
========================================================
count =0;   //start
while(count <5){   // end

console.log("hi print this three times") //action perform
console.log(count++)
}
----------------------------------------------------
O/P

0
hi print this three times
1
hi print this three times
2
hi print this three times
3
hi print this three times
4
hi print this three times
================================================================================================
RETURN
---------------------------------------------------------------------------------------
console.log("universal source")

function add(){
  return(2+3)
}
console.log(add())
------------------------------------------
O/P

universal source
5
========================================================================================
console.log("universal source")

function add(){
  return(2+3)
}

add1 = () => {
  return(2+2)              ///new versions
}
console.log(add())
console.log(add1())
------------------------------------------
O/P

universal source
5
4
========================================================
console.log("universal source")

function add(){
  return(2+3)
}

add1 = () => (2+4)      //new versions

console.log(add())
console.log(add1()
-----------------------------------------------
O/P

universal source
5
4
========================================================
console.log("universal source")

function add(){
  return(2+3)
}

add1 = () => {
  return(2+2)              ///new versions
}

add1 = () => (2+4)

console.log(add())
console.log(add1())
console.log(add2())
------------------------------------------
O/P

universal source
5
4
6
==============================================================

console.log("universal source")
number = 10;

function add(number){
  return(number+3)
}

add1 = (number) => {
  return(number+2)              
}

add2 = (number) => (+5)         ///new versions

console.log(add(number)))
console.log(add1(number)))
console.log(add2(number)))
------------------------------------------
O/P

universal source
13
12
15
=================================================================






































 









