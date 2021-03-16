"""
digitalCraftsStudent = {
    "name": "James Walden",
    "city": "Atlanta",
    "computer": ["Windows"],
}
print(digitalCraftsStudent["computer"][0])
"""
# add a platform, PC, add your skill level ("noob", "not", "noob", "pwner")
gamer = {
    "platform": "PC",
    "gamingHours": [{"weekday": "9-5"}, {"weekends": "anytime"}],
    "skill": "pwner"
}
print(gamer["gamingHours"][0]["weekday"])

# 1. print out a list of engine choices (the whole list) ++
# 2. print out the horsepower values only (all of them) ++
# 3. check to see if the key value "trim" exist on the car dictionary ++
# 4. add a new key to the car dictionary called "colors" which will be a list of all possible colors (use 4 color strings) ++
# 5. find an image and put the url into https://bitly.com/, and paste shortened url into that "image" value ++

car = {
    "model": "",
    "image": "https://bit.ly/3ton5i8",
    "year": "",
    "engineChoices": [
        {
            "v4": {
                "horsepower": 230
            }
        },
        {
            "v6": {
                "horsepower": 300
            }
        },
        {
            "v8": {
                "horsepower": 400
            }
        },
        {
            "v12": {
                "horsepower": 900
            }
        }
    ],
}

# printed out engine choices
print(car["engineChoices"])
# print out engine horsepowers
for hpValue in car["engineChoices"]:
    for key.value in hpValue.items():
        print(value["horsepower"])
print(car["engineChoices"][0]["v4"])
print(car["engineChoices"][1]["v6"])
print(car["engineChoices"][2]["v8"])
print(car["engineChoices"][3]["v12"])
# check to see if key "trim" exists
print("trim" in car.values())
#add a new key to dictionary called "colors", use 4 color strings
car.update({"colors": ["red", "blue", "silver", "purple"]})
print(car)