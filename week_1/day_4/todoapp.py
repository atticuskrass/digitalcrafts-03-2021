# Display the main menu
while True:
    print("""########################################

    James Waldens ToDo Application

    Select a number/letter for the action you wish to perform. 

    Press 1 to Add Task.
    Press 2 to Delete Task.
    Press 3 to View All Tasks.
    Press q to quit.

    ##############################################""")

    selection = input("Make your selection: ")

    # Determine which action to perform based on user selection
    if selection == "1":
        def addTask():
            return
    elif selection == "2":
        pass
    elif selection == "3":
        displayTasks()
    elif selection == "q":
        exit()

# Add tasks to the task list
    taskList = [{"Wash My Car": "High"}, {"Mow The Lawn": "Low"}, {"Make Jar-Jar Binks Doomer Meme": "High"}]
# Display All Tasks
def displayTasks():
    print("---Task List---")
    for index in taskList:
        print(i)
# Add task to task list
def addTask():
    task = input("Enter task to the Task List: ")
    taskList.append(task)
    print(task + " has been added to Task List.")
# Remove task from task list
def removeTask():
    task = input("Select task for removal: ")
    taskList.remove(task)
    print(task + "has been removed from Task List.")