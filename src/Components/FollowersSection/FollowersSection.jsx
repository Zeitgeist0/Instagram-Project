import FollowersList from "../FollowersList/FollowersList";
import "./followersSection.scss";
export default function FollowersSection({ followedUsers, suggestedUsers }) {
  return (
    <div className="followers-section">
      <FollowersList
        title="Followed Users"
        users={followedUsers}
        followed={true}
      ></FollowersList>
      <FollowersList
        title="Suggested Users"
        users={suggestedUsers}
        followed={false}
      ></FollowersList>
    </div>
  );
}
