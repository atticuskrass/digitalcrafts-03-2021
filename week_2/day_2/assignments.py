1# Create a User class, that has the  ability to print the users name
# the ability to print the users age
# Create a TempUser class, that has the ability to only print his name.
# Create a function that as you to give the user a name, and give the user an age, and will then create the user for you, 
# and print it to the screen. The user will have a choice to either be a temp user or a User
"""
class User:
  def __init__(self, name, age):
    self.name = name
    self.age = age
# stacy = User("Stacy", 29)
# print(stacy.name, stacy.age)
class tempUser:
  def __init__(self, name):
    self.name = name
# henry = tempUser("Henry")
# print(henry.name)
def info():
  begin = int(input("Hello if you are the user press(1) if your only a temporary user press(2) "))
  if begin == 1:
    nameUser = input("What is your name? ")
    ageUser = int(input("How old are you? "))
    h = User(nameUser, ageUser)
    print(f"Your user name is {h.name} and your age is {h.age}.")
  elif begin == 2:
    nameTemp = input("What is your name? ")
    z = tempUser(nameTemp)
    print(f"Your temp name is {z.name}.")
    return begin
info()
"""
# Create a building class
# buildilng class will have 
# height
# capacity
# sqft
# # commercial or residential
# commercial
# ask the user to create a building (new instance of the building class)
# they will enter in height
# capacity (people)
# sqft
# 5 instances of a building
# print out the specs of the buildilng everytime a building is made
# print statement needs to be a method

class Building:
    def __init__(self, height, capacity, sqft, buildtype):
        self.height = height
        self.capacity = capacity
        self.sqft = sqft
        self.buildtype = buildtype
        print(height, capacity, sqft, buildtype)

def askUser():
    counter = 1
    while counter < 6:
        begin = int(input("What would you like to build? 1. Commercial or 2. Residential "))
        if begin == 1:
            height = int(input("Enter the height. "))
            capacity = int(input("What is the capacity."))
            sqft = int(input("What is the sqft. "))
            buildtype = input("What build type. ")
            x = Building(height, capacity, sqft, buildtype)
            #print(f"Your building is {x.height}, {x.capacity}, {x.sqft}, {x.buildtype}")
            counter += 1
        elif begin == 2:
            height = int(input("Enter the height. "))
            capacity = int(input("What is the capacity."))
            sqft = int(input("What is the sqft. "))
            buildtype = input("What build type. ")
            y = Building(height, capacity, sqft, buildtype)
            #print(f"Your Residential Building is {y.height}, {y.capacity}, {y.sqft}, {y.buildtype}")
            counter += 1
            #return begin
askUser()


        

