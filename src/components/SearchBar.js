import React from 'react'
import {connect} from 'react-redux'
import {Form, Item, Input, Icon} from 'native-base'
import {editSearch} from '../redux/actions'

class SearchBar extends React.Component{
    constructor(props){
        super(props)
    }
    onchange = change => {
        this.props.editSearch(change)
    }
    render(){
        return(
            <Item style={{marginRight: 10}}>
                <Input onChangeText={this.onchange} value={this.props.search}/>
                <Icon type="MaterialIcons" name="search" />
            </Item>
        )
    }
}
const mapStateToProps = state => ({
    search: state.search
})
const mapDispatchToProps = {
    editSearch
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)