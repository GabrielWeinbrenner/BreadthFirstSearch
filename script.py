data = open("data.txt", "r")
new_text = ""
for line in data.readlines():
    new_text = new_text + (line + ",")

new_data = open("newdata.txt", "w")

new_data.write('{"movies:"[' + new_text + ']}')