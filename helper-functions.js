
// checks to make sure ID exists in the DB
const checkID = (id) => {
    if (!id) {
    res.status(404)
    .json({
        success: false,
        message: "The user with the specified ID does not exist."
    })
} else {
    return id
}
};

// makes sure that the post and put have name & bio properties
 const checkReqBody = (res) => {
       return res.status(400) 
        .json({
            success: false,
            message: "Please provide name and bio for the user"
        })
}

module.exports = { checkID, checkReqBody }; 