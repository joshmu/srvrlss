# Serverless Functions

A bunch of serverless functions!

### Hello

`/api/hello`
Will say hello.

### Email

`/api/email`
Provide transporter and email config as a json object to send emails. Perfect for _contact us_ pages.

## Instructions using Vercel

Serverless functions are held in the `api/` folder.

```
npm i -g vercel
vercel init
vercel deploy --prod
```
