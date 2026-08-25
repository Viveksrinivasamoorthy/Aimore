def calculation_total(price,tax=0,discount=0):
    return price + tax - discount

result = calculation_total(1000,100,50)

print(result)


def execute_operation(operation,value):
    return operation(value)

def square(x):
    return x*x

print(execute_operation(square,5))


def apply_discount(price):
    return price * 0.9

price = [100,250,50]

discounted_price = map(apply_discount,price)
print(list(discounted_price))


# lamda

def add(x,y):
    return x+y

print(add(5,100))

add_lambda = lambda x, y: x + y
print(add_lambda(5, 10))  # Output: 15

print("-----------------------------")
numb = [1,2,3,4,5]
even = map(lambda x: x*2, numb)
print(list(even))

print("-----------------------------")
numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

x = filter(lambda x: x%2 ==0, numbers)
print(list(x))


numbers = [5,3,7,1,3]
print(sorted(numbers,reverse=False))


employees = [
    {"name": "John", "salary": 50000},
    {"name": "David", "salary": 30000},
    {"name": "Mike", "salary": 70000}
]



result = sorted(employees,key = lambda x: x["salary"])
print(result)