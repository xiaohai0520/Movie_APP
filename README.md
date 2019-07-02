# Movie Search Application
A small program for movie search in the database.

## Content
- [Deployment](#deployment)
- [Usage](#usage)
- [Dataset](#dataset)
- [Experiments](#experiments)
- [TODO](#todo)


# Deployment

The program depends on *[React.js](https://github.com/facebook/react)* + *[Express.js](https://github.com/expressjs/express)* + *[Neo4j](https://github.com/neo4j)* and so on.  

# Usage
1. Clone this repository. 
    ```
    git clone git@github.com:xiaohai0520/Movie_APP.git
    ```
    You can also download this repository directly.   
    There are three folders at total. Frond end, back end and create database.   
2. Install Neo4j:
    Install the Neo4j database tutorial can be found *[here](https://neo4j.com/)*.  
    After installing the Neo4j database, start the database server:
    ```
    neo4j.bat console
    ```
3. Create database:
    Open the folder create database, this part is written by python.
    ```
    python create_database.py
    ```
4. Start front end:
    Open the folder front end. The dependencies are recorded in the package.json.  
    Install the dependencies:
    ```
    npm install
    ```
    Start front end:
    ```
    npm start
    ```
    The front end will run on the port 3000.
5. Start back end:
    Open the folder back end. The dependencies are recorded in the package.json.  
    Install the dependencies:
    ```
    npm install
    ```
    Start back end:
    ```
    npm start
    ```
    The back end will run on the port 8080.
    

## Database:
The dataset are found from Kaggle. The movie dataset includes more than 10K records.  
We use the Neo4j to create the database.The main idear is film recommendation.    
Firstly, we create the movie database with the neo4j database.   
There are four kinds of nodes: film, actor, director and genre.    
The film node includes the year, budget and source property.    
The actor and director node have the property of the information of people.    
Genre node just have the type information.     
Expect four kinds of nodes, we also have some kinds of relationships including the acting, directing and genre.
Through these nodes and relationships, we can search any chain relationship in the database.


## Experiments
We can search in the database with cypher.
With the character of Neo4j, we can search any relationship between movies.  
So we can get the relative movie with any distance. Maybe they can be connected by director, actor, genre and so on.




## TODO
1. If we do not search successfully, we need to handle the null object.
2. Create the table of info UI.









