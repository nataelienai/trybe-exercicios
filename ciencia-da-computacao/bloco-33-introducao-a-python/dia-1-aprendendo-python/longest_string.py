def find_longest_name(names):
    """find the longest name of a list of names"""
    longest_name = ""
    for name in names:
        if len(name) > len(longest_name):
            longest_name = name
    return longest_name


names = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]
print(find_longest_name(names))
