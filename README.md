# The Dream App by Tufts' JumboCode 

### Task List

#### Client-Side (Front end)

- [x] Port front end to new angular/express app
- [ ] Update UI (in progress...?)
- [ ] Beautify the login/register/logout pages
- [ ] Move justified-gallary to libs folder
- [ ] Fill out front end part of folder hierarchy
- [ ] ...

#### Server-Side (Back end)

- [x] Set up user authentication with firebase
- [x] Make user data available on front end
- [ ] Make data from salesforce queries available to front end
- [ ] Fill out back end part of folder hierarchy
- [x] Set up user creation with firebase
- [x] Set up user deletion with firebase
- [x] Set up user password change with firebase
- [x] Set up user username change with firebase
- [x] Set up user password reset with firebase
- [ ] Make user roles (mentor, admin, mentee, etc.)
- [x] Make login page input 'matter'
- [ ] ...

#### Salesforce

- [x] Authenticate with salesforce
- [ ] Make some successful test queries
- [ ] Make queries to return useful, relevent data
- [ ] ...

### The app's folder structure

```
- app               <!-- all backend and Node or Express stuff -->
----- routes.js
----- firebase.js
----- salesforce.js
- config
----- db.js 
- node_modules      <!-- created by npm install -->
- public/           <!-- all frontend and angular stuff -->
----- assets/
---------- img/      <!-- Images and icons for the app -->
---------- css/      <!-- All styles and style related files (SCSS or LESS files) -->
---------- js/       <!-- JavaScript files written for your app that are not for angular (e.g. utility functions) -->
---------- libs/     <!-- Third-party libraries not belonging to npm -->
----- components/         <!-- each component is treated as a mini Angular app -->
---------- Attendance/    <!-- this component is a page for... -->
--------------- attendance.html
--------------- attendanceController.js
--------------- attendanceModule.js
---------- Home/          <!-- this component is a page for... -->
--------------- justified-gallary/
--------------- HomeController.js
--------------- HomeModule.js
--------------- slider.html
---------- ...
----- shared/             <!-- acts as reusable components or partials of our site -->
---------- Authentication/    <!-- this a set of pages for authenticating users (login/logout/register) -->
--------------- ...
---------- ...
----- app.module.js     <!-- angular modules -->
----- app.routes.js     <!-- angular routes -->
----- root.html         <!-- the main page of the app -->
- package.json    <!-- tells npm which packages we need -->
- server.js       <!-- set up our node application -->
- README.md
```
