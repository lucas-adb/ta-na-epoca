import pandas as pd

df = pd.read_csv("database/ta_na_epoca_formata_nomes.csv")

with open("updateFormatedNames.sql", "w") as f:
    for index, row in df.iterrows():
        query = (
          "UPDATE \"Food\" SET name_formatted = '" + row['name_formatted'] + "' "
          "WHERE name = '" + row['name'] + "';\n"
        )
        f.write(query)
