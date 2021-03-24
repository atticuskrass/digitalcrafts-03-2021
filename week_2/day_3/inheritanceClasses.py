
# NOTES

# String interpalation 2 ways
# print("This currency is %s, it is %s, from %s" %
#       (yen.name, yen.price, yen.nation))

# Dictionary
# dictionaryName[""]

# List
# listName[0]

# This is for a Class instance
# classNameThatWeStoreTheInstanceIn.whateverValue

##########

class Currency:
    def __init__(self, name, nation, price, quantity):
        self.name = name
        self.nation = nation
        self.price = price
        self.quantity = quantity

    def printCurrency(self):
        print(
            f"NATION: {self.nation}\nNAME: {self.name}\nPRICE: {self.price}\nQUANTITY: {self.quantity}\n\n")

    def addQuantity(self, amount):
        self.quantity += amount


yen = Currency("Yen", "Japan", 20, 10)
yen.printCurrency()

usDollar = Currency("Dollar", "US", 1, 10)
usDollar.printCurrency()

swedishKrona = Currency("Krona", "Swedish", 1, 10)
swedishKrona.printCurrency()

print(swedishKrona.quantity)
swedishKrona.addQuantity(5)
print(swedishKrona.quantity)


class CryptoCurrency(Currency):
    # This is if you want to see how to inherit from the parent class, but redefine for your subclass
    # def __init__(self, name, nation, price, quantity, volatility):
    #     super().__init__(name, nation, price, quantity)

    def go_to_de_moooon(self):
        self.price = self.price * 1000
        print(self.price)

    def printCurrency(self):
        print(
            f"NATION: 🐶 \n NAME: {self.name}\nPRICE: {self.price + 2}\nQUANTITY: {self.quantity}\n\n\n")
        print("No you print")


doge = CryptoCurrency("DogeCoin", "Doge Nation",  5, 1000000, )
doge.printCurrency()
doge.go_to_de_moooon()
doge.printCurrency()


class ScamCurrency(CryptoCurrency):
    def sendYourPersonalDataThroughALeak(self):
        print("You got scammed")


xvg = ScamCurrency("XVG", "SuperDuperSecure Money", 0, 10, )

xvg.printCurrency()
xvg.go_to_de_moooon()
xvg.sendYourPersonalDataThroughALeak()