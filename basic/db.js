const mongoose = require('mongoose');
module.exports = () => {
    function connect() {

        /* ID / PASSWD 있는경우의 db 연결
        mongoose.connect('아이디:비밀번호@주소:포트/admin',
        { dbName: '데이터베이스' }, function(err) {});
        */

        mongoose.connect('localhost:27017', function(err) {
            if(err){
                console.error('mongodb connection error', err);
            }
            console.log('mongodb connected');
        });
    }
    connect();
    mongoose.connection.on('disconnected', connect);
    require('./user.js');
};
