###Thought Process

####String Replacer

My initial thought on how to solve the problem was to first parse the string then do a replacement on matching the placeholder.

I intended to use regex to match the placeholder in the string then do a substitution, but then I quickly realized that it would be simpler to get the keys in the given option then construct the placeholder from the key (as the placeholder takes its form from the keys provided in the options).

So I loop through the options, get the keys, then get the associated value, then I construct the placeholder from the key gotten, do a string replace, construct the new string for subsequent processing.

What I tried to avoid was to limit the loop to one, for performance sake, and the choice of for loop iteration chosen, (decrement rather than increment the counter) is meant to increase performance in that there is no need to do comparison.