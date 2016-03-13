/**
 * Created by admin on 14.03.2016.
 */

var express = require('express'),
    server = express();

server.use(express.static('./public'));
server.use('/node_modules', express.static('./node_modules'));

