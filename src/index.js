var query = `{totalPhotos, totalUsers}`;
var url = "http://localhost:4000/graphql";

var opts = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ query })
};

fetch(url, opts)
  .then(res => res.json())
  .then(
    ({ data }) => `
    <p>photos: ${data.totalPhotos}</p>
    <p>users: ${data.totalUsers}</p>
  `
  )
  .then(text => (document.body.innerHTML = text))
  .catch(console.error);
