#!/bin/bash
# 1
sudo apt-get install cmatrix
cmatrix

# 2
sudo apt-get install fortune
fortune > fortune.txt

# 3
wc -w fortune.txt

# 4
sudo apt-get install sl
sl
sl -F

# 5
sudo apt-get install cowsay
cat fortune.txt | cowsay

# 6
factor 42

# 7
rev fortune.txt

# 8
telnet towel.blinkenlights.nl
