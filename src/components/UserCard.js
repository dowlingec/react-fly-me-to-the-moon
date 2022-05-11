function UserCard({user}) {
    return (
        <div className="user-card" onClick={() => alert('hi! I was clicked')}>
            <img src={user.image_url} alt={'Avatar representing ' + user.username}></img>
            <h2>{user.username}</h2>
        </div>
    )
}

export default UserCard;