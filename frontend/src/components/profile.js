import React, { useEffect, useState } from 'react';
import PostDetail from './PostDetail';
import ProfilePic from './ProfilePic';
import './profile.css';

function Profile() {
  var picLink =
    'https://cdn-icons-png.flaticon.com/128/1144/1144760.png';
  const [pic, setPic] = useState([]);
  const [show, setShow] = useState(false);
  const [posts, setPosts] = useState([]);
  const [changePic, setChangePic] = useState(false);
  const [user, setUser] = useState('');

  const toggleDetails = (posts) => {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
      setPosts(posts);
    }
  };

  const changeProfile = () => {
    setChangePic((prevChangePic) => !prevChangePic);
  };

  useEffect(() => {
    fetch(`/user/${JSON.parse(localStorage.getItem('user'))._id}`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('jwt'),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setPic(result.posts);
        setUser(result.user);
        console.log(pic);
      })
      .catch((error) => {
        console.log(error);
        // Handle error
      });
  }, []);

  return (
    <div className="profile">
      <div className="profile-frame">
        <div className="profile-pic">
          <img
            onClick={changeProfile}
            src={user && user.Photo ? user.Photo : picLink}
            alt=""
          />
        </div>
        <div className="profile-data">
          <h1>{JSON.parse(localStorage.getItem('user')).name}</h1>
          <div className="profile-info" style={{ display: "flex" }}>
            <p>{pic ? pic.length : "0"} posts</p>
            <p>{user && user.followers ? user.followers.length : "0"} followers</p>
            <p>{user && user.following ? user.following.length : "0"} following</p>
          </div>

        </div>
      </div>
      <hr
        style={{ width: '90%', margin: '25px auto', opacity: '0.8' }}
      />
      <div className="gallery">
        {pic &&
          pic.map((pics) => (
            <img
              key={pics._id}
              src={pics.photo}
              onClick={() => toggleDetails(pics)}
              className="item"
            />
          ))}
      </div>
      {show && <PostDetail item={posts} toggleDetails={toggleDetails} />}
      {changePic && <ProfilePic changeProfile={changeProfile} />}
    </div>
  );
}

export default Profile;
