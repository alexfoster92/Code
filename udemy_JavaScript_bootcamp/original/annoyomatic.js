const annoyer = {
    phrases: ["literally", "cray cray", "I can't even", "Totes!", "YOLO", "Can't stop, won't stop"],
    pickPhrase() {
        const {
            phrases
        } = this;
        const idx = Math.floor(Math.random() * phrases.length);
        return phrases[idx]
    },
    start() {
        this.timerId = setInterval(() => { // if you use a standard anon func, it would get it's own "this" and therefore "this" would refer to something else
            console.log(this.pickPhrase()) // using the arrow function, which doesn't get it's own "this", we avoid this problem
        }, 3000);
    },
    stop() {
        clearInterval(this.timerId);
        console.log("Finally! It's over!");
    }
}

// arrow functions do not get their own "this", so if you use an arrow function and then refer "this",
// "this" will refer to the previous this which can be useful if you want to refer to the previous "this"