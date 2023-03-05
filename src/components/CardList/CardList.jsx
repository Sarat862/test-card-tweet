import CardItem from "components/CardItem/CardItem";
import usersCard from "data/usersCard.json";
import css from "./CardList.module.css";

export default function CardList() {

    return (
        <ul className={css.list}>
            {usersCard.map(({id, user, tweets, followers, avatar}) =>
                <CardItem key={id} id={id} user={user} tweets={tweets} usersFollowers={followers} avatar={avatar} />)
            }
        </ul>
    )
}
