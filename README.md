# Nodejs Socket server - dev

## 1._ First we need to create the `.env` 

The `.env` file contains the environment variables such as, mongo db keys, port, and other sensitive information.

If you want to create the file from the terminal, you can run the following command on the root directory of the project **only if you are on linux or macos**.

```properties
touch .env
```

> .env
```env
PORT=<NUMBER_PORT>
DB_CNN=mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[defaultauthdb][?options]]
```

***
## 2._ Then we need to import `npm` packages
<br>

```properties
npm install
```

***
## 3._ Run the program

If we have done the previous steps we can run the server with the following command.
<br>

```properties
npm run start:dev 
```