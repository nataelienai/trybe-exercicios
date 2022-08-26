def has_divisor(number, divisor):
    if number == divisor:
        return False
    if number % divisor == 0:
        return True
    return has_divisor(number, divisor + 1)


def is_prime(number):
    return number >= 2 and not has_divisor(number, 2)


if __name__ == "__main__":
    print(is_prime(7))  # True
    print(is_prime(9))  # False
    print(is_prime(47))  # True
