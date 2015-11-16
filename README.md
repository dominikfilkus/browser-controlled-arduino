This minimal project is a proof of concept for handling a USB connected arduino board via a standard web browser.
The main aim is to control an RGB Led with the following features:

* truning on/off with pressing a button
* turn blinking and add custom delay
* change the color of the Led
* change brightness of the Led

The API and proper hardware blueprints are here: https://github.com/rwaldron/johnny-five/wiki/Led.RGB

The project uses the following third party libraries:

* express.js (http://expressjs.com/) - for enhance our nodejs application
* johnny-five (http://johnny-five.io/) - for using arduino javascript controlling API
* socket.io (http://socket.io/) - for using web sockets to establish communication between back end and front end
* susy (http://susy.oddbird.net/) for creating a layout easily
* google material design (http://www.getmdl.io/) for adding some eye catching components
