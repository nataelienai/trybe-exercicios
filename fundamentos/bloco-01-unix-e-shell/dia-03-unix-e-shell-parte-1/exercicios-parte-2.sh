#!/bin/bash

# 1
curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"

# 2
cat countries.txt

# 3
less countries.txt

# 4
# search for Zambia with /Zambia
less countries.txt

# 5
grep 'Brazil' countries.txt

# 6
grep 'brazil' countries.txt

# Create a file named phrases.txt and write some phrases in it.
touch phrases.txt
gedit phrases.txt

# 7
grep -v 'fox' phrases.txt

# 8
wc -w phrases.txt

# 9
wc -l phrases.txt

# 10
touch empty.tbt empty.pdf

# 11
ls -a

# 12
ls *.txt

# 13
ls *.tbt *.txt

# 14
man ls
