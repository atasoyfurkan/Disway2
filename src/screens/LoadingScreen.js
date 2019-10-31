import React from 'react'
import {Container, Content, Text, View  } from 'native-base'
import {ActivityIndicator} from 'react-native'

export default LoadingScreen = props => 
<Container>
    <Content contentContainerStyle={{
        flex: 1,
        justifyContent:"space-between"
    }}>
        <ActivityIndicator size="large" style={{flex:5}}/>
        <View style={{flex:1, justifyContent:"flex-end", paddingBottom:10}}>
            <Text style={{alignSelf:"center", fontSize:20}}>
                %{props.inProcess===0? 0 : Math.round(props.completed*100/props.inProcess)} finished
            </Text>
        </View>
    </Content>
</Container>