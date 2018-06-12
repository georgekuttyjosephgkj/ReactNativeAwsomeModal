# ReactNativeAwsomeModal
modal for react-native

It internally use react-native modal

# usage
import ModalComponent from 'react-native-awsome-modal';

<ModalComponent 
        isVisible={this.state.isModalVisible}
        onPressCancelButton={() => this.setState({isModalVisible:false})} 
        onPressSubmitButton={() => alert("submit")}>

</ModalComponent>