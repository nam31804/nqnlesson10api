import React from 'react'

export default function NqnListUsers(renderNqnlistUsers) {
    console.log("renderNqnlistUsers")
    // hien thi du lieu 
    let nqnElementUser = renderNqnlistUsers.map((nqnUser,index)=>{
        return(
            <tr>
                <td>{nqnUser.id}</td>
                <td>{nqnUser.UserName}</td>
                <td>{nqnUser.Password}</td>
                <td>{nqnUser.Email}</td>
                <td>{nqnUser.Phone}</td>
                <td>...</td>
            </tr>
        )
    })
  return (
    <div className='table table-borderd'>
        <thead>
            <tr>
                <th>Id</th>
                <th>UserName</th>
                <th>Password</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Chuc nang</th>
            </tr>
        </thead>
        <tbody>
            {nqnElementUser}
        </tbody>
    </div>
  )
}
