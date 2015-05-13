# fibonacci-painter
Processing and JavaScript painting application based on the Fibonacci sequence

Available on [this project page](http://www.renaissanceconsultants.io:83/).

## .gitignore
### node_modules/*
The repo doesn't store any of the NPM dependencies, as listed in ```package.json```. To install the dependencies, ```cd``` into this repo directory, and type:

  ```
  $ npm install
  ```

### .env
This application uses environment variables, with calls through the ```dotenv``` NPM package. In this repo root directory, create and edit a file called ```.env```, and add the following information, adjusting as needed:

  ```
  APP_PORT=insertportnumberhere
  ```



