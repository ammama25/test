const grpc = require('grpc');
const loader = require('@grpc/proto-loader');
const AdminAppHandler = require('./server/controllers/admins');
const mongoose = require('./config/mongoose');

import config from './config/env';


const PATH = '127.0.0.1:8083';

const createServer = function (bindPath, handler) {
    loader.load('admin.proto')
        .then((packageDefinition) => {
            const Package = grpc.loadPackageDefinition(packageDefinition);
            const service = Package.admin_app_package.AdminApp.service;
            const server = new grpc.Server();
            server.addService(service, handler);
            server.bind(bindPath, grpc.ServerCredentials.createInsecure());
            server.start();
            console.log('Server running on 8083');
        });
}

createServer(PATH, new AdminAppHandler);