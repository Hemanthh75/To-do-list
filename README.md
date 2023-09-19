# To-do-list
I have created a To-do-list web application using ReactJs, NodeJs and Mysql.
Note: I have deleted the node modules from the react app since the file size is exceeding.

To-Do-List App

We need two different folders for this project, so I have created a frontend folder and a backend folder and placed them in one folder.

Front-end Part:

1.First of all I opened the front-end folder in the code editor and created a new react app using 'npx create-react-app'
2.Now in the App.js I have cleared everything and imported react.
3.Then I have created a function named App and return the html part i.e., input field creation.
4.For that in the return I have made a heading using h1 tag and then created an input field with type text and added a placeholder in it.
5.Then I have created a button named 'Add Task'.
6.Then I have created one more div for the unordered lists where the added tasks will be displayed.
7.I have created an unordered list and left it empty.
8.Then I have exported the App.
9.Then I have imported useState hook from react.
10.Then I have used the useState hook syntax in the App function for task and task list where I have set the initial values as empty and empty array.
11.Then below them I have created three functions and named them as 'handleTaskChange', 'addTask' and 'deteleTask'.
12.I have called the 'handleTaskChange' in the onChange attribute of input field and I have also added the value as {task} in it.
13.I have called the 'addTask' in the onClick attribute of button and I called the 'deleteTask' function in the onClick attribute of delete button in the list.
14.Now in the unordered list I have wrote the code in jsx as follows.
15.Since the initial value of the tasksList is an empty array I have used map method to loop through all elements and returned the list of 
   array elements which are nothing but tasks.
16.Coming to handleTaskChange function I have prevented the default value and made the setTask value as the target value in the input box.
17.We will look into addTask and deleteTask function after creating APIs.


Back-end Part:

1.I have opened the backend folder in the code editor and using npm init I have created the package.json file with all dependencies.
2.Then I have installed express, body-parser, mysql2, cors using npm install.
3.Then I have created an index.js file and added all the required libraries.
4.I have also stored the Port number.
5.Then I have created a config.js file and added the mysql database details in there and then I have exported it.
6.Then I imported the config file in the index.js and set the connection between the database and the server using createPool() method and stored
  it in a variable named pool.
7.Then I let the app to use bodyparser by changing it to json and the middleware cors.

 Creating Post API for adding new task
 1.Started with app.post and I have given the endpoint as '/task' as 1st paramter and then a callback with req and res as parameters in it.
 2.Then I have destructured the task value from req url body.
 3.Then I have made a condition such that if the task did bot exist in the request body, I returned an error saying the task is required.
 4.Then using tryCatch method, I have set the mysql condition using pool.query to add the items into the task array.
 5.Then I have added the response saying task added successfully.
 6.In the catch I have sent the status as 'Internal server error'.


 Creating Get API for getting all the tasks.
 1.Started with app.post and I have given the endpoint as '/alltasks' as 1st paramter and then a callback with req and res as parameters in i
 2.Then I have used the try catch method as follows.
 3.In try I have declared a rows array and added all the rows in the db using mysql query.
 4.Then I have declared a variable named tasks and using map I have looped to all the rows and printed the tasks in the rows using row.task.
 5.Then I sent the response as tasks.
 6.Then in the catch I have logged the error.

 Creating delete API for deleting the tasks.
 1.Started with app.post and I have given the endpoint as '/deletetask' as 1st paramter and then a callback with req and res as parameters in i
 2.Then I have used the try catch method as follows.
 3.First of all I stored the value of task from the req.body in the variable named task.
 4.Then in the try block, I have used the mysql query and deleted the task.
 5.Then I have sent the response as Task deleted successfully.
 6.In the catch block I have logged the error.

So the backend parted is completed.

Front-end again:
1.First of all I have installed axios library to perform API calls.
2.Then I have created an asynchronous function named fetchTasks and then declared a varibale name response in it.
3.Using axios.get I have fetched the url which we are created for all the taks in backend.
4.Then I have set the value for 'setTasksList' as response.data(which is the data we got from the url nothing but tasks)
5.Then coming to the addTask function, I have made a condition named if(task.trim()==='') where trim method can trim the whitespaces in the front and back and returns the string.
6.So if we got nothing it means we have nothing stored in the task variable.
7.If there is nothing stored then we can call the post api which we have created for adding tasks so that after clicking the button the value will be stored in the task variable.
8.Then I have made the setTask value to empty so that after clicking the button the input value changed to empty.
9.Then I have called the function fetchTasks which is the get api for getting all the tasks.
10.Then I have used catch to log an error.
11.Then coming to the deleteTask function, I have used a paramater named 'taskToDelete' and used the try catch logic as follows.
12.In try I have used axios delete method and used two arguments, the first one is the delete API link and next one is an object of data where it contains
   another object which stores the tasToDelete value in the task.
13.Then I have used the fetchTasks(), to fetch the tasks after deleting one.
14.Then I have console logged the error.

I have also made some stylings using App.css.

Thus the Todo list app is completed.















