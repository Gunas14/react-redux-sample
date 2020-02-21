import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';


const UserPost = (props) => {
    const [postArray, setPostArray] = useState([]);
    const fetchpostList = () => {
        fetch('https://jsonplaceholder.typicode.com/posts?userId=' + props.selectedUserId)
            .then(data => data.json())
            .then(result => { setPostArray(result)})
    }

    useEffect(() => {
        if (props.selectedUserId) {
            fetchpostList()
        }
    }, [props.selectedUserId])
    const styles = {
        subView: {
            display: 'flex',
            flexDirection: 'row',
        },
        header: {
            position: 'relative',
            fontWeight: 'bold',
            paddingLeft: '20px',
            fontSize: '18px',
            paddingTop: '20px',
            width: '70px'
        },
        content: {
            fontSize: '16px',
            paddingLeft: '10px',
            paddingTop: '20px',
            width: '100%'
        },
        oddrow:{
            backgroundColor : "#aaa",
            paddingBottom: 10
        },
        evenrow:{
            paddingBottom: 10
        }
    }

    return (
        <div>
            <div>{postArray.map((value) => {
                return (
                    <div key={value.id} style={(value.id %2 == 0)? styles.evenrow : styles.oddrow}>
                        <div style={styles.subView}>
                            <div style={styles.header}>Title - </div>
                            <div style={styles.content}>{value.title}</div>
                        </div>
                        <div style={styles.subView}>
                            <label style={styles.header}>Body - </label>
                            <div style={styles.content}>{value.body}</div>
                        </div>
                    </div>
                )
            })}</div>
        </div>
    )

}
const mapStateToProps = state => {
    return {
        selectedUserId: state.selectedUserDetail.id
    }
}


export default connect(mapStateToProps)(UserPost);
