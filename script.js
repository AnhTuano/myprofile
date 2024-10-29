// Khi tài liệu đã được tải hoàn tất
document.addEventListener('DOMContentLoaded', () => {
    loadProfile(); // Tải thông tin hồ sơ khi trang được tải
});

// Hàm lưu thông tin hồ sơ
function saveProfile() {
    const profileData = {
        name: document.getElementById('name').value,
        description: document.getElementById('description').value,
        facebook: document.getElementById('facebook').value,
        instagram: document.getElementById('instagram').value,
        tiktok: document.getElementById('tiktok').value,
        twitter: document.getElementById('twitter').value,
        phone: document.getElementById('phone').value, // Cập nhật số điện thoại
        zalo: document.getElementById('zalo').value, // Cập nhật Zalo
        email: document.getElementById('email').value, // Cập nhật email
        avatar: document.getElementById('avatarImage').src
    };

    // Lưu thông tin hồ sơ vào local storage
    localStorage.setItem('profileData', JSON.stringify(profileData));
    alert('Lưu thông tin thành công!');

    // Chuyển hướng đến index.html
    window.location.href = 'index.html'; // Chuyển hướng
}

// Hàm tải thông tin hồ sơ
function loadProfile() {
    const profileData = JSON.parse(localStorage.getItem('profileData')); // Lấy thông tin từ local storage

    if (profileData) {
        // Điền thông tin vào các ô nhập
        if (document.getElementById('name')) {
            document.getElementById('name').value = profileData.name || '';
        }
        if (document.getElementById('description')) {
            document.getElementById('description').value = profileData.description || '';
        }
        if (document.getElementById('facebook')) {
            document.getElementById('facebook').value = profileData.facebook || '';
        }
        if (document.getElementById('instagram')) {
            document.getElementById('instagram').value = profileData.instagram || '';
        }
        if (document.getElementById('tiktok')) {
            document.getElementById('tiktok').value = profileData.tiktok || '';
        }
        if (document.getElementById('twitter')) {
            document.getElementById('twitter').value = profileData.twitter || '';
        }
        if (document.getElementById('phone')) {
            document.getElementById('phone').value = profileData.phone || '0123456789'; // Không thay đổi giá trị này khi chỉnh sửa
        }
        if (document.getElementById('zalo')) {
            document.getElementById('zalo').value = profileData.zalo || 'https://zalo.me/your-zalo-id'; // Không thay đổi giá trị này khi chỉnh sửa
        }
        if (document.getElementById('email')) {
            document.getElementById('email').value = profileData.email || 'example@gmail.com'; // Không thay đổi giá trị này khi chỉnh sửa
        }
        if (document.getElementById('avatarImage')) {
            document.getElementById('avatarImage').src = profileData.avatar || 'default-avatar.png'; // Ảnh đại diện
        }

        // Cập nhật các liên kết trong index.html
        if (window.location.pathname.includes('index.html')) {
            document.getElementById('profile-name').innerText = profileData.name || 'Tên của bạn';
            document.getElementById('profile-description').innerText = profileData.description || 'Mô tả ngắn về bản thân bạn.';
            document.getElementById('link-facebook').href = profileData.facebook || '#';
            document.getElementById('link-instagram').href = profileData.instagram || '#';
            document.getElementById('link-tiktok').href = profileData.tiktok || '#';
            document.getElementById('link-twitter').href = profileData.twitter || '#';
            document.getElementById('link-phone').innerText = profileData.phone || 'Điện thoại';
            document.getElementById('link-email').innerText = profileData.email || 'Email';
            document.getElementById('link-zalo').innerText = profileData.zalo || 'Zalo';
            document.getElementById('link-zalo').href = `https://zalo.me/${profileData.zalo}`; // Cập nhật href cho Zalo
        }
    }
}

// Hàm hiển thị ô nhập mật khẩu
function showPasswordInput() {
    const passwordContainer = document.getElementById('password-container');
    passwordContainer.style.display = passwordContainer.style.display === 'none' ? 'block' : 'none'; // Chuyển đổi trạng thái hiển thị
}

// Hàm để chỉnh sửa hồ sơ
function editProfile() {
    const enteredPassword = document.getElementById('edit-password').value; // Lấy mật khẩu từ ô nhập
    const correctPassword = 'Anhtuan66206!#'; // Thay đổi mật khẩu này thành mật khẩu của bạn

    // Kiểm tra xem mật khẩu đã nhập có khớp với mật khẩu đúng hay không
    if (enteredPassword !== correctPassword) {
        alert('Mật khẩu không chính xác!'); // Mật khẩu không đúng
        return;
    }

    // Chuyển hướng đến trang edit.html
    window.location.href = 'edit.html';
}
