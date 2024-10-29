// Khi tài liệu đã được tải hoàn tất
document.addEventListener('DOMContentLoaded', () => {
    // Kiểm tra nếu trang là index.html hoặc edit.html để tải dữ liệu thích hợp
    if (document.getElementById('edit-form')) {
        loadProfileForEdit(); // Nếu là trang edit.html
    } else {
        loadProfile(); // Nếu là trang index.html
    }
});

// Hàm tải thông tin hồ sơ từ localStorage và hiển thị lên trang index.html
function loadProfile() {
    const profileData = JSON.parse(localStorage.getItem('profileData'));

    if (profileData) {
        document.getElementById('avatarImage').src = profileData.avatar || 'default-avatar.png';
        document.getElementById('profile-name').innerText = profileData.name || 'Tên của bạn';
        document.getElementById('profile-description').innerText = profileData.description || 'Mô tả ngắn về bản thân bạn.';
        document.getElementById('link-facebook').href = profileData.facebook || '#';
        document.getElementById('link-instagram').href = profileData.instagram || '#';
        document.getElementById('link-tiktok').href = profileData.tiktok || '#';
        document.getElementById('link-twitter').href = profileData.twitter || '#';
        document.getElementById('link-phone').href = `tel:${profileData.phone || '0123456789'}`;
        document.getElementById('link-email').href = `mailto:${profileData.email || 'example@gmail.com'}`;
        document.getElementById('link-zalo').href = `https://zalo.me/${profileData.zalo || 'your-zalo-id'}`;
    }
}

// Hàm tải thông tin hồ sơ vào form chỉnh sửa trên trang edit.html
function loadProfileForEdit() {
    const profileData = JSON.parse(localStorage.getItem('profileData'));

    if (profileData) {
        document.getElementById('avatarImage').src = profileData.avatar || 'default-avatar.png';
        document.getElementById('name').value = profileData.name || '';
        document.getElementById('description').value = profileData.description || '';
        document.getElementById('email').value = profileData.email || '';
        document.getElementById('phone').value = profileData.phone || '';
        document.getElementById('zalo').value = profileData.zalo || '';
        document.getElementById('facebook').value = profileData.facebook || '';
        document.getElementById('instagram').value = profileData.instagram || '';
        document.getElementById('tiktok').value = profileData.tiktok || '';
        document.getElementById('twitter').value = profileData.twitter || '';
    }
}

// Hàm xem trước ảnh đại diện khi người dùng tải ảnh lên
function previewAvatar() {
    const file = document.getElementById('avatar').files[0];
    const reader = new FileReader();
    reader.onload = function (e) {
        document.getElementById('avatarImage').src = e.target.result;
    };
    if (file) {
        reader.readAsDataURL(file);
    }
}

// Hàm lưu thông tin hồ sơ vào localStorage từ trang edit.html
function saveProfile() {
    const profileData = {
        avatar: document.getElementById('avatarImage').src, 
        name: document.getElementById('name').value,
        description: document.getElementById('description').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        zalo: document.getElementById('zalo').value,
        facebook: document.getElementById('facebook').value,
        instagram: document.getElementById('instagram').value,
        tiktok: document.getElementById('tiktok').value,
        twitter: document.getElementById('twitter').value
    };
    
    localStorage.setItem('profileData', JSON.stringify(profileData));
    alert('Thông tin đã được lưu!');
    window.location.href = 'index.html'; // Quay lại trang index.html sau khi lưu
}

// Hàm hiển thị ô nhập mật khẩu để chỉnh sửa hồ sơ (cho trang index.html)
function showPasswordInput() {
    const passwordContainer = document.getElementById('password-container');
    passwordContainer.style.display = passwordContainer.style.display === 'none' ? 'block' : 'none';
}

// Hàm để xác thực và chuyển hướng đến trang edit.html (cho trang index.html)
function editProfile() {
    const enteredPassword = document.getElementById('edit-password').value;
    const correctPassword = 'Anhtuan66206!#';

    if (enteredPassword !== correctPassword) {
        alert('Mật khẩu không chính xác!');
        return;
    }
    
    window.location.href = 'edit.html';
}
