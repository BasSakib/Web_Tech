<?php
header("Content-Type: application/json");

$students = [
    [
        "name" => "Asif Rahman",
        "id" => "CSE-2023-101",
        "department" => "Computer Science and Engineering",
        "cgpa" => "3.85"
    ],
    [
        "name" => "Nusrat Jahan",
        "id" => "EEE-2023-102",
        "department" => "Electrical and Electronic Engineering",
        "cgpa" => "3.72"
    ],
    [
        "name" => "Tanvir Hasan",
        "id" => "BBA-2023-103",
        "department" => "Business Administration",
        "cgpa" => "3.91"
    ]
];

echo json_encode($students);
?>