toDoList = [] 
# store dictionaries in a list 
# make dictionary(ies) +
# delete something on a list
# add something to a list +
# view everything on the list 
# have a way to quit 
# can't stop won't stop until Q :check
# MAKE THEM IN FUNCTIONS check in progress 

def introduction():
    displayMessage = """\n

Welcome to my To Do Application!

Press 1 to Add Task
Press 2 to Delete Task
Press 3 to View Task List
Press q to Quit Program

\n"""
    return print(displayMessage)

def addFunction():
    toDoDictionary = {}
    toDoList.append(toDoDictionary)
    addTask = input("Enter a task to add: ")
    addPriority = input("What priority is this task: ")
    toDoDictionary["title"] = addTask
    toDoDictionary["priority"] = addPriority
    return print("I added * %s * to your list of things to do" % taskToAdd)

def viewFunction():
    count = 1 
    print("Incompleted Tasks")
    print("==========================")
    for task in toDoList:
        print(" %d. %s = %s " % (count, task["title"], task["priority"]))
        count += 1
    print("==========================")
    
def delFunction():
    viewfunction()
    taskToDelete = int(input(
        "What task would you like to delete (choose the index)\n"))
    # toDoList.pop(taskToDelete - 1)
    taskToDeleteIndex = taskToDelete - 1
    taskThatIsGettingDeleted = toDoList[taskToDeleteIndex]
    del toDoList[taskToDeleteIndex]
    return print("I deleted %s off your list" % taskThatIsGettingDeleted)

    def determineTask(userChoice):
    whatTheyChose = ""

    if(userChoice == "1"):
        whatTheyChose = addfunction()
    elif(userChoice == "2"):
        whatTheyChose = delfunction()
    elif(userChoice == "3"):
        whatTheyChose = viewfunction()
    # elif(userChoice == "q"):

    else:
        print("Bad key ")

    whatTheyChose = choice
    return whatTheyChose


choice = ""
while(choice != "q"):
    welcomeMessage()
    userChoices = input("What would you like to do?")
    outcome = determineTask(userChoices)
    choice = outcome