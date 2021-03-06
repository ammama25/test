define({ "api": [
  {
    "type": "get",
    "url": "/api/users",
    "title": "List all users",
    "name": "GetUsers",
    "group": "Users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "users",
            "description": "<p>List of users</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users._id",
            "description": "<p>ID of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.username",
            "description": "<p>Username of the user, usually same as mobile</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.password",
            "description": "<p>Encrypted password of the user. username/password combination.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response:",
          "content": "HTTP/1.1 200 Success\n[\n  {\n   \"_id\":\n   \"username\": \"a_user\",\n   \"password\": \"$2a$10$4kGSUCjFpSSIGS6T3Vpb7O...\"\n  },\n  {\n   \"_id\":\n   \"username\": \"another_user\",\n   \"password\": \"$2a$10$4kGSUCjFpSSIGS6T3Vpb7O...\"\n  }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/routes/users.js",
    "groupTitle": "Users",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "Object",
            "optional": false,
            "field": "Authorization",
            "description": "<p>header value must follow the pattern &quot;JWT [token sting]&quot;</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Header Example:",
          "content": "{\n  \"Authorization\": \"JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ...\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>The JWT is missing or not valid.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InternalError",
            "description": "<p>There was an internal error when trying to serve the request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Unauthorized Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"status\": 401,\n   \"message\": \"No authorization token was found\"\n}",
          "type": "json"
        },
        {
          "title": "InternalError Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"status\": 500,\n  \"message\": \"There was an internal error when trying to serve the request\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/users",
    "title": "List all users",
    "name": "GetUsers",
    "group": "Users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "users",
            "description": "<p>List of users</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users._id",
            "description": "<p>ID of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.username",
            "description": "<p>Username of the user, usually same as mobile</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.password",
            "description": "<p>Encrypted password of the user. username/password combination.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response:",
          "content": "HTTP/1.1 200 Success\n[\n  {\n   \"_id\":\n   \"username\": \"a_user\",\n   \"password\": \"$2a$10$4kGSUCjFpSSIGS6T3Vpb7O...\"\n  },\n  {\n   \"_id\":\n   \"username\": \"another_user\",\n   \"password\": \"$2a$10$4kGSUCjFpSSIGS6T3Vpb7O...\"\n  }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/routes/users.js",
    "groupTitle": "Users",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "Object",
            "optional": false,
            "field": "Authorization",
            "description": "<p>header value must follow the pattern &quot;JWT [token sting]&quot;</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization Header Example:",
          "content": "{\n  \"Authorization\": \"JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ...\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>The JWT is missing or not valid.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InternalError",
            "description": "<p>There was an internal error when trying to serve the request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Unauthorized Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"status\": 401,\n   \"message\": \"No authorization token was found\"\n}",
          "type": "json"
        },
        {
          "title": "InternalError Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"status\": 500,\n  \"message\": \"There was an internal error when trying to serve the request\"\n}",
          "type": "json"
        }
      ]
    }
  }
] });
