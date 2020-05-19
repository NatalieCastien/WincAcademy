
const posts = [
    {title: "one", body: "Post one"},
    {title: "two", body: "Post two"}
];

const getPosts = () => {
    setTimeout(() => {
        let output = "";
        posts.forEach(post => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
};

const createPost = (post, callbackfunction) => {
    setTimeout(() => {
        posts.push(post);
        callbackfunction();
    }, 2000);
}

createPost({title: "three", body: "post three"}, getPosts);


