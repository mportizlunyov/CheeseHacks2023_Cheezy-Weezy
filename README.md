# Diet Planner Web Application

## Introduction

This Flask web application is designed to assist users in managing their dietary plans by providing personalized calorie intake recommendations and custom diet plans. It calculates an individual's Basal Metabolic Rate (BMR) using the Harris-Benedict equation and adjusts it according to the user's activity level. The application also features an interactive feedback loop, allowing users to regenerate their diet plan if they are not satisfied with the initial recommendation.

## Features

### Personalized Calorie Calculation

- Users can input their personal details such as gender, weight, height, age, and activity level.
- The application calculates the daily calorie needs using the Harris-Benedict equation.
- The calorie calculation takes into account the user's BMR and activity level.

### Customized Diet Plan Generation

- Based on the calculated calorie needs, the application generates a customized diet plan.
- The diet plan is curated from a dataset of food items, ensuring a variety of choices.
- Users receive a balanced diet plan.
- Introduces category-based quantity caps to prevent the recommendation of excessive amounts of any single item, ensuring a balanced and varied diet.

### User Feedback and Iteration

- After viewing their diet plan, users can provide feedback on their satisfaction level.
- If unsatisfied, users can immediately regenerate a new diet plan without re-entering their details.
- This iterative process continues until the user is satisfied with the diet plan.

## File Structure

- `app.py`: The Flask application's main entry point.
- `views.py`: Defines the application's routes and view functions.
- `backend.py`: Contains the core logic for calorie calculation and diet plan generation.
- `/templates`: Contains HTML templates used by the application.
  - `index.html`: The home page template with the input form.
  - `diet_plan.html`: Displays the generated diet plan and calorie information.
  - `thank_you.html`: A thank you page for users who are satisfied with their diet plan.

## Technical Details

### Backend Logic

- `calculate_calorie_needs()`: Computes the user's daily calorie needs by calculating the BMR and adjusting for activity level.
- `get_diet_plan()`: Generates a diet plan that aligns with the user's calorie needs by sampling from a dataset of food items and applying quantity caps for balance and variety.

### Feedback Mechanism

- The application prompts users to indicate whether they are satisfied with the generated diet plan.
- An unsatisfactory response triggers the immediate regeneration of a new diet plan.
- This feedback loop enhances user engagement and satisfaction.

## Installation and Usage

1. Clone the repository to your local environment.
2. Install the necessary dependencies with `pip install -r requirements.txt`.
3. Launch the Flask application by running `python app.py`.
4. Access the application in a web browser at `http://localhost:8000`.

## Dependencies

This application relies on the following Python libraries:

- Flask: A lightweight WSGI web application framework.
- Pandas: An open-source data analysis and manipulation tool.

## Acknowledgments

The development of this application was made possible by leveraging the Flask framework and the Pandas library for backend data processing.

## Disclaimer

This application is intended for educational and informational purposes only. It should not be used as a substitute for professional medical or dietary advice.

## Contact Information

- Developer: Yixuan Zheng, Mikhail Ortiz-Lunyov, Mia Chen
- Email: zheng282@wisc.edu, ortizlunyov@wisc.edu, mchen452@wisc.edu
