import java.io.File;
import java.io.PrintWriter;
import java.io.IOException;
import java.util.Scanner;

public class Frontend {
  // fields
  private Scanner input;  
  
  public Frontend(Scanner input) {
    this.input = input;
  }
  
  public static void main(String[] args) {
    
    Scanner scnr = new Scanner(System.in);

    //Frontend frontend = new Frontend(scnr);
        
    System.out.println("Hello! Welcome to the Diet Plan App!");
        
    try {
      //File textFile = new File("file.txt");
      
      PrintWriter print = new PrintWriter("file.txt");
      
      print.println(getAge());
      print.println(getGender());
      print.println(getWeight());
      print.println(getHeight());
      print.println(getDietaryRestrictions());
      print.println(getActivityAmount());
      
      print.close();
      
    } catch (IOException e) {
      e.printStackTrace();
    }
  }
    
    public static int getAge() {
      int age = -1;
      while (age == -1) {
        System.out.println("Please enter your age (between 15 and 80): ");
        Scanner scnr = new Scanner(System.in);
        if (scnr.hasNextInt()) {
          age = scnr.nextInt();
          if (age < 15 || age > 80) {
            getAge();
          }
        }
      }
      return age;
    }
    
    public static int getGender() {
      int gender = 0;
      while (gender == 0) {
        System.out.println("Please indicate the number of your biological gender (1. (female), 2. (male): ");
        Scanner scnr = new Scanner(System.in);
        if (scnr.hasNextInt()) {
          gender = scnr.nextInt();
          if (gender != 1 && gender != 2) {
            getGender();
          }
        }
      }
      return gender;
    }
    
    public static int getWeight() {
      String input = null;
      int weight = 0;
      double doubleWeight = 0.0;
      
      while (input == null) {
        System.out.println("Are you using pounds or kilograms for weight?: ");
        Scanner scnr = new Scanner(System.in);
        if (scnr.hasNext()) {
          input = scnr.nextLine().trim();
          if (!input.equals("pounds") && !input.equals("kilograms")) {
            getWeight();
          } else {
            do {
              System.out.println("Please enter your weight (above 0): ");
              if (scnr.hasNextDouble()) {
                doubleWeight = scnr.nextDouble();
              }
            }
            while (doubleWeight <= 0.0);
            
            if (input.equals("pounds")) {
              doubleWeight = doubleWeight * 0.45359237;
              weight = (int) doubleWeight;
          }
        }
       }
      }
      return weight;
    }

    public static int getHeight() {
      String input = null;
      int height = 0;
      double doubleHeight = 0.0;
      
      while (input == null) {
        System.out.println("Are you using feet or centimeters for your height?: ");
        Scanner scnr = new Scanner(System.in);
        if (scnr.hasNext()) {
          input = scnr.nextLine().trim();
          if (!input.equals("feet") && !input.equals("centimeters")) {
            getHeight();
          } else {
            do {
              System.out.println("Please enter your height (above 0): ");
              if (scnr.hasNextDouble()) {
                doubleHeight = scnr.nextDouble();
              }
            }
            while (doubleHeight <= 0.0);
            
            if (input.equals("feet")) {
              doubleHeight = doubleHeight * 30.48;
              height = (int) doubleHeight;
          }
        }
       }
      }
      return height;
    }
    
    public static int getDietaryRestrictions() {
      int restriction = 0;
      while (restriction == 0) {
      System.out.println("What are your dietary restrictions? (1. no restrictions, 2. vegetarian, 3. vegan, 4. gluten-free, "
          + "5. dairy-free): ");
      Scanner scnr = new Scanner(System.in);
      if (scnr.hasNext()) {
        restriction = scnr.nextInt();
        if (restriction != 1 && restriction != 2 && restriction != 3  
            && restriction != 4 && restriction != 5) {
          getDietaryRestrictions();
        }
      }
    }
      return restriction;
    }
    
    public static int getActivityAmount() {
      int activity = 0;
      while (activity == 0) {
        System.out.println("Please enter your activity amount (choose number): "
            + "\n1. Sedentary (little/no exercise)\nLight (exercsie 1-3x/week)"
            + "\n2. Moderate (exercise 4-5x/week)\nActive (daily/intense exercise 3-4x/week"
            + "\n3. Very Active (intense exercise 6-7x/week"
            + "\n4. Extra Active (very intense exercise daily/physical job");
        Scanner scnr = new Scanner(System.in);
        if (scnr.hasNextInt()) {
          activity = scnr.nextInt();
        }
      }
      return activity;
    }
}
