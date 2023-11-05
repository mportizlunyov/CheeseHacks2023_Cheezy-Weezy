import pandas as pd

# Step 1: Take user's input is handled by Flask in views.py

# Step 2: Calculate calorie needs based on the user's parameters
def calculate_calorie_needs(gender, weight, height, age, activity_level):
    # BMR calculation using Harris-Benedict equation
    if gender.lower() == 'male':
        bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age)
    else:
        bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age)

    # Activity level multiplier
    activity_multiplier = {
        'sedentary': 1.2,
        'lightly active': 1.375,
        'moderately active': 1.55,
        'very active': 1.725,
        'extra active': 1.9
    }

    return bmr * activity_multiplier[activity_level.lower()]

# Step 3: Set up a diet plan based on the calorie need
def get_diet_plan(calorie_needs):
    # Read the dataset
    food_data = pd.read_csv(r'/Users/shuyizhang/Downloads/input.csv')

    # Assuming there's an additional column 'Unit' in the dataset
    food_data['Unit'] = food_data['Food_items'].apply(lambda x: 'ml' if 'juice' in x.lower() or 'milk' in x.lower() or 'tea' in x.lower() or 'coffee' in x.lower() else 'g')

    # Define high and low quantity caps
    high_cap = 700
    low_cap = 300

    # List of items to apply the low cap
    low_cap_items = ['egg', 'butter', 'cheese']

    # Calculate the quantity for each food item and update the 'Unit' column
    food_data['Quantity'] = food_data.apply(lambda row: min(40 * (calorie_needs / row['Calories']), high_cap if row['Food_items'].lower() not in low_cap_items else low_cap), axis=1)
    food_data['Unit'] = food_data.apply(lambda row: f"{row['Quantity']:.2f} {row['Unit']}", axis=1)

    # Filter the food items that fit within the calorie need
    suitable_foods = food_data[food_data['Calories'] <= calorie_needs]

    # Constructing a diet plan
    breakfast = suitable_foods[suitable_foods['Breakfast'] == 1].sample(2)  # 2 items for breakfast
    lunch = suitable_foods[suitable_foods['Lunch'] == 1].sample(2)  # 2 items for lunch
    dinner = suitable_foods[suitable_foods['Dinner'] == 1].sample(1)  # 1 item for dinner

    diet_plan = pd.concat([breakfast, lunch, dinner])
    return diet_plan.to_dict('records')

# Step 4: Get feedback from the user is handled by Flask in views.py
