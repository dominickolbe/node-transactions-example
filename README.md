# node-transactions-example

## Getting Started

### Prerequisites

I build this entire project with the following setup:

- macOS Catalina version 10.15.6
- node v12.18.3
- npm v6.14.6
- yarn v1.22.5

### Development

1. create your `.env` file based on the `.env.example`

2. install all necessary dependencies

```bash
yarn install
```

3. start dev server

```bash
yarn start:dev
```

### Production

1. install all necessary dependencies

```bash
yarn install
```

2. start server

```bash
yarn start
```

### Tests

run all tests

```bash
yarn test
```

## API Docs

Get user by id

```
GET localhost:3000/users/1
```

Get merchants by id

```
GET localhost:3000/merchants/1
```

Get merchants with ranking by user and date

```
GET localhost:3000/transactions?user=1&start=2020-09-01&end=2020-10-20
```

## License

Copyright (c) 2020 [Dominic Kolbe](https://dominickolbe.dk)
