function sumArgs(...args) {
    return args.reduce((acc, curr) => acc + curr,0)
}

module.exports = sumArgs;
