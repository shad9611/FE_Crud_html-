
const deleteStudent = async () =>{
    await fetch('http://localhost:8080/api/v1/students',{
        method: "DELETE",
    });
};

