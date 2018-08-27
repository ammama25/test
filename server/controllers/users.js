import User from '../models/user';
const grpc = require('grpc');
const loader = require('@grpc/proto-loader');

const bindPath = '127.0.0.1:8083'

function load(req, res, next, id) {
    User.findById(id)
        .exec()
        .then((user) => {
            if (!user) {
                return res.status(404).json({
                    status: 400,
                    message: "User not found"
                });
            }
            req.dbUser = user;
            return next();
        }, (e) => next(e));

}

function get(req, res) {
  // return res.json(req.dbUser);
    loader.load('todo.proto')
        .then((packageDefinition) => {
            const pack = grpc.loadPackageDefinition(packageDefinition);
            const Client = pack.todo_app_package.TodoApp;
            const client = new Client(bindPath, grpc.credentials.createInsecure());

            client.getTodo({id: 3}, function (err, res) {
                if (err) {
                    return console.log(err);
                }
                return console.log(res);
            });
        });
}

function create(req, res, next) {
  User.create({
      username: req.body.username,
      password: req.body.password
    })
    .then((savedUser) => {
      return res.json(savedUser);
    }, (e) => next(e));
}

function update(req, res, next) {
  const user = req.dbUser;
  Object.assign(user, req.body);

  user.save()
    .then((savedUser) => res.sendStatus(204),
      (e) => next(e));
}

function list(req, res, next) {
  const { limit = 50, skip = 0 } = req.query;
  User.find()
    .skip(skip)
    .limit(limit)
    .exec()
    .then((users) => res.json(users),
      (e) => next(e));
  //   loader.load('todo.proto')
  //       .then((packageDefinition) => {
  //           const pack = grpc.loadPackageDefinition(packageDefinition);
  //           const Client = pack.todo_app_package.TodoApp;
  //           const client = new Client(bindPath, grpc.credentials.createInsecure());
  //
  //           client.getAll({}, function (err, resp) {
  //               if (err) {
  //                   return console.log(err);
  //               }
  //               console.log('todos: ');
  //               return res.json(resp.todos)
  //               // return console.log(res.todos);
  //           });
  //       });
}

function remove(req, res, next) {
  const user = req.dbUser;
  user.remove()
    .then(() => res.sendStatus(204),
      (e) => next(e));
}


export default { load, get, create, update, list, remove };