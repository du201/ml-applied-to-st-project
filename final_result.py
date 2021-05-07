import pandas as pd
from analyze_answer import analyze_answer
import json

# def check_total_amt(software_testing_facets, total_amt):
#   my_total_amt = 0
#   for facet in software_testing_facets:
#     my_total_amt += facet['amt']
#   print(my_total_amt)
#   if my_total_amt != total_amt:
#     raise Exception("total amt is not len(url_list)!")

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


group_classification['Paper URL'] = group_classification.index
# class_1.reset_index()
# print(group_classification)
group_classification.to_json(orient ='records', path_or_buf="./src/data/classification_result.json")

# classification 2
software_testing_facets = []
for i in range(13):
  software_testing_facets.append({'index': i, 'amt': 0})
analyze_answer(software_testing_facets, list(group_classification.loc[:, 'Software-Testing Facets']))
with open("./src/data/software_testing_facets.json", "w") as outfile: 
  json.dump(software_testing_facets, outfile)

learning_category = []
for i in range(6):
  learning_category.append({'index': i, 'amt': 0})
analyze_answer(learning_category, list(group_classification.loc[:, 'Learning Category']))
with open("./src/data/learning_category.json", "w") as outfile: 
  json.dump(learning_category, outfile)

ml_algorithm = []
for i in range(9):
  ml_algorithm.append({'index': i, 'amt': 0})
analyze_answer(ml_algorithm, list(group_classification.loc[:, 'ML Algorithm']))
with open("./src/data/ml_algorithm.json", "w") as outfile: 
  json.dump(ml_algorithm, outfile)


# classification 1
testing_general_activity = []
for i in range(1, 5):
  testing_general_activity.append({'index': i, 'amt': 0})
analyze_answer(testing_general_activity, list(group_classification.loc[:, 'Testing General Activity']))
with open("./src/data/testing_general_activity.json", "w") as outfile: 
  json.dump(testing_general_activity, outfile)

task_type = []
for i in range(1, 11):
  task_type.append({'index': i, 'amt': 0})
analyze_answer(task_type, list(group_classification.loc[:, 'Task Type']))
with open("./src/data/task_type.json", "w") as outfile: 
  json.dump(task_type, outfile)

testing_level = []
for i in range(1, 8):
  testing_level.append({'index': i, 'amt': 0})
analyze_answer(testing_level, list(group_classification.loc[:, 'Testing Level']))
with open("./src/data/testing_level.json", "w") as outfile: 
  json.dump(testing_level, outfile)

testing_approach = []
for i in range(1, 5):
  testing_approach.append({'index': i, 'amt': 0})
analyze_answer(testing_approach, list(group_classification.loc[:, 'Testing Approach']))
with open("./src/data/testing_approach.json", "w") as outfile: 
  json.dump(testing_approach, outfile)

learning_technique = []
for i in range(1, 9):
  learning_technique.append({'index': i, 'amt': 0})
analyze_answer(learning_technique, list(group_classification.loc[:, 'Learning Technique']))
with open("./src/data/learning_technique.json", "w") as outfile: 
  json.dump(learning_technique, outfile)

training_data_property = []
for i in range(1, 6):
  training_data_property.append({'index': i, 'amt': 0})
analyze_answer(training_data_property, list(group_classification.loc[:, 'Training Data Property']))
with open("./src/data/training_data_property.json", "w") as outfile: 
  json.dump(training_data_property, outfile)

automation_degree = []
for i in range(1, 4):
  automation_degree.append({'index': i, 'amt': 0})
analyze_answer(automation_degree, list(group_classification.loc[:, 'Automation Degree']))
with open("./src/data/automation_degree.json", "w") as outfile: 
  json.dump(automation_degree, outfile)

supervision = []
for i in range(1, 4):
  supervision.append({'index': i, 'amt': 0})
analyze_answer(supervision, list(group_classification.loc[:, 'Supervision']))
with open("./src/data/supervision.json", "w") as outfile: 
  json.dump(supervision, outfile)

time_generalization = []
for i in range(1, 6):
  time_generalization.append({'index': i, 'amt': 0})
analyze_answer(time_generalization, list(group_classification.loc[:, 'Time Generalization']))
with open("./src/data/time_generalization.json", "w") as outfile: 
  json.dump(time_generalization, outfile)

elements_learned = []
for i in range(1, 10):
  elements_learned.append({'index': i, 'amt': 0})
analyze_answer(elements_learned, list(group_classification.loc[:, 'Elements Learned']))
with open("./src/data/elements_learned.json", "w") as outfile: 
  json.dump(elements_learned, outfile)


