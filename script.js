const apiUrl = "https://jsonplaceholder.typicode.com/posts";

const fetchPosts = async () => {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

const createPostCard = (post) => {
    const card = document.createElement("div");
    card.classList.add("post-card");
    card.innerHTML = `
        <h1>${post.userId}</h1>
        <span>${post.id}</span>
        <h2>${post.title}</h2>
        <p>${post.body}</p>
    `;
    return card;
};

const displayPosts = async () => {
    const postContainer = document.getElementById("post-container");
    const posts = await fetchPosts();

    if (posts) {
        posts.forEach((post) => {
            const card = createPostCard(post);
            postContainer.appendChild(card);
        });
    }
};

displayPosts();
