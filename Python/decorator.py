def waiter(job):

    def serve():
        print("Waiter: Order received")

        job()

        print("Waiter: Order completed")

    return serve

@waiter
def prepare_food():
    print("Chef: Food is prepared")
@waiter
def prepare_drink():
    print("Juicer: Drink is prepared")
@waiter
def prepare_dessert():
    print("Chef: Dessert is prepared")    

print("-----------------------------")    
prepare_food()
print("-----------------------------")    
prepare_drink()
print("-----------------------------")    
prepare_dessert()
print("-----------------------------")    

#when python sees @waiter 
# then waiter(prepare_food) executes
#when python sees prepare_food()
# then serve() executes
