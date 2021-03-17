# KEEPING YOURSELF ORGANIZED
# 1. DEFINE GLOBAL FUNCTIONS AND VARIABLES FIRST AT THE TOP OF YOUR PROGRAM
# 2. DEFINE CLASSES NEXT AND ANY UNIQUE METHODS INSIDE 0F THEM
# 3. THEN DEFINE YOUR WHILE LOOP IF YOU NEED THE USER TO KEEP DOING TASK UNTIL A CERTAIN CONDITION IS MET 
# (REMEMBER, YOUR CONDITION NEEDS TO BE GLOBAL, AND NEEDS TO BE RE-ASSIGNED )

  
# KEEPING YOURSELF ORGANIZED
# define global functions and variables first at the top of your program
# define Classes next and any unique methods inside of them
# then define your while loop if you need the user to keep doing task until a certain condition is met (remember, your condtion needs to be global, and needs to be re-assigned inside your while loop)

class Spider:
    def __init__(self, name, strength, defense, hp):
        self.name = name
        self.strength = strength
        self.defense = defense
        self.hp = hp

    def feedSpider(self):
        print("Omm nomm nom nom")
        self.strength += 5
        self.hp += 5

    def playedWithSpider(self):
        print("He is getting angry >:(")
        self.defense += 5

    def smile(self):
        print(f"{self.name} smiled")

    # def howIsSpiderDoing(self):
    #     print("How you doing Spider?")
    #     print(petSpider)


def printMe():
    print("Me")


class OmegaSpider:
    def __init__(self, name, strength, defense, hp, size):
        self.name = name
        self.strength = strength
        self.defense = defense
        self.hp = hp
        self.size = size

    def smileSmileSMile(self):
        printMe()
        print(f"{self.name} smiled")


# Dot notation refers to us using the . and referencing something
# that exist on the class (aka, the thing on the right that we attached self to)
# EXAMPLES OF CREATING NEW INSTANCES OF A SPIDER
peter = Spider("Peter", 20, 10, 100)
print("peters starting strength ", peter.strength)
print("peters starting defense ", peter.defense)
peter.feedSpider()
peter.playedWithSpider()
peter.smile()
print("peters ending strength ", peter.strength)
print("peters ending defense ", peter.defense)

venom = Spider("Venom", 30, 20, 200)
venom.smile()

# EXAMPLES OF CREATING NEW INSTANCES OF A OMEGA SPIDER
carnage = OmegaSpider("Carnage", 100, 100, 100, "big")
carnage.smileSmileSMile()


# Using a global function inside of a method is totally valid
# venom = OmegaSpider("", "", "", "", "")
# venom.smileSmileSMile() this will print smile but also the global function printMe() as well

def welcomeMessage():

    message = int(input("""
    Please choose from the following:
    1. Feed Spider
    2. Play with Spider (he gets angry)
    3. Check on Spider
    4. Stare
    5. Quit
    """))

    return message


choice = ""
# while choice != 5:

#     if choice == 1:
#         # feedSpider()
#         pass
#     elif choice == 2:
#         # playedWithSpider()
#         pass
#     elif choice == 3:
#         # howIsSpiderDoing()
#         pass
#     elif choice == 4:
#         print("Staring......")
#     else:
#         pass
# how to stop the loop
# what about an if else? if elif