# NextHire --- Complete Database Schema

> Production-ready schema for a Job Portal (Naukri/Indeed style)

------------------------------------------------------------------------

## 1. USERS

  Field         Type       Notes
  ------------- ---------- -------------------------------
  id            int (PK)   auto-increment
  name          string     
  email         string     unique
  password      string     hashed
  phone         string     
  role          enum       candidate \| company \| admin
  is_verified   boolean    
  created_at    datetime   
  updated_at    datetime   

------------------------------------------------------------------------

## 2. USER_PROFILES

  Field                           Type       Notes
  ------------------------------- ---------- ----------
  id                              int (PK)   
  user_id                         FK         users.id
  headline                        string     
  summary                         text       
  total_experience_years          int        
  current_salary                  number     
  expected_salary                 number     
  current_location                string     
  preferred_location              string     
  notice_period                   string     
  profile_completion_percentage   int        
  created_at                      datetime   
  updated_at                      datetime   

------------------------------------------------------------------------

## 3. RESUMES

  Field         Type       Notes
  ------------- ---------- ----------
  id            int (PK)   
  user_id       FK         users.id
  file_url      string     
  file_name     string     
  file_size     number     
  is_default    boolean    
  uploaded_at   datetime   

------------------------------------------------------------------------

## 4. EDUCATION

  Field            Type       Notes
  ---------------- ---------- ----------
  id               int (PK)   
  user_id          FK         users.id
  degree           string     
  field_of_study   string     
  institution      string     
  start_year       int        
  end_year         int        
  grade            string     
  description      text       

------------------------------------------------------------------------

## 5. EXPERIENCE

  Field          Type       Notes
  -------------- ---------- ----------
  id             int (PK)   
  user_id        FK         users.id
  company_name   string     
  job_title      string     
  start_date     date       
  end_date       date       
  is_current     boolean    
  location       string     
  description    text       

------------------------------------------------------------------------

## 6. SKILLS

  Field      Type       Notes
  ---------- ---------- -------
  id         int (PK)   
  name       string     
  category   string     

------------------------------------------------------------------------

## 7. USER_SKILLS

  Field                 Type       Notes
  --------------------- ---------- -----------
  id                    int (PK)   
  user_id               FK         users.id
  skill_id              FK         skills.id
  proficiency_level     string     
  years_of_experience   int        

------------------------------------------------------------------------

## 8. COMPANIES

  Field          Type       Notes
  -------------- ---------- -------
  id             int (PK)   
  name           string     
  description    text       
  website        string     
  logo           string     
  industry       string     
  company_size   string     
  founded_year   int        
  location       string     
  created_at     datetime   
  updated_at     datetime   

------------------------------------------------------------------------

## 9. COMPANY_USERS

  Field        Type       Notes
  ------------ ---------- -----------------
  id           int (PK)   
  user_id      FK         users.id
  company_id   FK         companies.id
  role         string     admin/recruiter

------------------------------------------------------------------------

## 10. JOBS

  Field                  Type       Notes
  ---------------------- ---------- ---------------
  id                     int (PK)   
  title                  string     
  description            text       
  salary_min             number     
  salary_max             number     
  currency               string     
  company_id             FK         companies.id
  category_id            FK         categories.id
  location_id            FK         locations.id
  job_type               string     
  experience_level       string     
  vacancies              int        
  is_active              boolean    
  application_deadline   date       
  created_at             datetime   
  updated_at             datetime   

------------------------------------------------------------------------

## 11. CATEGORIES

  Field   Type       Notes
  ------- ---------- -------
  id      int (PK)   
  name    string     

------------------------------------------------------------------------

## 12. LOCATIONS

  Field     Type       Notes
  --------- ---------- -------
  id        int (PK)   
  city      string     
  state     string     
  country   string     

------------------------------------------------------------------------

## 13. JOB_SKILLS

  Field      Type       Notes
  ---------- ---------- -----------
  id         int (PK)   
  job_id     FK         jobs.id
  skill_id   FK         skills.id

------------------------------------------------------------------------

## 14. APPLICATIONS

  Field          Type       Notes
  -------------- ---------- ------------------------------------
  id             int (PK)   
  user_id        FK         users.id
  job_id         FK         jobs.id
  resume_id      FK         resumes.id
  status         string     pending/reviewed/rejected/accepted
  cover_letter   text       
  applied_at     datetime   
  updated_at     datetime   

------------------------------------------------------------------------

## 15. SAVED_JOBS

  Field        Type       Notes
  ------------ ---------- ----------
  id           int (PK)   
  user_id      FK         users.id
  job_id       FK         jobs.id
  created_at   datetime   

------------------------------------------------------------------------

## 16. NOTIFICATIONS

  Field        Type       Notes
  ------------ ---------- ----------
  id           int (PK)   
  user_id      FK         users.id
  type         string     
  message      text       
  is_read      boolean    
  created_at   datetime   

------------------------------------------------------------------------

## 17. COMPANY_REVIEWS (Optional)

  Field        Type       Notes
  ------------ ---------- --------------
  id           int (PK)   
  user_id      FK         users.id
  company_id   FK         companies.id
  rating       number     
  review       text       
  created_at   datetime   

------------------------------------------------------------------------

## Development Order

1.  users\
2.  user_profiles\
3.  resumes\
4.  auth system\
5.  jobs\
6.  applications
