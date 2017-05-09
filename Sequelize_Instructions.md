* **Instructions:**

* Spend the next few minutes with your partner answering the following questions. You should be using the Sequelize Documentation (and whatever other references you find online).

  ```
  	- Answer: What is Sequelize?
  	* Promise based ORM

  	- Answer: What advantages does it offer?
  	* Looks like javascript
  	* Easier
  	* No longer need to sanitze the data
  	* Gives support for synchronizeing databases
  	

  	- Answer: How do I install it? How do I incorporate it into my app?
  	* npm install --save sequelize

  	- Answer: What the heck is a Sequelize model? What role will it play?
  	* The Sequelize Model is the data, the object, the representation of the table object for sequelize

  	- Answer: Let's say I have the below table in MySQL. 

  		| Country     | PhoneCode | Capital   | IndependenceYear |
  		|-------------|-----------|-----------|------------------|
  		| Afghanistan | 93        | Kabul     | 1919             |
  		| Belarus     | 375       | Misk      | 1991             |
  		| Netherlands | 31        | Amsterdam | 1648             |
  		| Oman        | 968       | Muscat    | 1970             |
  		| Zambia      | 260       | Lusaka    | 1964             |

  		- How would I model it in Sequelize? 
  		
  		var User = sequelize.define('user', {
          Country: {
            type: Sequelize.STRING,
            field: 'country_col' // Will result in an attribute that is firstName when user facing but first_name in the database
          },
          PhoneCode: {
            type: Sequelize.INTEGER
          }
        }

  		- How would I query for all the records where the Independence Year was less than 50 years ago?

  		- How would I query the table, order it by descending Independence Years, and limit the results to just show 2 of the records. Skipping the first two? (i.e. Results: Zambia, Afghanistan)

  	- Bonus: How do I use Sequelize to make changes to an existing table with data in it? 
  ```
