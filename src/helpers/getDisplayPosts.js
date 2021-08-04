const getDisplayPostsInfo = () => {
    const displayPosts = document.createElement("section");
    displayPosts.classList.add("posts");

    return displayPosts;
}

const getPost = () => {
    const post = document.createElement("div")
    post.classList.add("post")

    return post;
}

const getPostsPostImage = (postNumber) => {
    const postsPostImage = document.createElement("img")
    postsPostImage.classList.add("posts-post-image")
    postsPostImage.src = "images/Post" + postNumber + ".png"

    return postsPostImage
}

const getPostsPostInfo = () => {
    const postsPostInfo = document.createElement("div")
    postsPostInfo.classList.add("posts-post-info")

    return postsPostInfo
}

const getPostsPostInfoLikeIcon = () => {
    const postsPostInfoLikeIcon = document.createElement("img")
    postsPostInfoLikeIcon.classList.add("posts-post-info-icon")
    postsPostInfoLikeIcon.src = "./images/love_icon.png"
    postsPostInfoLikeIcon.width = "20"
    postsPostInfoLikeIcon.height = "20"

    return postsPostInfoLikeIcon;
}

const getPostsPostInfoLikes = () => {
    const postsPostInfoLikes = document.createElement("p")
    postsPostInfoLikes.classList.add("posts-post-info-likes")

    const postsPostInfoLikesText = document.createTextNode("177k")
    postsPostInfoLikes.appendChild(postsPostInfoLikesText)

    return postsPostInfoLikes
}

const getPostsPostInfoCommentIcon = () => {
    const postsPostInfoCommentIcon = document.createElement("img")
    postsPostInfoCommentIcon.classList.add("posts-post-info-icon")
    postsPostInfoCommentIcon.src = "./images/comment_icon.png"
    postsPostInfoCommentIcon.width = "20"
    postsPostInfoCommentIcon.height = "20"

    return postsPostInfoCommentIcon
}

const getPostsPostInfoComments = () => {
    const postsPostInfoComments = document.createElement("p");
    const postsPostInfoCommentsText = document.createTextNode("3060");
    postsPostInfoComments.appendChild(postsPostInfoCommentsText);

    return postsPostInfoComments
}

const getDisplayPosts = () => {
    const displayPosts = getDisplayPostsInfo();

    for (var postNumber = 1; postNumber <= 6; postNumber++) {
        const post = getPost()

        const postsPostImage = getPostsPostImage(postNumber)
        post.appendChild(postsPostImage)

        const postsPostInfo = getPostsPostInfo()

        // Displays number of Likes
        const postsPostInfoLikeIcon = getPostsPostInfoLikeIcon()
        postsPostInfo.appendChild(postsPostInfoLikeIcon)

        const postsPostInfoLikes = getPostsPostInfoLikes()
        postsPostInfo.appendChild(postsPostInfoLikes)

        // Display number of Comments
        const postsPostInfoCommentIcon = getPostsPostInfoCommentIcon()
        postsPostInfo.appendChild(postsPostInfoCommentIcon)

        const postsPostInfoComments = getPostsPostInfoComments()
        postsPostInfo.appendChild(postsPostInfoComments);

        post.appendChild(postsPostInfo)
        displayPosts.appendChild(post)
    }

    return displayPosts
}

export default getDisplayPosts;