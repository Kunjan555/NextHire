# Job Portal -- Production Database Schema

## Core Tables

users\
companies\
jobs\
applications\
categories\
locations\
skills\
job_skills\
user_skills\
saved_jobs\
resumes\
notifications\
roles

------------------------------------------------------------------------

# Users

Fields:

id\
name\
email\
password\
role\
created_at

Roles: candidate\
company\
admin

------------------------------------------------------------------------

# Companies

id\
name\
description\
website\
logo\
location\
created_at

------------------------------------------------------------------------

# Jobs

id\
title\
description\
salary_min\
salary_max\
company_id\
category_id\
location_id\
job_type\
experience_level\
created_at

------------------------------------------------------------------------

# Applications

id\
user_id\
job_id\
resume_id\
status\
applied_at

Status: pending\
reviewed\
rejected\
accepted

------------------------------------------------------------------------

# Skills

id\
name

------------------------------------------------------------------------

# Job Skills

job_id\
skill_id

------------------------------------------------------------------------

# User Skills

user_id\
skill_id

------------------------------------------------------------------------

# Saved Jobs

user_id\
job_id

------------------------------------------------------------------------

# Notifications

id\
user_id\
type\
message\
created_at
