# IT-Khiva Backend 

## How to run backend
- create .env file
- add variables demo ```.env.example```
- install packages ```npm install ```   
- run command ``` npm run server ```


## setting admin profile
- i don't have admin register page
- create profile using ```psql``` or ```pgadmin```
- admin structure 
```postgresql
    username
    email
    password
```
- enable 2FA url committed ```url v1/admin/enable-2fa```
- this url generate and save for admin secret key ```Google authenticator```
- download ```Google authenticator```
- save your ```Google authenticator``` secret key

## enter admin profile
- url ```admin```
