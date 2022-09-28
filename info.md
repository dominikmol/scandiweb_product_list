## Here are some key feedback/ learning points about your submission:
- Procedural PHP code is allowed exclusively to initialize your PHP classes. Rest logic should be placed within class methods.
- Also, MySQL logic should be handled by objects with properties instead of direct column values. Please use setters and getters for achieving this and don't forget to use them for both save and display logic.
- For OOP you would need to demonstrate code structuring in meaningful classes that extend each other, so we would like to see an abstract class for the main product logic. Please take a look at the polymorphism provision. We want to see class for each product type, and using of these classes (creating object Book for example, and then validating and saving with class or it’s parent class method).

## other
- This means you should avoid any if-else and switch-case statements which are used to handle any difference between products.

## done
- There is no error when product with the same SKU is added