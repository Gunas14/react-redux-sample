import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { setSelectedUserDetail } from '../redux/action'

const Namelist = (props) => {
    const [userList, setUserList] = useState([]);
    const styles = {
        container: {
        },
        header:{
            color : "#6666f1",
            fontWeight: 'bold',
            height : '40px',
            fontSize : 26,
            paddingTop: 10,
            paddingLeft : 40
        },
        list: { 
            color: '#444',
            fontSize : 22
        },
        horizontalView:{
            height:'2px',
            backgroundColor :  '#a2a2c3'
        }
    };

    useEffect(() => {
        fetchuserList()
    }, [userList.length])

    const fetchuserList = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(data => data.json())
            .then(result => { setUserList(result); })
    }

    return (
        <div style={styles.container}>
            <div  style={styles.header}>Users list</div>
            {userList.map(value => {
                return <ul key={value.id}
                    style={styles.list}
                    onClick={() => props.setSelectedUserDetail(value)}
                >{value.name}
                <div style={styles.horizontalView}></div>
                </ul>
            })
            }
        </div>
    )
}
const mapStateToProps = state => {
    return {
        selectedUserDetail: state.selectedUserDetail
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setSelectedUserDetail: (value) => dispatch(setSelectedUserDetail(value))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Namelist)