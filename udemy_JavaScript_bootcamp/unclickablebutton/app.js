const button = document.querySelector("button");

button.addEventListener("mouseover", function () {
    const width = Math.floor(Math.random() * window.innerWidth);
    const height = Math.floor(Math.random() * window.innerHeight);
    button.style.left = `${width}px`;
    button.style.top = `${height}px`;
});

button.addEventListener("click", function () {
    document.body.style.backgroundColor = "green";
    button.innerText = "You definitely cheated!";
});

// here's the code to create an unclickeable button

// we added the code using addEventListener as it is the most functional way to add an event
// to an element

// you can add an event listener inline - but that just causes confusion and mess
// and you can also create events in JS - but they are also messy

// addEventListener is the most functional way to add an event and subsequent function