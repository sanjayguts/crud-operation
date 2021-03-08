bloging website create:
1)user:read post,comment,
user:create read update user profile

2)author:register,log in

create post,edite,delete


structuring and discructuring

sprad operater

map filter

redus

https://www.w3schools.com/js/js_es6.asp

https://www.w3resource.com/javascript-exercises/fundamental/index.php

npm i g nestjs@cil
nest g controller cats nest g service cats command.
T nest g module cats command.
https://docs.nestjs.com/recipes/crud-generator

https://www.techiediaries.com/nestjs-upload-serve-static-file/

https://www.techiediaries.com/nestjs-tutorial-jwt-authentication/

https://docs.nestjs.com/security/authentication

login register
https://medium.com/technoetics/handling-user-login-and-registration-using-nodejs-and-mysql-81b146e37419
https://openclassrooms.com/en/courses/5614116-go-full-stack-with-node-js-express-and-mongodb/5656291-check-a-users-credentials

///////////////////////
Type a message
Nest provides an out-of-the-box application architecture which allows developers and teams to create highly testable, scalable, loosely coupled, and easily maintainable applications. The architecture is heavily inspired by Angular.
app.controller.ts A basic controller with a single route.
app.controller.spec.ts The unit tests for the controller.
app.module.ts The root module of the application.
app.service.ts A basic service with a single method.

main.ts=>o create a Nest application instance, we use the core NestFactory class. NestFactory exposes a few static methods that allow creating an application instance.

The create() method returns an application object, which fulfills the INestApplication


install npm:
nest : File C:\Users\hp\AppData\Roaming\npm\nest.ps1 cannot be loaded because running scripts is disabled on this system. For more information, see about_Execution_Policies at
Controllers:Controllers are responsible for handling incoming requests and returning responses to the client.A controller's purpose is to receive specific requests for the application. The routing mechanism controls which controller receives which requests. Frequently, each controller has more than one route, and different routes can perform different actions.

To create a controller using the CLI, simply execute the $ nest g controller cats command.

Providers:

Services#

Let's start by creating a simple CatsService. This service will be responsible for data storage and retrieval, and is designed to be used by the CatsController, so it's a good candidate to be defined as a provider. Thus, we decorate the class with @Injectable().

To create a service using the CLI, simply execute the $ nest g service cats command.


Middleware

Middleware is a function which is called before the route handler. Middleware functions have access to the request and response objects, and the next() middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.
Middleware functions can perform the following tasks:

execute any code.
make changes to the request and the response objects.
end the request-response cycle.
call the next middleware function in the stack.
if the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging.

Installing Nest.js CLI

$ npm install -g @nest/cli
cd nestjs-crud-rest-api
npm install
npm run start:dev

for the crud opration in nestjs:
https://www.youtube.com/watch?v=B0vpyy9dvcs
https://www.techiediaries.com/nestjs-tutorial-rest-api-crud/
https://wanago.io/2020/05/11/nestjs-api-controllers-routing-module/

for install mysql:
npm install --save @nestjs/typeorm typeorm mysql
https://dev.mysql.com/downloads/installer/

authentication:
https://www.techiediaries.com/nestjs-tutorial-jwt-authentication/

http://127.0.0.1:3000/auth/register
sachin.yadav@gmail.comsachin.yadav
780408

Interceptors :
Interceptors have a set of useful capabilities which are inspired by the Aspect Oriented Programming (AOP) technique. They make it possible to:

bind extra logic before / after method execution
transform the result returned from a function
transform the exception thrown from a function
extend the basic function behavior
completely override a function depending on specific conditions (e.g., for caching purposes)

issue solve for the alreay use 3000 error

taskkill /PID 3824 /F
netstat -ano | findstr :<yourPortNumber>

https://www.techiediaries.com/nestjs-upload-serve-static-file/

first step : first we will create our app:cd crud-app
$ npm run start:dev
and check it is working or not than run http://localhost:3000/

https://127.0.0.1:3000/auth/register
netstat -ano | findstr :3000
register
step 2: create module :nest generate module contacts

Next, let's create a service that will encapsulate all CRUD operations. In your terminal, run the following command
step 3:create service:nest generate service contacts/contacts

Next, let's create a controller, we'll also call it contacts ant It will be created inside the contacts module

step 4:nest generate controller contacts/contacts

Installing and Setting up TypeORM & SQLite Database:
https://docs.nestjs.com/techniques/database
https://github.com/typeorm/typeorm/blob/master/docs/entities.md
Schedule a Tour

Middleware:Middleware is a function which is called before the route handler. Middleware functions have access to the request and response objects, and the next() middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.
Middleware functions can perform the following tasks:
execute any code.
make changes to the request and the response objects.
end the request-response cycle.
call the next middleware function in the stack.
if the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging.
How to apply middleware:
Middleware consumer#

