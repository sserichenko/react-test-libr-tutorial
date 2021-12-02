import React, { useEffect, useState } from 'react'
import "./FollowersList.css"
import axios from "axios"
import { Link } from 'react-router-dom';

export default function FollowersList() {

    const [followers, setFollowers] = useState([]);

    const fetchFollowers = async () => {
            const {data} = await axios.get("https://randomuser.me/api/?results=5")
            setFollowers(await data.results)
        };

    useEffect(() => {
        fetchFollowers()
    }, []);

    if(!followers.length){
        return (
            <>
                <p>There are no followers</p>
            </>
        )
    }

    return (
        <div className="followerslist-container">
            <div>
                {followers && followers.map((follower, index) => (
                    <div className="follower-item" data-testid="follower-item" key={follower.name.last}>
                        <img src={follower.picture.large} alt="follower logo"/>
                        <div className="followers-details">
                            <div className="follower-item-name">
                                <h4>{follower.name.first}</h4> <h4>{follower.name.last}</h4>
                            </div>
                            <p data-testid="followers-username">{follower.login.username}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="todo-footer">
                <Link to="/">Go Back</Link>
            </div>
        </div>
    )
}
