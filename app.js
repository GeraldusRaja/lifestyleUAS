var app = angular.module('donorApp', []);

// login
app.controller('LoginController', function($scope) {
    $scope.user = {
        email: '',
        password: ''
    };

    $scope.login = function() {
        if ($scope.user.email === '1234@test.com' && $scope.user.password === '1234') {
            alert('Login berhasil! Selamat datang, ' + $scope.user.email);
            window.location.href = 'index.html';
        } else {
            alert('Email atau password salah. Silakan coba lagi.');
        }
    };
});

//form
app.controller('MainController', function($scope, $window) {
    $scope.user = {
        name: 'Test',
        email: '1234@test.com',
        bloodGroup: 'A',
        message: 'Golongan darah Saya A, siap mendonorkan darah!'
    };
    $scope.submitForm = function() {
        alert('Terima kasih, ' + $scope.formData.name + ' telah mendaftar sebagai pendonor darah!');
        $scope.formData = {};
    };

    $scope.gallery = [
        { src: 'https://i.pinimg.com/236x/94/19/a9/9419a9c8334eb3f95deb1018984ccd90.jpg', alt: 'Kegiatan donor darah 1' },
        { src: 'https://i.pinimg.com/236x/d3/0b/ae/d30bae8fbe0ce1bc675de2e05afef1ab.jpg', alt: 'Kegiatan donor darah 2' },
        { src: 'https://i.pinimg.com/736x/92/f4/42/92f442ad1ae17336c5b63a1479e2debd.jpg', alt: 'Kegiatan donor darah 3' }
    ];

    // logout
    function confirmLogout() {
        const userName = "Nama Pengguna";
        const confirmation = confirm(`Logout dari ${userName}?`);
        if (confirmation) {
            window.location.href = "login.html";
        }
    }

    // // Fungsi logout
    // $scope.logout = function() {
    // // Menghapus data pengguna (misalnya, data sesi atau token)
    // $scope.user = null;
    
    // // Redirect ke halaman login
    // $window.location.href = 'login.html';
    // };
});
