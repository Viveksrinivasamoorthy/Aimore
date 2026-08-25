def prepare_food():
    print("Chef: Food is prepared")
    
def prepare_drink():
    print("Juicer: Drink is prepared")
    
def prepare_dessert():
    print("Chef: Dessert is prepared")    
    
    
def waiter(job):
    #def serve():
    print("Waiter: Order received")
    job() # give me some job to execute, and I will execute it. The waiter doesn't know how to cook. He just receives a job and executes/gives that job to someone.
    print("Waiter: Order completed")
        
        # return serve
      
print("-----------------------------")    
waiter(prepare_food)
print("-----------------------------")
waiter(prepare_drink)
print("-----------------------------")
waiter(prepare_dessert)
print("-----------------------------")
# But now let's say we want to make the waiter behavior attach directly to each function.
# That's where the decorator comes in.

  