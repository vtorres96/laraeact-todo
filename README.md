# ToDoList-Reactel

application developed using Laravel on the backend and ReactJS on the frontend

## How to install packages (backend)

### after cloning the repository enter the backend folder

```sh
$ cd backend
```

### install packages whit composer

```sh
$ composer install
```

## How to run the dump-autoload

```sh
$ composer dump-autoload
```

### create the .env file and set the following variables

```sh
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=todo_list
DB_USERNAME=homestead
DB_PASSWORD=secret
```

## How to run the migrations

```sh
$ php artisan migrate
```

## How to run the seeders

```sh
$ php artisan db:seed
```

## How to create a key

```sh
$ php artisan key:generate
```

## How to start the application

```sh
$ php artisan serve
```

### Listening port on 8000

```sh
$ http://localhost:8000/
```

## How to install packages (frontend)

## Now walk to the frontend folder

### yarn

```sh
$ yarn
```

### npm

```sh
$ npm install
```

## How to run application

### yarn

```sh
$ yarn start
```

### npm

```sh
$ npm run start
```
