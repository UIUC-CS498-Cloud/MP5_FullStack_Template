# CS 498 - Full Stack Event Board Templates (Frontend / Backend)

This repository contains starter code templates to help you complete MP5: Full Stack Event Board using AWS services like S3, CloudFront, CodePipeline, CodeBuild, Elastic Beanstalk, and RDS.

---

## Repository Overview

This repo is part of the Full Stack MP (Machine Problem) for CS 498 Cloud Computing UIUC. It includes the base code required to build and deploy:

- A React-based frontend (Inside the Frontend folder)
- A Flask + MySQL backend API (Inside the Backend folder)

You will connect and deploy this full stack app using AWS's Platform as a Service (PaaS) tools.

---

## Quick Start

> **Note:** You need two private Github repos, one for your Frontend and one for your Backend. Follow the course guidelines for clear instructions.

### Frontend Setup

```bash
git clone https://github.com/UIUC-CS498-Cloud/MP5_FullStack_Template
cd MP5_FullStack_Template/Frontend
git init
git remote add origin {your-github-frontend-repo-url}
git add .
git commit -m "Frontend only"
git branch -M main
git push -u origin main
```


### Backend Setup
```bash
git clone https://github.com/UIUC-CS498-Cloud/MP5_FullStack_Template
cd MP5_FullStack_Template/Backend
git init
git remote add origin {your-github-backend-repo-url}
git add .
git commit -m "Backend only"
git branch -M main
git push -u origin main
```
Before deploying, complete the two placeholder functions in `application.py`:

- `insert_data_into_db(payload)`
- `fetch_data_from_db()`

This repos will be connected to AWS CodePipeline for automated deployment.

> **Note:** Do not hardcode database credentials, always use environment variables.

## Log

Last updated in May 2025 by Priyansh Tratiya (tratiya2@illinois.edu), Divya Machineni (divyam4@illinois.edu)
