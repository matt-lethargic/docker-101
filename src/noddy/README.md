# Noddy

Simple node http server to demonstrate environment variables

## Commands

Build

```bash
docker build -t noddy .
```

Run

```bash
docker run -d -e HELLO="Little yellow car" -p 8080:3000 --name noddy noddy
```
