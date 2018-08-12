const tv4 = require("./tv4.js");
tv4.addFormat("a", {
    validator() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve();
                // resolve();
            }, 1000);
        });        
    },
    cache: true
});
var schema = {
    type: "object",
    required: ["a", "b"],
    properties: {
        a: {
            type: "number",
            condition: "parentModel.b>2"
        },
        b: {
            type: "number"
        },
        c: {
            type: "string",
            format: "a"
        }
    }
};
function main() {
    tv4.validateResult(
        {
            // a: 1,
            b: 2,
            c: "1"
        },
        schema
    ).then(res => {
        console.log(res);
    });
}
console.time("a");
main();
setTimeout(() => {
    main();
}, 1200);

console.timeEnd("a");
