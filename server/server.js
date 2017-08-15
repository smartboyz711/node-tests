const express = require('express');

var app = express();

app.get('/',(req,res) => {
    res.status(404).send({
        error : 'Page not found.',
        name : 'todo App v1.0'
    });
});

app.get('/users',(req,res) => {
    var user = [{
        name : 'theedanai',
        age : '24'
    },{
        name : 'tonz',
        age : '12'
    }];
    res.status(200).send(user);
});

app.listen(3000);

module.exports.app = app;