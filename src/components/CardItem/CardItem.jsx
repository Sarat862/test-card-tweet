import { useEffect, useState } from "react";
import css from "./CardItem.module.css";
import Logo from "images/Logo.svg";
import bgIcons from "images/bg-icons.png";

export default function CardItem({ id, user, tweets, usersFollowers, avatar }) {

    const [followers, setFollowers] = useState(usersFollowers);
    const [active, setActive] = useState(false);

    // useEffect(() => {
    //     if (localStorage.getItem("followers") === null) {
    //         return;
    //     }
    //     const result = JSON.parse(localStorage.getItem("followers"));
    //     setFollowers(result.followers);
    //     setActive(result.active);
    // }, [])

    const handleClick = () => {
        switch (followers) {
            case usersFollowers: 
                setFollowers(followers + 1);
                setActive(true);
                localStorage.setItem("followers", JSON.stringify({followers: followers + 1, active: true}) );
                break;
            case usersFollowers + 1: 
                setFollowers(followers - 1);
                setActive(false);
                localStorage.setItem("followers", JSON.stringify({followers: followers - 1, active: false}) );
                break;
            default:
        }
    }

    const parseNumberFollowers = () => {
        const result = String(followers).split("");
        result.splice(3, 0, ",");
        return result.join("");
    }

    // const editFollowers = followers.toLocaleString('en-US');

    return (
        <li className={css.wrapper} >
            <img src={Logo} alt="Logo" className={css.logo_img} />
            <img src={bgIcons} alt="" className={css.bgIcons_img} />
            <hr className={css.line} />
            <div className={css.avatar_cirkle}>
                <img src={avatar} alt="avatar" className={css.avatar_img} />
            </div>
            <ul className={css.list}>
                <li className={css.item}>{tweets} tweets</li>
                <li className={css.item}>{parseNumberFollowers()} followers</li>
            </ul>
            {active && <button type="button" className={`${css.btn} ${css.active}`} onClick={handleClick}>Following</button>}
            {!active && <button type="button" className={css.btn} onClick={handleClick}>Follow</button>}
        </li>
    )
}
