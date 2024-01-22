#include <iostream>
#include <string>
using namespace std;

/* Still can't compile cpp in vs code for some reason. Will resolve in the future */

// Define a class named 'Person'
class Person {
    private:
        // Private data members
        //std::string name;
        std::string name;
        int age;

    public:
        // Constructor with parameters
        Person(std::string n, int a) : name(n), age(a) {}

        // Member function to display information
        void displayInfo() {
            std::cout << "Name: " << name << ", Age: " << age << std::endl;
        }
};

int main() {
    // Create objects of the 'Person' class
    Person person1("John", 25);
    Person person2("Alice", 30);

    // Call member function to display information
    std::cout << "Person 1 Details:" << std::endl;
    person1.displayInfo();

    std::cout << "\nPerson 2 Details:" << std::endl;
    person2.displayInfo();

    return 0;
}

int other() {
   int currentPrice;
   int lastMonthsPrice;
   
   
   cin >> currentPrice;
   cin >> lastMonthsPrice;

   float change = currentPrice - lastMonthsPrice;
   float mortgage = (currentPrice * 0.051) / 12;
   
      
   /* This house is $200000. The change is $-10000 since last month.
      The estimated monthly mortgage is $850.
   */
   
   cout << "This house is $" << currentPrice << ". The change is $" << change << " since last month." << endl;
   cout << "The estimated monthly mortgage is $" << mortgage << "." << endl;

   return 0;
}
