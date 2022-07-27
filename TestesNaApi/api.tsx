import PhotoGet from "./endpoints/PhotoGet";
import PhotoPost from "./endpoints/PhotoPost";
import TokenPost from "./endpoints/TokenPost";
import UserPost from "./endpoints/UserPost";

function Api() {
  return (
    <div>
      <PhotoGet />
      <PhotoPost />
      <TokenPost />
      <UserPost />
    </div>
  );
}

export default Api;
