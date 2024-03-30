import pandas as pd

df = pd.read_csv("database/tanaepoca-db.csv")

with open("food.sql", "w") as f_food, open("foods_months.sql", "w") as f_months:
    for index, row in df.iterrows():
        f_food.write(
            f"INSERT INTO \"Food\" (name, color, type) VALUES ('{row['name']}', '{row['color']}', '{row['type']}') ON CONFLICT (name) DO NOTHING;\n"
        )

        for month in [
            "JANUARY",
            "FEBRUARY",
            "MARCH",
            "APRIL",
            "MAY",
            "JUNE",
            "JULY",
            "AUGUST",
            "SEPTEMBER",
            "OCTOBER",
            "NOVEMBER",
            "DECEMBER",
        ]:
            if row[month] == "high":
                f_months.write(
                    f'INSERT INTO "FoodsMonths"("foodId", "monthId") VALUES ({index+1}, {list(df.columns).index(month) - 2}) ON CONFLICT ("foodId", "monthId") DO NOTHING;\n'
                )
