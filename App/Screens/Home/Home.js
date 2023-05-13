import React from "react";
import {
    StyleSheet,
    SafeAreaView,
    FlatList,
    View,
    Image,
    TouchableOpacity,
    Dimensions,
    Text
} from "react-native";
const deviceWidth = Dimensions.get('window').width;
import MyPager from '../../Components/PageViewer'

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            refreshing: true,
        }
    }

    componentDidMount() {
        this.fetchCats();
    }

    fetchCats() {
        this.setState({ refreshing: true });
        fetch('https://api.thecatapi.com/v1/images/search?limit=10&page=1')
            .then(res => res.json())
            .then(resJson => {
                this.setState({ data: resJson });
                this.setState({ refreshing: false });
            }).catch(e => console.log(e));
    }

    renderItemComponent = (data) =>

        <View style={{ flex: 1, height: 160, width: deviceWidth / 2 - 20, margin: 10 }}>
            <View>
                <Image
                    style={{ width: deviceWidth / 2 - 20, height: 120 }}
                    source={{ uri: 'https://media.istockphoto.com/photos/refreshing-hot-cup-of-coffee-at-a-cafe-picture-id1358132613?b=1&k=20&m=1358132613&s=170667a&w=0&h=4lxHOZRkfubPw4Y4MKHrk-v7R2ZUrK4KBVtvdJrPtU4=' }}
                />
            </View>
            <View style={{ backgroundColor: 'yellow', bottom: 0, height: 40, alignItems: 'center', justifyContent: 'center' }}><Text>ddsdsd</Text></View>
        </View>

    ItemSeparator = () => <View style={{
        height: 2,
        backgroundColor: "rgba(0,0,0,0.5)",
        marginLeft: 10,
        marginRight: 10,
    }}
    />

    handleRefresh = () => {
        this.setState({ refreshing: false }, () => { this.fetchCats() }); // call fetchCats after setting the state
    }

    render() {
        return (
            <SafeAreaView>
                <View>
                    <View style={{marginTop: 10, marginLeft: 10}}><Text>Welcome To Cafe!</Text>
                </View>
                <View>
                <MyPager/>
                </View>
                <FlatList
                    data={this.state.data}
                    renderItem={item => this.renderItemComponent(item)}
                    keyExtractor={item => item.id.toString()}
                    //ItemSeparatorComponent={this.ItemSeparator}
                    refreshing={this.state.refreshing}
                    onRefresh={this.handleRefresh}
                    numColumns={2}
                />
                </View>
            </SafeAreaView>
            )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 200,
        width: deviceWidth / 2 - 20,
        margin: 10,
        backgroundColor: '#FFF',
        borderRadius: 6,
    },
    image: {
        height: '80%',
        borderRadius: 4,
    },
});