# -*- coding: utf-8 -*-
'''
CheeseHacks Diet Reccomender

Created by: Team Cheesy-Weazies
Members:    Mikhail Ortiz-Lunyov, Yixuan Zheng, Mia Chen, Sojung Lee

This program takes in the user's eating habits,
 and then returns suggestions for healthier meals
 as nessesary.
This program assumes that age is 19 or above.

External Sources:
    Data Set:
        https://github.com/soumillll/Diet-Recommendation-System/blob/main/input.csv
    Calories Needed:
        https://www.healthline.com/nutrition/how-many-calories-per-day
        https://www.omnicalculator.com/health/bmr-harris-benedict-equation
'''

import pandas as pd

# Step 1: Take user's input
def get_user_input():
    gender = input("Enter your gender (Male/Female): ")
    weight = float(input("Enter your weight in kg: "))
    height = float(input("Enter your height in cm: "))
    age = int(input("Enter your age in years: "))
    activity_level = input("Enter your activity level (Sedentary, Lightly active, Moderately active, Very active, Extra active): ")
    return gender, weight, height, age, activity_level

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
# Step 3: Set up a diet plan based on the calorie need
def get_diet_plan(calorie_needs):
    # Read the dataset
    food_data = pd.read_csv('https://raw.githubusercontent.com/soumillll/Diet-Recommendation-System/main/input.csv')

    # Assuming there's an additional column 'Unit' in the dataset
    food_data['Unit'] = food_data['Food_items'].apply(lambda x: 'ml' if 'juice' in x.lower() or 'milk' in x.lower() or 'tea' in x.lower() or 'coffee' in x.lower() else 'g')

    # Calculate the quantity for each food item and update the 'Unit' column
    food_data['Unit'] = food_data.apply(lambda row: f"{40 * (calorie_needs / row['Calories']):.2f} {row['Unit']}", axis=1)

    # Filter the food items that fit within the calorie need
    suitable_foods = food_data[food_data['Calories'] <= calorie_needs]

    # Constructing a diet plan
    breakfast = suitable_foods[suitable_foods['Breakfast'] == 1].sample(2)  # 2 items for breakfast
    lunch = suitable_foods[suitable_foods['Lunch'] == 1].sample(2)  # 2 items for lunch
    dinner = suitable_foods[suitable_foods['Dinner'] == 1].sample(1)  # 1 item for dinner

    diet_plan = pd.concat([breakfast, lunch, dinner])
    return diet_plan

# Step 4: Get feedback from the user
def get_feedback():
    feedback = input("Are you satisfied with the diet plan? (Yes/No): ")
    return feedback

# Main program
def main():
    gender, weight, height, age, activity_level = get_user_input()
    calorie_needs = calculate_calorie_needs(gender, weight, height, age, activity_level)
    print(f"Your daily calorie needs are: {calorie_needs:.2f} calories")

    while True:
        diet_plan = get_diet_plan(calorie_needs)
        print("Here is your suggested diet plan:")
        print(diet_plan[['Food_items', 'Calories', 'Unit']])

        feedback = get_feedback()
        if feedback.lower() == 'yes':
            print("Great! Stick to the plan and stay healthy!")
            break
        else:
            print("Sorry to hear that. You may adjust the plan according to your preferences.")
            try_again = input("Would you like to generate a new meal plan? (Yes/No): ")
            if try_again.lower() != 'yes':
                print("Exiting the program. Have a good day!")
                break

if __name__ == "__main__":
    main()
