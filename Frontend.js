class Frontend {
  constructor(input) {
    this.input = null;

    this.input = this.input;
  }
}
Frontend.main = (args) => {
  let scnr = new Scanner(System.in);
  System.out.println('Hello! Welcome to the Diet Plan App!');
  try {
    let print = new PrintWriter('file.txt');
    print.println(this.getAge());
    print.println(this.getGender());
    print.println(this.getWeight());
    print.println(this.getHeight());
    print.println(this.getDietaryRestrictions());
    print.println(this.getActivityAmount());
    print.close();
  } catch (e) {
    e.getStackTrace();
  }
};
Frontend.getAge = () => {
  let age = -1;
  while (age === -1) {
    System.out.println('Please enter your age (between 15 and 80): ');
    let scnr = new Scanner(System.in);
    if (scnr.hasNextInt()) {
      age = scnr.nextInt();
      if (age < 15 || age > 80) {
        this.getAge();
      }
    }
  }
  return age;
};
Frontend.getGender = () => {
  let gender = 0;
  while (gender === 0) {
    System.out.println('Please indicate the number of your biological gender (1. (female), 2. (male): ');
    let scnr = new Scanner(System.in);
    if (scnr.hasNextInt()) {
      gender = scnr.nextInt();
      if (gender !== 1 && gender !== 2) {
        this.getGender();
      }
    }
  }
  return gender;
};
Frontend.getWeight = () => {
  let input = null;
  let weight = 0;
  let doubleWeight = 0.0;
  while (this.input === null) {
    System.out.println('Are you using pounds or kilograms for weight?: ');
    let scnr = new Scanner(System.in);
    if (scnr.hasNext()) {
      this.input = scnr.nextLine().trim();
      if (!this.input.equals('pounds') && !this.input.equals('kilograms')) {
        this.getWeight();
      } else {
        do {
          System.out.println('Please enter your weight (above 0): ');
          if (scnr.hasNextDouble()) {
            doubleWeight = scnr.nextDouble();
          }
        } while (doubleWeight <= 0.0);
        if (this.input.equals('pounds')) {
          doubleWeight = doubleWeight * 0.45359237;
          weight = doubleWeight;
        }
      }
    }
  }
  return weight;
};
Frontend.getHeight = () => {
  let input = null;
  let height = 0;
  let doubleHeight = 0.0;
  while (this.input === null) {
    System.out.println('Are you using feet or centimeters for your height?: ');
    let scnr = new Scanner(System.in);
    if (scnr.hasNext()) {
      this.input = scnr.nextLine().trim();
      if (!this.input.equals('feet') && !this.input.equals('centimeters')) {
        this.getHeight();
      } else {
        do {
          System.out.println('Please enter your height (above 0): ');
          if (scnr.hasNextDouble()) {
            doubleHeight = scnr.nextDouble();
          }
        } while (doubleHeight <= 0.0);
        if (this.input.equals('feet')) {
          doubleHeight = doubleHeight * 30.48;
          height = doubleHeight;
        }
      }
    }
  }
  return height;
};
Frontend.getDietaryRestrictions = () => {
  let restriction = 0;
  while (restriction === 0) {
    System.out.println('What are your dietary restrictions? (1. no restrictions, 2. vegetarian, 3. vegan, 4. gluten-free, ' + '5. dairy-free): ');
    let scnr = new Scanner(System.in);
    if (scnr.hasNext()) {
      restriction = scnr.nextInt();
      if (restriction !== 1 && restriction !== 2 && restriction !== 3 && restriction !== 4 && restriction !== 5) {
        this.getDietaryRestrictions();
      }
    }
  }
  return restriction;
};
Frontend.getActivityAmount = () => {
  let activity = 0;
  while (activity === 0) {
    System.out.println('Please enter your activity amount (choose number): ' + '\n1. Sedentary (little/no exercise)\nLight (exercsie 1-3x/week)' + '\n2. Moderate (exercise 4-5x/week)\nActive (daily/intense exercise 3-4x/week' + '\n3. Very Active (intense exercise 6-7x/week' + '\n4. Extra Active (very intense exercise daily/physical job');
    let scnr = new Scanner(System.in);
    if (scnr.hasNextInt()) {
      activity = scnr.nextInt();
    }
  }
  return activity;
};
