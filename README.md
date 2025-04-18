# CS 498 - Full Stack Event Board Templates (Frontend / Backend)

This repository contains starter code templates to help you complete MP5: Full Stack Event Board using AWS services like S3, CloudFront, CodePipeline, Elastic Beanstalk, and RDS.

---

## Repository Overview

This repo is part of the Full Stack MP (Machine Problem) for CS 498 Cloud Computing UIUC. It includes the base code required to build and deploy:

- A React-based frontend (Inside the Frontend folder)
- A Flask + MySQL backend API (Inside the Backend folder)

You will connect and deploy this full stack app using AWS's Platform as a Service (PaaS) tools.

---

## Quick Start

> **Note:** The frontend code needs to be uploaded to your private GitHub repo, and your finished backend code needs to be uploaded to Elastic Beanstalk. Follow the course guidelines for clear instructions.

### Frontend Setup

```bash
git clone https://github.com/UIUC-CS498-Cloud/MP5_FullStack_Template.git
cd MP5_FullStack_Template/Frontend
git remote set-url origin {your-private-github-repo}
git push -u origin main
```

This repo will be connected to AWS CodePipeline for automated deployment.

### Backend Setup
```bash
cd MP5_FullStack_Template/Backend
```
Before deploying, complete the two placeholder functions in `application.py`:

- `insert_data_into_db(payload)`
- `fetch_data_from_db()`

Zip the `application.py` and `requirements.txt` files to upload to Elastic Beanstalk.

> **Note:** Do not hardcode database credentials, always use environment variables.

## Log

Last updated in April 2025 by Priyansh Tratiya (tratiya2@illinois.edu)
