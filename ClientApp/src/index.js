const enableDevTools = window.__GRPCWEB_DEVTOOLS__ || (() => {});

const { GreeterClient } = require('./protos/generated/greet_grpc_web_pb');
const { HelloRequest } = require('./protos/generated/greet_pb');

const { UserClient } = require('./protos/generated/user_grpc_web_pb');
const { GetUserRequest } = require('./protos/generated/user_pb');

const greeterClient = new GreeterClient('https://localhost:5001');
const userClient = new UserClient('https://localhost:5001');

enableDevTools([greeterClient, userClient]);

// const request = new HelloRequest();
// request.setName('asdf');

const metadata = {};

// greeterClient.sayHello(request, metadata, (err, response) => {
//     document.querySelector('#app').innerHTML = response.getMessage();
// });

const request = new GetUserRequest();
request.setId(2);

userClient.getUser(request, metadata, (err, response) => {
    if(err) return;
    document.querySelector('#app').innerHTML = response.getUsername();
});
