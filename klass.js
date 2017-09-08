/**
 * Created by weiqiujuan on 17-7-29.
 */

//简单的模块系统
function addS(studentName){
    console.log('add student '+studentName);
}
exports.addS=addS;

function  addT(teacherName){
    console.log('add teacher '+teacherName);
}
exports.addT=addT;

var student=require('./main');
var teacher=require('./main');

function add(StudentName,TeacherName) {
    teacher.addT(TeacherName);
    student.addS(StudentName);
}

exports.add=add;


var team=require('./main')
team.add('shabi','weiqiuaun');