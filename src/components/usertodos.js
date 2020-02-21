import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';


const UserTodos = (props) => {
    const [todoArray, setTodoArray] = useState([]);
    const fetchpostList = () => {
        fetch('https://jsonplaceholder.typicode.com/todos?userId=' + props.selectedUserId)
            .then(data => data.json())
            .then(result => { setTodoArray(result) })
    }

    useEffect(() => {
        if (props.selectedUserId) {
            fetchpostList()
        }
    }, [props.selectedUserId])

    const styles = {
        completed: {
            backgroundColor: '#5fc25f',
            width: 30,
            height: 30,
            borderRadius: 15,
            marginTop : 10,
            marginLeft : 10
        },
        inProgress: {
            backgroundColor: "#f58964",
            width: 30,
            height: 30,
            borderRadius: 15,
            marginTop : 10,
            marginLeft : 10
        },
        titleDiv: {
            fontSize: '16px',
            padding: 15,
            width: '100%'
        },
        horizontalView: {
            height: '2px',
            backgroundColor: '#a2a2c3'
        }
    }

    return (
        <div>
            <div>{todoArray.map((value) => {
                return (
                    <div key={value.id}>
                        <div style={{display: 'flex', flexDirection: 'row'}}>
                            <div style={(value.completed) ? styles.completed : styles.inProgress}>
                            </div>
                            <div style={styles.titleDiv}>{value.title}</div>
                        </div>
                        <div style={styles.horizontalView}></div>
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


export default connect(mapStateToProps)(UserTodos);
