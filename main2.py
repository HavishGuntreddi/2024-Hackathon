#imports
import pandas as pd
import numpy as np
import plotly.express as px

#deletes columns not needed for analysis (2016)
data_2016 = pd.read_csv('2016athletes.csv')
data_2016_clean = data_2016.drop(['id', 'dob', 'height', 'weight'], axis = 1)
print(data_2016_clean)

#prints and creates pie chart for 2016 olympics
piec2016 = px.bar(data_2016_clean, x='nationality', y=['gold', 'silver', 'bronze'], title= '2016 Olympic Medals')
piec2016.show()

#deletes columns not needed for analysis (2021)
data_2021 = pd.read_csv('2021medals.csv')
data_2021_clean = data_2021.drop(['Rank','Rank by Total', 'Total'], axis=1)
print(data_2021_clean)

#prints and creates bar graph for 2021 olympics
piec2021 = px.bar(data_2021_clean, x='Team/NOC', y=['Gold', 'Silver', 'Bronze'])
piec2021.show()
