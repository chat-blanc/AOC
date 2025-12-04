# import helpers
import numpy as np

#helpers.npNicePrint(arr)

data = """11-22,95-115,998-1012,1188511880-1188511890,222220-222224,
1698522-1698528,446443-446449,38593856-38593862,565653-565659,
824824821-824824827,2121212118-2121212124
"""
with open("day2.txt", 'r') as f:
   data = f.read()
    
#changeDict = {"forward": np.array([1,0]), "down": np.array([0,1]), "up": np.array([0,-1])}
#data = [changeDict[x.split(" ")[0]] * int(x.split(" ")[1]) for x in data.split("\n") if x]
#data = [x.split(' ') for x in data.split('\n') if x]
#np.prod(sum(data))    
data = [[y.strip() for y in x.split("-")] for x in data.split(',') if not x == ""]
print(data)


ans = 0
for x,y in data:
    for z in range(int(x),int(y)+1):
        z = str(z)
        for j in range(1, len(z)//2+1):
            if not len(z) % j: 
                if len(set([z[i:i+j] for i in range(0, len(z), j)])) == 1:
                    ans += int(z)
                    break

ans