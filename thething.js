function lovePost(id) {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "b4945e242a420316c7d9b97fec14dde67c4e43cfa841f8288d7940a656669e11b940bf6d68e4067c3938436bf5f9efad");

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        redirect: "follow"
    };

    fetch("https://api.wasteof.money/posts/"+id+"/loves", requestOptions)
    .then((response) => response.text())
    .then((result) => {
      postText = JSON.parse(result);
      return postText;
    })
    .then((parsedData) => {
      alert(parsedData[0]["new"]["loves"])
    })
    .catch((error) => console.error(error));
}
