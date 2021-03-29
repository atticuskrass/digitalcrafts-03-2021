# create a chessboard that is 8x8
# if the square is white, print a ” ”
# if the square is colored “#"
# if the row is now >8, print a new line

white_square = " "
black_square = "#"

def chessBoard():
    for number in range(0, 8):
        if number == number % 2:
            print("#")


chessBoard()