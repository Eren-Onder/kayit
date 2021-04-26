let exmp={
    "firstName": "oktay",
    "lastName": "çopurlu",
    "email": "selimhalim12@gmail.com",
    "password": "aasdasd",
    "gender": "b",
    "birthday": "2021-03-30",
    "about": "123123"
},




export default function Person(props){
    const p=props.person;
    return(
        <tr>
            <td>${props.firstName}</td>
            <td>${props.lasttName}</td>
            <td>${props.email}</td>
            <td>${props.password}</td>
            <td>${props.gender}</td>
            <td>${props.birthday}</td>
            <td>${props.about}</td>

        </tr>
    )
}