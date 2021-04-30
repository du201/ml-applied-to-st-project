import numpy as np
import pandas as pd
  
  
data = np.array([['1', '2'], ['3', '4']])
  
dataFrame = pd.DataFrame(data, columns = ['col1', 'col2'], index = ['123', '234'])
print(dataFrame)
json = dataFrame.to_json(orient ='index', path_or_buf="test.json")
print(json)