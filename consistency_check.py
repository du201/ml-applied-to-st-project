import pandas as pd

class_1 = pd.read_excel("classification_1.xlsx", index_col=0)
class_1 = class_1.drop([class_1.index[0]]) # delete the first row which is just category descriptions
class_1 = class_1.drop([class_1.columns[3], class_1.columns[4], class_1.columns[5]], axis=1) # drop useless columns
class_1 = class_1.drop([class_1.index[class_1.shape[0] - 1]]) # drop the last row which is calculation
print("class_1 is: \n")
print(class_1)

class_2 = pd.read_excel("classification_2.xlsx", index_col=0, skiprows=[0, 1, 2])
class_2 = class_2.drop(['serra', 'bolu', 'xin'], axis=1) # drop useless columns
old_column_names = class_2.columns
class_2.columns = ['testing general activity', 'Task Type', 'Testing level', 'Testing approach', 'Learning technique',
  'Training data property', 'automation degree', 'supervision', 'Time generalization', 'Elements learned']
class_2.index.name = "paper url"
print("class_2 is: \n")
print(class_2)

first_round_selection = pd.read_excel("final_selection.xlsx", index_col=1, usecols=[0, 1, 2, 3])
print("first_round_selection is: \n")
print(first_round_selection)

final_selection = first_round_selection.iloc[list(first_round_selection[first_round_selection.columns[1]] == 1), :]
print("final_selection is: \n")
print(final_selection)

# Below are the consistency test

final_selection_url_list = list(final_selection.index)
class_1_url_list = list(class_1.index)
class_2_url_list = list(class_2.index)

for url in final_selection_url_list:
  if final_selection_url_list.count(url) > 1:
    print(f"url {url} appears more than once in final_selection_url_list!")
for url in class_1_url_list:
  if class_1_url_list.count(url) > 1:
    print(f"url {url} appears more than once in class_1_url_list!")
for url in class_2_url_list:
  if class_2_url_list.count(url) > 1:
    print(f"url {url} appears more than once in class_2_url_list!")

final_selection_url_set = set(final_selection.index)
class_1_url_set = set(class_1.index)
class_2_url_set = set(class_2.index)
print(f"class_1 has {len(class_1_url_list)} papers")
print(f"class_2 has {len(class_2_url_list)} papers")
print(f"final_selection has {len(final_selection_url_list)} papers")
print(f"class_1 has {len(class_1_url_set)} unique papers")
print(f"class_2 has {len(class_2_url_set)} unique papers")
print(f"final_selection has {len(final_selection_url_set)} unique papers")

empty_set = set()
passed = False
# make sure that class_2_url_set = class_1_url_set = final_selection_url_set
if empty_set != class_1_url_set.difference(class_2_url_set):
  print("empty_set != class_1_url_set.difference(class_2_url_set)!")
  print(class_1_url_set.difference(class_2_url_set))
elif empty_set != class_2_url_set.difference(class_1_url_set):
  print("empty_set != class_2_url_set.difference(class_1_url_set)!")
  print(class_2_url_set.difference(class_1_url_set))
elif empty_set != class_2_url_set.difference(final_selection_url_set):
  print("empty_set != class_2_url_set.difference(final_selection_url_set)!")
  print(class_2_url_set.difference(final_selection_url_set))
elif empty_set != final_selection_url_set.difference(class_2_url_set):
  print("empty_set != final_selection_url_set.difference(class_2_url_set)!")
  print(final_selection_url_set.difference(class_2_url_set))
else:
  print("PASSED")
  passed = True

# The finish of the consistency test

if passed == True: # generate more detailed info about classifications here
  class_1['paper url'] = class_1.index
  # class_1.reset_index()
  print(class_1)
  class_1.to_json(orient ='records', path_or_buf="./src/data/classification_one_datasource.json")
  



