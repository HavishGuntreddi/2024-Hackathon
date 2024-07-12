import pandas as pd
import numpy as np
import plotly.express as px



#2016 cleaned
data_2016 = pd.read_csv('2016athletes.csv')
data_2016 = data_2016.drop(['id', 'dob', 'height', 'weight', 'sex', 'sport', 'gold', 'silver', 'bronze'], axis = 1)
print(data_2016)

for data_2016['name'] in data_2016:
    data_2016['name'].replace('1')
print(data_2016)

bar2016 = px.pie(data_2016, values = 'name', names='nationality')
bar2016.show()
