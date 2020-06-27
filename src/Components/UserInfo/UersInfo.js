import React from 'react'
import ImageUrl from '../UserImage/UserImage';
import ShowList from '../ShowList/list'

const userInfo = props => {
    let repeatMeassage = ['hi', 'pic', 'you', 'good']
    return (
        <div>
            <ImageUrl url={'logo192.png'} name={'Logo'} />
            <ul style={{
                textDecoration: 'none',
                listStyleType: 'none'
            }}>
                {repeatMeassage.map(rep =>
                    <ShowList message={rep} key={rep} />)}
            </ul>
            <h2>User Name is {props.name}</h2>
            <h2>User Address is {props.address}</h2>
            <p> About User {props.about}!</p>




        </div>
    )
}
export default userInfo;