import { recentPostData } from "@/data/recentPostData";
import Post from "./Post";

function RecentPost() {
    const firstTwoPosts = recentPostData.slice(0, 2);

    return (
        <div className="text-gray-600 body-font border-0 col-span-1">
            <div className="flex flex-col text-start w-full border-0 border-orange-500">
                <h1 className="text-sm font-medium mb-4 text-green-900">Recent Post</h1>
            </div>
            <div className="space-y-4 border-0 border-blue-600 gap-2">
                {firstTwoPosts.map((post) => (
                    <Post
                        key={post.id}
                        id={post.id}
                        title={post.title}
                        imageURL={post.imageURL}
                        details={post.details}
                        date={post.date}
                    />
                ))}
            </div>
        </div>
    );
}

export default RecentPost;
