# # Two characters, a hero and goblin
# your goal is to et them fight and whoever wins, will be printed out in a victory message
class Hero:
    def __init__(self, name, hp):
        self.name = name
        self.hp = hp
        self.characterClass = "Hero"
    def takeDamage(self):
        self.hp -= 5
class Goblin:
    def __init__(self, name, hp):
        self.name = name
        self.hp = hp
        self.characterClass = "Goblin"
    def takeDamage(self):
        self.hp -= 5
class Knight:
    def __init__(self, name, hp):
        self.name = name
        self.hp = hp
        self.characterClass = "Knight"
    def takeDamage(self):
        self.hp -= 5
def characterAttack(char1, char2):
    print(f"{char1.name} attacks {char2.name}")
    char2.takeDamage()
    print(f"{char2.name} takes 5 damage.")
    print(f"{char2.name} has {char2.hp} health points left.")
def victoryMessage(char1, char2):
    print(f"{char1.name} has slain {char2.name}.")
def characterCreation():
    character = ""
    charName = input("What is your name?")
    charClass = input("What is your class? Choose exactly (k) Knight, (h) Hero or (g) Goblin.")
    if charClass == "k":
        character = Knight(charName, 10)
    elif charClass == "h":
        character = Hero(charName, 10)
    elif charClass == "g":
        character = Goblin(charName, 10)
    else:
        print("Follow the rules.")
    return character
phil = Hero("Phil", 10)
gooba = Goblin("Gooba", 10)
# I ask the user to type in their name
# I give them health values
# I print out their health values
# I set a global variable to be the while loop condition
character = characterCreation()
print(character.name, character.hp, character.characterClass)
# while character.hp > 0:
#     characterAttack(phil, gooba)
#     if gooba.hp == 0:
#         victoryMessage(phil, gooba)
# print(phil.name)
# print(gooba.name)
# phil punch gooba
# you take 5 damage to your health