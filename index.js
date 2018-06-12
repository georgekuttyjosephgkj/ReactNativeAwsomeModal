/*
 ╔═╗┌─┐┌─┐┬─┐┌─┐┌─┐┬┌─┬ ┬┌┬┐┌┬┐┬ ┬
 ║ ╦├┤ │ │├┬┘│ ┬├┤ ├┴┐│ │ │  │ └┬┘
 ╚═╝└─┘└─┘┴└─└─┘└─┘┴ ┴└─┘ ┴  ┴  ┴ 
 Designed and developed by Georgekutty
*/
import React, { Component } from 'react';
import { ScrollView, Modal,TouchableHighlight,Text,Button,View,Dimensions } from 'react-native';
const screenHeight = Dimensions.get('window').height;

export default class ModalComponent extends Component {
    render() { 
        return (
            <Modal
                visible={this.props.isVisible}
                animationType="fade"//slide
                transparent={true}>
                <View style={{ flex: 1,flexDirection:"column",backgroundColor: "#44404052", padding: 10,justifyContent: "center" }}>
                    <View style={{ borderRadius: 3, padding: 10, backgroundColor: '#fff'}}>
                        <ScrollView style={{maxHeight:screenHeight-200}}>
                            <View>
                                {this.props.children}
                            </View>
                        </ScrollView>
                        <View style={{flexDirection:"row",justifyContent:"space-around",padding:5,backgroundColor:"#1494f414",marginTop:5}}>
                            {this.props.onPressSubmitButton ?
                                <Button onPress={() => this.props.onPressSubmitButton()} title="Submit" color="#407ec9"/>
                            :
                                null
                            }
                            {this.props.onPressCancelButton ?
                                <Button onPress={() => this.props.onPressCancelButton()} title="Cancel" color="#ea5656"/>
                            :
                                null
                            }
                        </View>
                    </View>
                </View>
            </Modal>
        );
    }
}
