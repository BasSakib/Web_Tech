function loadData() {
    var xhr = new XMLHttpRequest();

    document.getElementById("result").innerHTML = "<p>Loading student information...</p>";

    xhr.open("GET", "data.php", true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            var students = JSON.parse(xhr.responseText);
            displayStudents(students);
        } else {
            document.getElementById("result").innerHTML = "<p>Failed to load student data.</p>";
        }
    };

    xhr.send();
}

function displayStudents(students) {
    var output = "<h3>Student Details</h3>";

    for (var i = 0; i < students.length; i++) {
        output +=
            "<div style='border:1px solid #ccc; padding:10px; margin-bottom:10px; border-radius:8px;'>" +
            "<p><strong>Name:</strong> " + students[i].name + "</p>" +
            "<p><strong>ID:</strong> " + students[i].id + "</p>" +
            "<p><strong>Department:</strong> " + students[i].department + "</p>" +
            "<p><strong>CGPA:</strong> " + students[i].cgpa + "</p>" +
            "</div>";
    }

    document.getElementById("result").innerHTML = output;
}

function searchTopStudent() {
    var xhr = new XMLHttpRequest();

    document.getElementById("result").innerHTML = "<p>Finding top student...</p>";

    xhr.open("GET", "data.php", true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            var students = JSON.parse(xhr.responseText);
            var topStudent = students[0];

            for (var i = 1; i < students.length; i++) {
                if (parseFloat(students[i].cgpa) > parseFloat(topStudent.cgpa)) {
                    topStudent = students[i];
                }
            }

            document.getElementById("result").innerHTML =
                "<h3>Top CGPA Student</h3>" +
                "<div style='border:2px solid green; padding:12px; border-radius:8px;'>" +
                "<p><strong>Name:</strong> " + topStudent.name + "</p>" +
                "<p><strong>ID:</strong> " + topStudent.id + "</p>" +
                "<p><strong>Department:</strong> " + topStudent.department + "</p>" +
                "<p><strong>CGPA:</strong> " + topStudent.cgpa + "</p>" +
                "</div>";
        }
    };

    xhr.send();
}