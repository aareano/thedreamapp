# The Dream App by Tufts' JumboCode 
---
### This is the folder structure with some example files thrown in to help make sense of it.
```
- app               <!-- all backend and Node or Express stuff -->
----- models/
---------- user.js  <!-- the user model to handle CRUD -->
----- routes.js
- config
----- db.js 
- node_modules      <!-- created by npm install -->
- public/           <!-- all frontend and angular stuff -->
----- shared/             <!-- acts as reusable components or partials of our site -->
---------- sidebar/
--------------- sidebarDirective.js 
--------------- sidebarView.html
---------- article/
--------------- articleDirective.js
--------------- articleView.html
----- components/         <!-- each component is treated as a mini Angular app -->
---------- home/
--------------- homeController.js
--------------- homeService.js
--------------- homeView.html
---------- blog/
--------------- blogController.js
--------------- blogService.js
--------------- blogView.html
----- assets/
---------- img/      <!-- Images and icons for your app -->
---------- css/      <!-- All styles and style related files (SCSS or LESS files) -->
---------- js/       <!-- JavaScript files written for your app that are not for angular -->
---------- libs/     <!-- Third-party libraries such as jQuery, Moment, Underscore, etc. -->
----- app.module.js
----- app.routes.js
----- index.html
- package.json    <!-- tells npm which packages we need -->
- server.js       <!-- set up our node application -->
- README.md
```