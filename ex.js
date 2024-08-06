let u = {
    SECONDS: 10
};

function _(value) {
    return "Value is " + value;
}

let S = u.SECONDS ? _(u.SECONDS) : "zero$2";

console.log(S); // Output: Value is 10
