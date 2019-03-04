const tv4 = require("./tv4.js");
const cn = require("./lang/zh-CN");
// tv4.addLanguage(cn);
tv4.language("zh-CN");
tv4.addFormat("a", {
    validator() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve("sdf");
                // resolve();
            }, 1000);
        });
    },
    cache: true
});
var schema = {
    type: "object",
    required: [
        "a", "b"
    ],
    properties: {
        a: {
            type: "number",
            condition: "parentModel.b>2"
        },
        b: {
            type: "number"
        },
        c: {
            title: "sdf",
            type: "array",
            items: {
                type: 'object',
                properties:{
                    d:{
                        type:'string',
                        format:'a',
                        // minLength:5
                    }
                },
                title: "d"
            }
        }
    }
};
function main() {
    tv4.validateResult({
        // a: 1,
        b: 2,
        c:[{
            d:"1"
        }]
    }, schema).then(res => {
        console.log(res);
    });
}
main();
