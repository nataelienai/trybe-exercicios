#!/bin/bash
mkdir unix_tests

# 1
cd unix_tests

# 2
echo "+ adicione 'Internet', 'Unix' e 'Bash', um em cada linha +"
cat > skills2.txt

# 3
echo "+ adicione mais 5 skills +"
cat >> skills2.txt

# 4
wc -l skills2.txt

# 5
head -3 skills2.txt | sort > top_skills.txt

# 6
echo "+ acrescente algumas frases +"
cat > phrases2.txt

# 7
grep 'br' phrases2.txt | wc -l

# 8
grep -v 'br' phrases2.txt | wc -l

# 9
echo "+ adicione o nome de dois países +"
cat >> phrases2.txt

# 10
curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"
cat phrases2.txt countries.txt > bunch_of_things.txt

#11
sort bunch_of_things.txt > temp.txt
cat temp.txt > bunch_of_things.txt

