# Xano Schema

## Tables
- Users: id, email, password, role
- BlogPosts: id, title, content, user_id
- SEOReports: id, blog_id, meta, keywords, score

## Endpoints
- POST /register
- POST /login
- GET /blog-posts
- POST /seo-report
- GET /seo-reports
