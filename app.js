var add = (a, b) => a + b;
var sub = (a, b) => a - b;
var mul = (a, b) => a * b;
var div = (a, b) => a / b;

class Operations{
  /**
   * Does a split, then a reverse and finally a join.
   * It has a cost of O(n), however, it's more efficient than to use
   * the three native methods with concatenation
   *
   * @param  {String} string  String to be operated
   * @param  {String} search  Character to split
   * @param  {String} replace String to replace the character's wanted 
   * @return {String}         String operated
   */
  static splitReverseJoin(string, search = '-', replace = '/'){
    var [tmp, result] = ['', ''];

    for (let i = 0;  i < string.length; i++){
      if (string[i] != search)
        tmp += string[i];
      
      else{
        result = replace + tmp + result;
        tmp  = '';
      }
    }

    return tmp + result;
  }
}

class Person{
  constructor(name, sex, birthdate, country){
    this.name      = name;
    this.sex       = sex;
    this.birthdate = birthdate;
    this.country   = country;
  }

  get website(){
    return this._website
  }

  set website(website){
    this._website = website;
  }

  get email(){
    return this._email
  }

  set email(email){
    this._email = email;
  }

  getYearOfBirth(){
    return Number.parseInt(this.birthdate.slice(0, 4));
  }

  getAge(){
    var today = new Date();
    return sub(today.getUTCFullYear(), this.getYearOfBirth());
  }

  /**
   * Return the birthdate with format dd/mm/yyyy
   * It has a high cost of O(n) because has implicitly 3 O(n) inside
   * However this function just have one line, reducing download time
   *
   * @return String [format dd/mm/yyyy]
   */
  getBirthdate(){
    return this.birthdate.split('-').reverse().join('/');
  }
}

class Developer extends Person{
  constructor (nombre, sex, birthdate, country, position, stack){
    super(nombre, sex, birthdate, country);
    
    this.nombre    = nombre;
    this.sex       = sex;
    this.birthdate = birthdate;
    this.country   = country;
    this.position  = position;
    this.stack     = stack;
  }
}

var learningTech = [];

function learning(...technologies){
  technologies.forEach((tech) => learningTech.push(tech));
}

var dev = new Developer('Kirlled', 'M', '1995-40-40', 'Venezuela', 'Full Stack' ,'LEMP');
dev.website = 'kirlled.com';
dev.email   = 'kirlledaraque@gmail.com';

var backend = new Set();
backend.add('PHP');
backend.add('Laravel');
backend.add('C');
backend.add('C++');
backend.add('Java');

var frontend = new Set();
frontend.add('HTML5');
frontend.add('CSS3');
frontend.add('FlexBox');
frontend.add('SaSS');
frontend.add('Bootstrap');
frontend.add('JavaScript');
frontend.add('jQuery');
frontend.add('AJAX');
frontend.add('VueJs');

var databases = new Set();
databases.add('MySQL');

var sysadmin = new Set();
sysadmin.add('Linux');
sysadmin.add('Ubuntu Server');
sysadmin.add('Nginx');
sysadmin.add('Apache');
sysadmin.add('Tomcat');
sysadmin.add('Security');
sysadmin.add('Firewall');
sysadmin.add("Let's Encrypt");
sysadmin.add("Bash Scripting");

var others = new Set();
others.add('Git');
others.add('Scrum');
others.add('SEO');
others.add('GulpJS');
others.add('cURL');
others.add('POO');
others.add('Composer');
others.add('npm');

var aboutMe = `Hi! my name is ${dev.name} I'm from ${dev.country}, 
I'm ${dev.getAge()} years old, I'm a ${dev.position} Developer, 
I usually use the ${dev.stack} stack to work.`;

console.log(aboutMe);
console.log(`
My Skills:
`);

console.log(`
Backend
----------------------`);
backend.forEach((skill) => console.log('* '+ skill));

console.log(`
Frontend
----------------------`);
frontend.forEach((skill) => console.log('* '+ skill));

console.log(`
SysAdmin
----------------------`);
sysadmin.forEach((skill) => console.log('* '+ skill));

console.log(`
Others
----------------------`);
others.forEach((skill) => console.log('* '+ skill));

console.log(`
Learning
----------------------`);

learning('NodeJS', 'React', 'WebSockets', 'Express', 'MongoDB');

for (tech of learningTech){
  console.log(tech);
}


console.log(`
Running some Tests...
`);

if (Operations.splitReverseJoin('06-07-10-70') == '70/10/07/06')
  console.log('OK');
else
  console.log('ERROR');

if (Operations.splitReverseJoin('06.07.10.70', '.', ',') == '70,10,07,06')
  console.log('OK');
else
  console.log('ERROR');

if (Operations.splitReverseJoin(dev.birthdate) == dev.getBirthdate())
  console.log('OK');
else
  console.log('ERROR');

if (Number.isInteger(dev.getYearOfBirth()))
  console.log('OK');
else
  console.log('ERROR');

if (dev.getYearOfBirth().toString().length == 4)
  console.log('OK');
else
  console.log('ERROR');

console.log(`
If you want to contact me you can do it through my website ${dev.website} or my email ${dev.email}
Regards!
`);


var promesa = new Promise(function(resolve, reject){
  var fruits = ['Apple', 'Pear', 'Grape', 'Strawberry', 'Lemon'];
  c = 0;

  for (fruit of fruits)
    c++;

  if (c > 4)
    resolve('Success');
  else
    reject(Error('Something has gone wrong'));
});

promesa.then(function(result){
  console.log(result);
}, function(error){
  console.log(error);
});