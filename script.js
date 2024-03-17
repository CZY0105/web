document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'admin' && password === '123456') {
        document.getElementById('loginMessage').textContent = '登录成功!';
        // 在这里添加登录成功后的操作,例如重定向到个人信息页面
        window.location.href = 'profile.html';
    } else {
        document.getElementById('loginMessage').textContent = '用户名或密码错误,请重试。';
    }
});