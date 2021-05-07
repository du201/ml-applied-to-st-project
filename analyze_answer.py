def analyze_answer(result, init_form):
  for each_init_form in init_form:
    if isinstance(each_init_form, int): # if it is int
      add_to_result(result, each_init_form)
    else: # if it is string
      array_store = each_init_form.split(',')
      for num in array_store: # for each selection
        if num.find('(') != -1:
          num = num[:num.find('(')]
        add_to_result(result, int(num.strip()))

# each_init_form has to be an int
def add_to_result(result, each_init_form):
  for each_result in result: # find the right place to add to the amt
    if each_result['index'] == each_init_form:
      each_result['amt'] += 1
      break
