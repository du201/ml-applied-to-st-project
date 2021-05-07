import pandas as pd

group_classification = pd.read_excel("group_classification.xlsx", index_col=1, skiprows=[0, 1, 2])
group_classification.columns = ["Paper Title", 'Testing General Activity', 'Task Type', 'Testing Level', 'Testing Approach', 'Learning Technique',
  'Training Data Property', 'Automation Degree', 'Supervision', 'Time Generalization', 'Elements Learned', 'Software-Testing Facets', 'Learning Category', 'ML Algorithm']
group_classification.index.name = "Paper URL"

# non-redundant test
url_list = group_classification.index
print(f"we have {len(url_list)} urls")

url_set = set(url_list)
if len(url_list) != len(url_set):
  raise Exception("there is redundant url!")

print(group_classification)

group_classification['Paper URL'] = group_classification.index
# class_1.reset_index()
print(group_classification)
group_classification.to_json(orient ='records', path_or_buf="./src/data/classification_result.json")