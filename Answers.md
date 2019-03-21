# Answers!
Keep your answers to each checkoff question here for safe keeping. You will need to copy them over to the submission form at the end of the project. 
1.1 ReactDOM has a render function takes in a component and places it on the page within the DOM node with the specified id. 
1.2 One advantage of using Semantic UI is that it is already there and ready to use. One disadvantage is that if you want to
customize the appearance of the cards, you would not be able to. YOu would probably have to write the code yourself or style the cards manually, which is not efficient.
1.3 We need to wrap addToCart in another function, because we need to pass in a function that takes parameters. If we try to pass the function in with parameters as is, it evaulates the funtion once. The expression itself is not defined. Therefore, we need to wrap it inside a lambda function to call it multiple times with parameters. Otherwise, the function could be passed in as is without parentheses.
1.4 a) The map function allows you to map the Product component to all of the data points in ProductData.products.
	b) We don't list each component manually, because as the dataset becomes larger, it takes more time and lines of code to render each item. Besides cleanliness, it allows the dataset to be easily changed and modified without having to modify the code used to 
	render each component for each item.
