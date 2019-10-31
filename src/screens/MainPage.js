import React from 'react'
import {Container, Content , Text, Button} from 'native-base'
import {connect} from 'react-redux'
import {resetNodes} from '../redux/actions'

class MainPage extends React.Component{
    static navigationOptions = {
        header:null
    }
    constructor(props){
        super(props)
    }
    choosePlace = ()=>{
        this.props.navigation.navigate("ChooseOne", {})
    }
    planDay = ()=>{
        this.props.navigation.navigate("ChoosePlaceScreen", {})
    }
    componentDidMount() {
        const { navigation, resetNodes } = this.props
        this.focusListener = navigation.addListener('didFocus', () => {
            resetNodes()
        })
    }
    render(){
        return(
            <Container>
                <Content padder bounces={false}
                contentContainerStyle={{
                    alignContent: "center",
                    justifyContent: "space-around",
                    flex:1,
                }}>
                    <Text style={{fontSize:30, textAlign:"center"}}>
                        Welcome to İstanbul, what do you want to do?
                    </Text>
                    <Button large onPress={this.choosePlace}
                    style={{
                        justifyContent:"center",
                        alignContent:"center"
                    }}>
                        <Text>Choose a place</Text>
                    </Button>
                    <Text style={{textAlign:"center", fontSize:30}}>
                        OR
                    </Text>
                    <Button large onPress={this.planDay}
                    style={{
                        justifyContent:"center",
                        alignContent:"center"
                    }}>
                        <Text>Plan your whole day</Text>
                    </Button>
                </Content>
            </Container>
        )
    }
}
const mapStateToProps = state=>({

})
const mapDispatchToProps = {
    resetNodes
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)