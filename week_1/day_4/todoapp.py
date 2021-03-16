# store dictionaries in a list +
# make dictionary(ies) +
# delete something on a list +
# add something to a list +
# view everything on the list +
# have a way to quit +
# can't stop won't stop until Q :check + 
# MAKE THEM IN FUNCTIONS check in progress +

toDoList = []
def welcomeMessage():
    message = """\n
()()()()()()()()()(()())

Welcome to my To Do App!

Press 1 to Add Task
Press 2 to Delete Task
Press 3 to View All Tasks
Press q to Quit Program

()()()()()()()()()()()()
\n"""
    return print(message)
# I understand, question: how does the toDoDictionary know to put together the "title":"priority" key:value pair?
def addFunction():
    toDoDictionary = {}
    addTask = input("Enter task: ")
    priorityOfTask = input("Assign priority: ")
    toDoDictionary["title"] = addTask   
    toDoDictionary["priority"] = priorityOfTask
    toDoList.append(toDoDictionary)
    return print("I added * %s * to your list of things to do" % addTask)
# I understand
def viewFunction():
    count = 1
    print("Your tasks")
    for task in toDoList:
        print("%d. %s = %s" % (count, task["title"], task["priority"]))
        count += 1
    return print("Your tasks")
# I understand
def delFunction():
    print("Here are your tasks")
    viewFunction()
    delTask = int(input(
        "What task would you like to delete (choose the index)\n"))
    taskToDeleteIndex = delTask - 1
    taskThatIsGettingDeleted = toDoList[taskToDeleteIndex]
    del toDoList[taskToDeleteIndex]
    return print("I deleted %s off your list" % taskThatIsGettingDeleted)
# I understand
def determineTask(userChoice):
    whatTheyChose = ""
    if(userChoice == "1"):
        whatTheyChose = addFunction()
    elif(userChoice == "2"):
        whatTheyChose = delFunction()
    elif(userChoice == "3"):
        whatTheyChose = viewFunction()
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