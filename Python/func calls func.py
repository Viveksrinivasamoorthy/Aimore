def prepare_food():
    print("Preparing food...")
    
    print("Food is ready!")
    
def waiter(job):
    print(f"Waiter is {job} the food.")
    
    print("Waiter has completed the job.")
    job() # give me some job to execute, and I will execute it. The waiter doesn't know how to cook. He just receives a job and executes/gives that job to someone.
    
waiter(prepare_food)   

# chef -> prepare food -> briyani
# customer -> waiter -> chef
# The waiter doesn't know how to cook. He just receives a job and executes/gives that job to someone.


