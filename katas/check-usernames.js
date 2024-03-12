function checkUsernames(userName) {

    if(!(/^[_0-9a-z]{5,20}$/).test(userName))
    {
        return false
    }

    return true
}

module.exports = checkUsernames;
