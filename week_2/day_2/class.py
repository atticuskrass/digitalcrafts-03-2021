# KEEPING YOURSELF ORGANIZED
# define global functions and variables first at the top of your program
# define Classes next and any unique methods inside of them
# define your while loop if you need the user to keep doing tasks until a certain condition is met. Remember, your condition needs to be global, and needs to be re-assigned inside your while loop
class Spider:
    def __init__(self, name, strength, defense, hp):
        self.name = name
        self.strength = strength
        self.defense = defense
        self.hp = hp
    def feedSpider(self):
        print("Omm nom nom")
        self.strength += 5
        self.hp += 5
    def playWithSpider(self):
        print("He's getting angry!")
        self.defense += 5
    def howIsSpiderDoing(self):
        print("How are you doing spider?")
        print(self.name, self.strength, self.defense, self.hp)
    def smile(self):
        print(f"{self.name} smiled.")
class OmegaSpider:
    def __init__(self, name, strength, defense, hp, size):
        self.name = name
        self.strength = strength
        self.defense = defense
        self.hp = hp
        self.size = size
    def smile(self):
        print(f"{self.name} smiled.")
# Creating new instances of a spider/omega spider
# Dot notation refers to us using the . and referencing something that exists on the class ( aka the
# thing on the right we attached self to)
peter = Spider("Peter", 20, 10, 100)
carnage = OmegaSpider("Carnage", 100, 100, 100, "big")
print(f"Peter's starting strength is {peter.strength}.")
peter.feedSpider()
peter.playWithSpider()
print(f"Peter's ending strength is {peter.strength}.")
peter.smile()
carnage.smile()
def welcomeMessage():
    message = int(input("""
    Please choose from the following:
    1. Feed spider
    2. Play with spider (he gets angry)
    3. Check on spider
    4. Stare
    5. Quit
    """))
    return message
# choice = ""
# while choice != 5:
#     choice = welcomeMessage()
#     if choice == 1:
#         # feedSpider()
#         pass
#     elif choice == 2:
#         # playWithSpider()
#         pass
#     elif choice == 3:
#         # howIsSpiderDoing()
#         pass
#     elif choice == 4:
#         # print("Staring......")
#         pass
#     else:
#         pass