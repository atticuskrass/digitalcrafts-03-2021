firstNameOfUser = input("What is your first name?")
lengthOfFirstName = len(firstNameOfUser)
while(lengthOfFirstName < 1):
    firstNameOfUser = input("What is your first name?")
    lengthOfFirstName = len(firstNameOfUser)

lastNameOfUser = input("What is your last name?")
lengthOfLastName = len(lastNameOfUser)
while(lengthOfLastName < 1):
    lastNameOfUser = input("What is your last name?")
    lengthOfLastName = len(lastNameOfUser)

print("The user name is %s %s" % (firstNameOfUser, lastNameOfUser))

friendsFirstName = input("What is your friends first name?")
lengthOfFriendsFirstName = len(friendsFirstName)
while(lengthOfFriendsFirstName < 1):
    friendsFirstName = input("What is your friends first name?")
    lengthOfFriendsFirstName = len(friendsFirstName)

friendsLastName = input("What is your friends last name?")
lengthOfFriendsLastName = len(friendsLastName)
while(lengthOfFriendsLastName < 1):
    friendsLastName = input("What is your friends last name?")
    lengthOfFriendsLastName = len(friendsLastName)

print("The friends name is %s %s" % (friendsFirstName, friendsLastName))
print("%s %s is friends with %s %s" % (firstNameOfUser, lastNameOfUser, friendsFirstName, friendsLastName))



#print("The user name is %s %s" % (firstNameOfUser, lastNameOfUser))
#print("The user name is %s" % (lastNameOfUser))
#print("The friends name is %s %s" % (friendsFirstName, friendsLastName))
#print("The friends name is %s" % (friendsLastName))