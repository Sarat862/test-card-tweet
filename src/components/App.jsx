import { useEffect, useState } from "react";
import css from "./App.module.css";
import Logo from "images/Logo.svg";
import bgIcons from "images/bg-icons.png";
import Avatar from "images/avatar.png";


function App() {

  const [followers, setFollowers] = useState(100500);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("followers") === null) {
      return;
    }
    const result = JSON.parse(localStorage.getItem("followers"));
    setFollowers(result.followers);
    setActive(result.active);
  }, [])

  const handleClick = () => {
    switch (followers) {
      case 100500: 
        setFollowers(followers + 1);
        setActive(true);
        localStorage.setItem("followers", JSON.stringify({followers: followers + 1, active: true}) );
        break;
      case 100501: 
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

  return (
    <div className={css.wrapper}>
      <img src={Logo} alt="Logo" className={css.logo_img} />
      <img src={bgIcons} alt="" className={css.bgIcons_img} />
      <hr className={css.line} />
        <img src={Avatar} alt="avatar" width="62" height="62" className={css.avatar_img} />
      <ul className={css.list}>
        <li className={css.item}>777 tweets</li>
        <li className={css.item}>{parseNumberFollowers()} followers</li>
      </ul>
      {active && <button type="button" className={`${css.btn} ${css.active}`} onClick={handleClick}>Following</button>}
      {!active && <button type="button" className={css.btn} onClick={handleClick}>Follow</button>}
    </div>
  );
}

export default App;