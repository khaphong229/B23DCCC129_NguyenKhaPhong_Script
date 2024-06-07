$(document).ready(function() {
    $.ajax({
        url: 'http://api.uduer.com/users',
        method: 'GET',
        dataType: 'json',
        success: function(students) {
            console.log(students);
            const studentList = $('#student-list');
            students['data']['users'].forEach(function(student) {
                const listItem = $('<li></li>').text(`${student.name} - ${student.email} - ${student.phone}`);
                const editButton = $('<button></button>').text('Edit').click(function() {
                    displayEditForm(student);
                });
                const deleteButton = $('<button></button>').text('Delete').click(function() {
                    deleteUser(student.id);
                });
                listItem.append(editButton, deleteButton);
                studentList.append(listItem);
            });
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.error('Error fetching students:', textStatus, errorThrown);
            const studentList = $('#student-list');
            const listItem = $('<li></li>').text('Không thể tải danh sách sinh viên.');
            studentList.append(listItem);
        }
    });
});

const displayForm = () => {
    $('.form-container').toggle();
}

const handleSubmit = () => {
    let name = $('.name-input').val();
    let email = $('.email-input').val();
    let phone = $('.phone-input').val();
    let pass = $('.pass-input').val();
    let data_user = {
        name: name,
        email: email,
        phone: phone,
        password: pass,
    }
    console.log(data_user);
    $.ajax({
        url: 'http://api.uduer.com/users',
        method: 'POST',
        data: data_user,
        success: function(data) {
            console.log(data);
            $('.mess').text(`Add user successfully ${data}`);
        },
        error: function(err) {
            console.log(err);
        }
    });
}

const displayEditForm = (student) => {
    $('.name-input').val(student.name);
    $('.email-input').val(student.email);
    $('.phone-input').val(student.phone);
    $('.pass-input').val('');
    $('.form-container').show();
    $('#submit-button').off('click').on('click', function() {
        handleUpdate(student.id);
    });
}

const handleUpdate = (id) => {
    let name = $('.name-input').val();
    let email = $('.email-input').val();
    let phone = $('.phone-input').val();
    let pass = $('.pass-input').val();
    let data_user = {
        name: name,
        email: email,
        phone: phone,
        password: pass,
    }
    $.ajax({
        url: `http://api.uduer.com/users/${id}`,
        method: 'PUT',
        data: data_user,
        success: function(data) {
            console.log(data);
            $('.mess').text(`Update user successfully ${data}`);
        },
        error: function(err) {
            console.log(err);
        }
    });
}

const deleteUser = (id) => {
    $.ajax({
        url: `http://api.uduer.com/users/${id}`,
        method: 'DELETE',
        success: function(data) {
            console.log(data);
            $('.mess').text(`Delete user successfully ${data}`);
        },
        error: function(err) {
            console.log(err);
        }
    });
}
