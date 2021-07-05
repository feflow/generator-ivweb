module.exports = {
    devkit: {
        commands: {
            dev: {
                builder: "feflow-devkit-ivweb-example:dev",
                options: {
                    product: "",
                    outDir: "dist",
                    moduleName: "my",
                    bizName: "project",
                    minifyHTML: true,
                    minifyCSS: true,
                    minifyJS: true,
                    inlineCSS: true,
                    usePx2rem: true,
                    remUnit: 37.5,
                    remPrecision: 6,
                    inject: true,
                    useTreeShaking: true,
                    port: 8001,
                    hot: true,
                    cdn: "",
                    domain: "",
                    externals: [
                        {
                            module: "react",
                            entry: "//now8.gtimg.com/now/lib/17.0.1/react.js",
                            global: "React",
                        },
                        {
                            module: "react-dom",
                            entry: "//now8.gtimg.com/now/lib/17.0.1/react-dom.js",
                            global: "ReactDOM",
                        },
                    ],
                    webpackConfig: {
                        smartStrategyOption: {
                            plugins: "append",
                        },
                        config: {
                            plugins: [],
                        },
                    },
                },
            },
            build: {
                builder: "feflow-devkit-ivweb-example:build",
                options: {
                    product: "",
                    outDir: "dist",
                    moduleName: "my",
                    bizName: "project",
                    minifyHTML: true,
                    minifyCSS: true,
                    minifyJS: true,
                    inlineCSS: true,
                    usePx2rem: true,
                    remUnit: 37.5,
                    remPrecision: 6,
                    inject: true,
                    useTreeShaking: true,
                    port: 8001,
                    hot: true,
                    cdn: "",
                    domain: "",
                    externals: [
                        {
                            module: "react",
                            entry: "//now8.gtimg.com/now/lib/17.0.1/react.js",
                            global: "React",
                        },
                        {
                            module: "react-dom",
                            entry: "//now8.gtimg.com/now/lib/17.0.1/react-dom.js",
                            global: "ReactDOM",
                        },
                    ],
                    webpackConfig: {
                        smartStrategyOption: {
                            plugins: "append",
                        },
                        config: {
                            plugins: [],
                        },
                    },
                },
            },
        },
    },
};
