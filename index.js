function generatePassword(){
    const cp = document.getElementById('copy');
    cp.style.color = 'white';
    const alpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z' ];
    const special = ['^','/','@','!','#','$','&','?'];
    const num = [1,2,3,4,5,6,7,8,9,0];
    var password = 'a';
    for(let i=0; i<4 ; i++){
        var r = Math.floor(Math.random()*52);
        password = alpha[r] + password;
    }
    for(let i=0; i<3 ; i++){
        var r = Math.floor(Math.random()*10);
        password = password + num[r];
    }
    var r = Math.floor(Math.random()*8);
    password = password + special[r];
    for(let i=0; i<3 ; i++){
        var r = Math.floor(Math.random()*52);
        password = password + alpha[r];
    }
    for(let i=0; i<2 ; i++){
        var r = Math.floor(Math.random()*10);
        password = password + num[r];
    }
    var r = Math.floor(Math.random()*8);
    password = password + special[r];
    var r = Math.floor(Math.random()*52);
    password = password + alpha[r];
    document.getElementById('pass').innerHTML = password;
}
function copyText() {
    const str = document.getElementById('pass').innerText;
    const el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    const cp = document.getElementById('copy');
    cp.style.color = 'blue';
}