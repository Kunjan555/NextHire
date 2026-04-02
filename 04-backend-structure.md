# Job Portal -- Backend Project Structure

Recommended NestJS project structure.

src/ \| ├ auth/ ├ users/ ├ companies/ ├ jobs/ ├ applications/ ├
categories/ ├ skills/ ├ notifications/ ├ prisma/ \| └ main.ts

------------------------------------------------------------------------

# Module Structure

Example module:

jobs/

jobs.controller.ts\
jobs.service.ts\
jobs.module.ts

------------------------------------------------------------------------

# API Structure

Auth:

POST /auth/register\
POST /auth/login

Users:

GET /users\
GET /users/:id

Jobs:

GET /jobs\
GET /jobs/:id\
POST /jobs\
PATCH /jobs/:id\
DELETE /jobs/:id

Applications:

POST /applications\
GET /applications

------------------------------------------------------------------------

# Development Flow

1.  Create database models
2.  Generate Prisma client
3.  Create NestJS modules
4.  Implement services
5.  Add controllers
6.  Secure routes with JWT
7.  Write tests
