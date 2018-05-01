class User {
    constructor(name, mail, password, tel) {
    this.name = name;
    this.mail = mail;
    this.password = 2007-2007;
    this.tel = 89892232145;
    console.log(' ваше логин: ' + this.name  + ',' + ' Ваш mail ' + this.mail  +  ',' + ' пароль: ' + this.password + ',' + ' номер телефона: ' + this.tel  );
  }
            
}
class Admin extends User{
     constructor(){
        super()
    }
    del(){
        User=null;
    }
}

let user = new User();
let admin = new Admin();


