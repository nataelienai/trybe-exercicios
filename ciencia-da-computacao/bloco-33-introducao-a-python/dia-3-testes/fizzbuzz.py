def fizzbuzz(n):
    fizzbuzz_list = []
    for num in range(1, n + 1):
        value = ""
        if num % 3 == 0:
            value += "Fizz"
        if num % 5 == 0:
            value += "Buzz"
        if value != "":
            fizzbuzz_list.append(value)
        else:
            fizzbuzz_list.append(num)
    return fizzbuzz_list
