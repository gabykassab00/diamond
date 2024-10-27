r = int(input(" i want you to please to enter the number of rows :"))
space = r - 1

for w in range(1, r + 1):
    for q in range(1, r - w + 1):
        print(" ", end="")
    for q in range(1, 2 * w):
        print("*", end="")
    print()

for q in range(r, 0, -1):
    for w in range(1, space - 2):
        print(" ", end="")
    space += 1
    for w in range(1, q + 1):
        print("*", end="")
    for w in range(1, q):
        print("*", end="")
    print()
