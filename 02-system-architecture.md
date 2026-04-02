# Job Portal -- System Architecture

## High Level Architecture

Client (Browser) \| v Next.js Frontend \| v NestJS Backend API \| v
PostgreSQL Database

------------------------------------------------------------------------

# Local Development Environment

Frontend: http://localhost:3000

Backend: http://localhost:4000

Database: localhost:5432

------------------------------------------------------------------------

# Production Architecture

User \| CDN / Load Balancer \| Frontend (Next.js) \| Backend API
(NestJS) \| PostgreSQL Database \| Object Storage

------------------------------------------------------------------------

# Infrastructure Components

Frontend Hosting - Vercel - Netlify

Backend Hosting - VPS - Railway - Render

Database Hosting - Supabase - Neon - AWS RDS

------------------------------------------------------------------------

# Scalability Plan

Future scaling components:

Redis Cache\
Search Engine (Elasticsearch)\
Queue System (BullMQ)\
Microservices
