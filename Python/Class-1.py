# variable is storing value and helps to reuse inside the program and we can use methods and function for every data type
# str - string - str()
# int - numeric numbers - int() 
# float - decimal value - float()
# bool - true or false values - bool() - separate approach not like type cast
name = 'vijay'
print(name)
print(type(name))
age = 25
print(age)
print(type(age))
CGPA = 7.9
print(CGPA)
print(type(CGPA))
IsStudent = True
print(IsStudent)
print(type(IsStudent))

print(name,age,CGPA)

firstname = "vivek"
lastname = "srini"
fullname = firstname,lastname
print(fullname) # vivek srini
fullname = "s."+firstname
fullname = firstname+" "+lastname # string concat
print(fullname)

fullname = firstname+","+lastname+" - "+str(age) # string concat
print(fullname)
print(type(fullname))

#string concat rule
#1. if we're joining multiple value and each value should be string data type
#2. if we want to join different type, we need t do typecast

#typecast: converting one data type to another
# 1. Implicit type cast
# 2. explicit type cast


# print("my name is:",name,"\nmy age age:",age)
# print("my name is "+name+" I'm "+age+" years old")


name="25"
print(name)
print(type(name))
age = 25.0
print(age)
print(type(age))

print(name,age)

# print("Hello World")
age  = "25"
print(type(age))
age = int(age)
print(type(age))
CGPA = 7
print(type(CGPA))
CGPA = float(CGPA)
print(type(CGPA))
print(CGPA)
print(age)
var2 = str(age)+" "+str(CGPA)
print(var2)
print(type(var2))

var2 = age+CGPA
print(var2)
print(type(var2))


# type cast
name="vijay"
print(name)
print(type(name))
age = 25.0
print(age)
print(type(age))