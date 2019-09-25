module.exports = ( app, db, admin ) => {
    require( './api-requests/user-api')( app, db, admin ),
    require( './api-requests/project-api')( app, db, admin ),
    require( './api-requests/task-api')( app, db, admin ),
    require( './api-requests/card-api')( app, db, admin ),
    require( './api-requests/collab-api')( app, db, admin )
}
