module.exports = {
    entry : "./main-simple-ajax-flatmap",
    output: {
        filename: "app.js"
    },
    module:{
        loaders:[
            {
                test: /.ts$/,
                loader: "ts-loader"
            }
        ]
    },
    resolve:{
        extensions:[".ts", ".js"]
    }
}