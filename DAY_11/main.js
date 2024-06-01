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

const displayForm=()=>{
    $('.form-container').toggle();
}

const handleSubmit=()=>{
    let name=$('.name-input').val();
    let email=$('.email-input').val();
    let phone=$('.name-input').val();
    let pass=$('.pass-input').val();
    let data_user={
        name:name,
        email:email,
        phone:phone,
        password:pass,
    }
    console.log(data_user);
    $.ajax({
        url: 'http://api.uduer.com/users',
        method: 'POST',
        data: data_user,
        success: function(data){
            console.log(data);
            $('.mess').text(`Add user succesfully ${data}`);
        },
        error: function(err){
            console.log(err);
        }
    })
}