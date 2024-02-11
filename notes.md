# Nextjs btw

## Server vs Client Components
- all components are server by default
- but server comp cant aceess browser apis or listen to browser events
- usually we default to server components in next but use client only when necessary

## Data fetching 
- if data is fetched in a client side component there is extra round trip 
- instead if `fetch()` is called server side our application is SEO friendly
- ALWAYS fetch data serverside!!

## Layout vs Templates
- a layout declared will wrap around all the child directories in that segment
- same with a template
- its mandatory to have layout.tsx in app dir with `<html>` and `<body>` tag in it
- states and effects are preserved in layouts and they are not rerendered between pages
- templates dont follow this
- new instance of template is created in DOM for each page