The MiddlewareConsumer is a helper class. It provides several built-in methods to manage middleware. All of them can be simply chained in the fluent style. The forRoutes() method can take a single string, multiple strings, a RouteInfo object, a controller class and even multiple controller classes. In most cases you'll probably just pass a list of controllers separated by commas. Below is an example with a single controller:
Middleware:Middleware is a function which is called before the route handler. Middleware functions have access to the request and response objects, and the next() middleware function in the application’s request-response cycle. The next middleware msssaqfunction is commonly denoted by a variable named next. Nest middleware are, by defasssaqault, equivalent to express middleware. The following description from the official express documentation describes the capabilities of middleware:


Guards:
Guards have a single responsibility. They determine whether a given request will be handled by the route handler or not, depending on certain conditions (like permissions, roles, ACLs, etc.) present at run-time. This is often referred to as authorization.
Guards are executed after each middleware, but before any interceptor or pipe.
Authorization guard:
Pipes
https://medium.com/@kaushiksamanta23/nest-js-tutorial-series-pipes-a6894b3de357

A pipe is a class annotated with the @Injectable() decorator. Pipes implement the PipeTransforminterface. You can use pipes to transform the input data into the desired output format and validate the request data (headers, body, query, query params). Nest interposes a pipe just before a method is invoked, and the pipe receives the arguments destined for the method.

https://medium.com/@kaushiksamanta23/nest-js-tutorial-series-pipes-a6894b3de357

Pipes have two typical use cases:

transformation: transform input data to the desired form (e.g., from string to integer)
validation: evaluate input data and if valid, simply pass it through unchanged; otherwise, throw an exception when the data is incorrect

Built-in pipes#

Nest comes with six pipes available out-of-the-box:

ValidationPipe
ParseIntPipe
ParseBoolPipe
ParseArrayPipe
ParseUUIDPipe
DefaultValuePipe
https://www.youtube.com/watch?v=nK6SpFIEvtQ
https://www.youtube.com/watch?v=fWv7CdKtMvs

http-exception.filter.ts
Providers: The main idea of a provider is that it can inject dependencies; this means objects can create various relationships with each other, and the function of "wiring up" instances of objects can largely be delegated to the Nest runtime system. A provider is simply a class annotated with an @Injectable() decorator.

exports:
the subset of providers that are provided by this module and should be available in other modules which import this module


Dependency injection#
Dependency injection in Angular
Dependencies are services or objects that a class needs to perform its function. Dependency injection, or DI, is a design pattern in which a class requests dependencies from external sources rather than creating them.

Angular's DI framework provides dependencies to a class upon instantiation. You can use Angular DI to increase flexibility and modularity in your applications.
nest js:
how to install in your pc:you can install nest js in any folder in your pc first create a folder and run this cmd E:\Nestjs npm install -g @nest/cli
it is run to one time to any pc after that create project and run this cmd:
Creating a Nest.js Project
nest new crud-app
node_modules:basicllay node packeges jab hum npm run krte he to o automatic install ho jata he
src folder: it is the main folder all src file is here
main file main.ts:

module: esme hmare controller or provider encapsulate hote he
controller :controller :basically handel the routes
provider: basicall biginess logic

disc folder:we only this folder on the server after development
gitlab 7 to zimzim



kamil mysliwiec develop to nestjs
https://www.youtube.com/watch?v=vinvXWiqywM

https://www.techiediaries.com/nestjs-tutorial-rest-api-crud/

https://www.youtube.com/watch?v=gQYK_qBEn_s&list=PLIGDNOJWiL1_AhUGgmwz7RhyXwX5aVLj4&index=3


NestJs tutorials for absolute beginners (in Hinglish) - Part-2 Creating a REST api with basic CRUD.:

https://www.youtube.com/watch?v=9VN2tS6GSlc&t=212s

nestjs is a framework for beuilding nodejs

nestjs is a framework for building effiecient,scalable node.js server side application
built in top of express framework of node.js

highly inspired by angular frontend framework and follows the structure of module,controller and service

node.js. The framework uses progressive JavaScript, fully supports TypeScript, and combines three principles:

OOP (Object Oriented Programming),
FP (Functional Programming),
FRP (Functional Reactive Programming).



Hello Sanjay,
1. For Angular - nest.js. It is based on Angular and once you are through to it then you can learn Angular.

2. For React - next.js. It is based on React and once you are through to it then you can learn React.

3. For Vue - nuxt.js. It is based on Vue and once you are through to it then you can learn Vuee

Nest.js -> https://nestjs.com/

Next.js -> https://nextjs.org/

Nuxt.js -> https://nuxtjs.org/

For learning good communication skills you can use Hello App as it will help you in learning English Language from any of your native language.

Let us know if you need any help from any of us.

Good Luck!
