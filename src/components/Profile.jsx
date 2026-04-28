import profilepic from '../assets/profilepic.png';

function Profile ({name, role}) {
  return (
    <div>
        <img src={profilepic} alt="Profile Picture" />
        <h1>{name}</h1>
        <p>{role}</p>
    </div>
  );
}

export default Profile