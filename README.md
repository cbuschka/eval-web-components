# playing with web components

## ingredients
* webpack
* babel (target chrome >= 73)
* scss

### not in yet
* shadown dom

### not to come
* templates


## setup dev env
```bash
nvm use
```

```bash
yarn install
```

```bash
yarn start
```

go to [http://localhost:8080](http://localhost:8080)

generated output on

[http://localhost:8080/webpack-dev-server](http://localhost:8080/webpack-dev-server)

## findings
* compiling with babel to es5 does not work with web components ("must call new")

## links

[custom elements](https://developers.google.com/web/fundamentals/web-components/customelements)

## license

MIT
