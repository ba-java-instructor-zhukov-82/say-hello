function readName() {
    return document.getElementById('name').value;
}

function send() {
    var hello = '<h2>Hello, ' + readName() + '!</h2>';
    document.getElementById('hello').innerHTML = hello;
}