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
        message: 'Saya siap mendonorkan darah!'
    };
    $scope.submitForm = function() {
        alert('Terima kasih, ' + $scope.formData.name + ' telah mendaftar sebagai pendonor darah!');
        $scope.formData = {};
    };

    $scope.gallery = [
        { src: 'image1.jpg', alt: 'Kegiatan donor darah 1' },
        { src: 'image2.jpg', alt: 'Kegiatan donor darah 2' },
        { src: 'image3.jpg', alt: 'Kegiatan donor darah 3' }
    ];

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
