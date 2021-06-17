# Create a class which is called with an integer number_range
#That integer sets the ceiling of a range between 1 and number_range
# Using that number range call random.randrang(1, number_range +1)
# this generates the "answer" to the guessing game

import random

class GuessingGame():
    solved = False
    def __init__(self, number_range):
        self.answer = random.randrange(1, number_range + 1)
        self.number_range = number_range

    def __str__(self):
        return f"I'm thinking of a number between 1 and {self.number_range}"
    
    def guess(self, user_guess):
        if user_guess > self.answer:
            return "Too high"
        elif user_guess < self.answer:
            return "Too low"
        elif user_guess == self.answer:
            self.solved = True
            return "Correct"

game = GuessingGame(random.randint(1,100))
last_guess = None
last_result = None

print(game)

while game.solved == False:
    if last_guess != None:
        print(f"Oops, your last guess ({last_guess}) was {last_result}.")
        print("")
    
    last_guess = int(input("Enter your guess: "))
    last_result = game.guess(last_guess)

print(f"{last_guess} was correct! Good job!")
