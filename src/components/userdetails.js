import React from 'react'
import { connect } from 'react-redux';
import UserPost from './userpost';
import UserTodos from './usertodos';
import '../userdetails.css'

const UserDetails = (props) => {

    return (
        <div>{(props.selectedUserId == null) ?
            <div className="messageView">Please select a user from list to view his/her todos and posts</div> :
            <div className="RightView">
                <h2 className="Title">Todo</h2>
                <div className="ContentView"><UserTodos /></div>
                <h2 className="Title">Post</h2>
                <div className="ContentView"><UserPost /></div>
            </div>}
        </div>
    )
}
const mapStateToProps = state => {
    return {
        selectedUserId: state.selectedUserDetail.id
    }
}


export default connect(mapStateToProps)(UserDetails);
