import csv

# Specify the file name
write_file = "./src/musicdata/musicdata.js"
read_file = "./src/musicdata/musicdata.csv"

# Open the file in write mode and write the text
with open(write_file, 'w', errors='ignore') as w_file:
    with open(read_file, 'r', errors='ignore', encoding='cp1252') as r_file:
        csvreader = csv.reader(r_file)
        fields = []
        fields = next(csvreader) # Get field names from first row
        data = ["init"]

        w_file.write("export const MusicData = [\n")

        # Index "i" for ID number
        i = 1

        # Loop until "line" is empty
        while True:
            # Read an entire row
            data = next(csvreader)

            # Stop if end of file
            if data[0] == "END":
                w_file.write("]")
                break

            # ========================
            # === Write JSON entry ===
            # ========================
            
            # Start with ID
            w_file.write("  {\n")
            w_file.write("    \"id\": " + str(i) + ",\n")

            # Write every data
            for j in range(len(data)):
                # If at the key/tempo field, take into account if multiple values are given
                if fields[j] == "keysig" or fields[j] == "tempo":

                    # Split elements into a list
                    split = data[j].split(",")

                    w_file.write("    \"" + fields[j] + "\": [")

                    # Write every element into an array
                    for k in range(len(split)):

                        # If key (not a number like tempo), then write "
                        if not split[k].strip().isnumeric():
                            w_file.write("\"")

                        # Write element, strip whitespaces from the ends
                        w_file.write(split[k].strip())

                        if not split[k].strip().isnumeric():
                            w_file.write("\"")

                        # If not the end, write a comma. Otherwise, write closing bracket
                        if k != len(split)-1: w_file.write(", ")
                        else: w_file.write("],\n")

                # Handle boolean values
                elif fields[j] == "remix" or fields[j] == "collaboration" or fields[j] == "official" or fields[j] == "anison" or fields[j] == "yt_id":
                    w_file.write("    \"" + fields[j] + "\": " + data[j] + ",\n")

                else:
                    w_file.write("    \"" + fields[j] + "\": ")

                    # If not a number (eg. length), then write "
                    if not data[j].strip().isnumeric():
                        w_file.write("\"")

                    w_file.write(data[j])

                    if not data[j].strip().isnumeric():
                        w_file.write("\"")

                    w_file.write(",\n")



            w_file.write("  },\n")

            # Increment "i"
            i = i + 1
        


print("") 
print("================") 
print("WRITING COMPLETE")
print("================") 
print("") 
